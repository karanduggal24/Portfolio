import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import { motion, useInView } from "motion/react"
import type { MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps extends MotionProps {
  children?: string
  words?: string[]
  className?: string
  duration?: number
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  as?: React.ElementType
  startOnView?: boolean
  showCursor?: boolean
  blinkCursor?: boolean
  cursorStyle?: "line" | "block" | "underscore"
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  })

  const [displayedText, setDisplayedText] = useState<string>("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing")
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  
  // Use framer-motion's useInView as backup
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.05, // Very low threshold
    once: false, // Allow re-triggering
    margin: "0px 0px -20% 0px", // Extended detection zone
  })

  // Custom intersection observer for more reliable detection
  const setupCustomObserver = useCallback(() => {
    if (!elementRef.current || hasStarted) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        threshold: [0, 0.01, 0.05, 0.1], // Multiple thresholds for better detection
        rootMargin: "50px 0px -10% 0px", // Large top margin, negative bottom margin
      }
    )

    observerRef.current.observe(elementRef.current)
  }, [hasStarted])

  // Setup observer when element is available
  useEffect(() => {
    if (elementRef.current && startOnView && !hasStarted) {
      setupCustomObserver()
    }
    
    return () => {
      observerRef.current?.disconnect()
    }
  }, [setupCustomObserver, startOnView, hasStarted])

  // Fallback: also trigger on framer-motion's useInView
  useEffect(() => {
    if (isInView && startOnView && !hasStarted) {
      setHasStarted(true)
    }
  }, [isInView, startOnView, hasStarted])

  // Additional fallback: scroll-based detection for very fast scrolling
  useEffect(() => {
    if (!startOnView || hasStarted) return

    const handleScroll = () => {
      if (!elementRef.current || hasStarted) return

      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Trigger if element is anywhere near the viewport (generous detection)
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        setHasStarted(true)
      }
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    // Also check immediately in case element is already visible
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [startOnView, hasStarted])

  const wordsToAnimate = useMemo(
    () => words || (children ? [children] : []),
    [words, children]
  )
  const hasMultipleWords = wordsToAnimate.length > 1

  const typingSpeed = typeSpeed || duration
  const deletingSpeed = deleteSpeed || typingSpeed / 2

  const shouldStart = startOnView ? hasStarted : true

  useEffect(() => {
    if (!shouldStart || wordsToAnimate.length === 0) return

    const timeoutDelay =
      delay > 0 && displayedText === ""
        ? delay
        : phase === "typing"
          ? typingSpeed
          : phase === "deleting"
            ? deletingSpeed
            : pauseDelay

    const timeout = setTimeout(() => {
      const currentWord = wordsToAnimate[currentWordIndex] || ""
      const graphemes = Array.from(currentWord)

      switch (phase) {
        case "typing":
          if (currentCharIndex < graphemes.length) {
            setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""))
            setCurrentCharIndex(currentCharIndex + 1)
          } else {
            if (hasMultipleWords || loop) {
              const isLastWord = currentWordIndex === wordsToAnimate.length - 1
              if (!isLastWord || loop) {
                setPhase("pause")
              }
            }
          }
          break

        case "pause":
          setPhase("deleting")
          break

        case "deleting":
          if (currentCharIndex > 0) {
            setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""))
            setCurrentCharIndex(currentCharIndex - 1)
          } else {
            const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length
            setCurrentWordIndex(nextIndex)
            setPhase("typing")
          }
          break
      }
    }, timeoutDelay)

    return () => clearTimeout(timeout)
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ])

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || ""
  )
  const isComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== "deleting"

  const shouldShowCursor =
    showCursor &&
    !isComplete &&
    (hasMultipleWords || loop || currentCharIndex < currentWordGraphemes.length)

  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "▌"
      case "underscore":
        return "_"
      case "line":
      default:
        return "|"
    }
  }

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("leading-2rem tracking-[-0.02em]", className)}
      {...props}
    >
      {displayedText}
      {shouldShowCursor && (
        <span
          className={cn("inline-block", blinkCursor && "animate-blink-cursor")}
        >
          {getCursorChar()}
        </span>
      )}
    </MotionComponent>
  )
}
