import {
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  type BoxProps,
  type ButtonProps,
  type TextProps,
} from "@chakra-ui/react"
import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react"
import { Link as RouterLink } from "react-router"

import { gradients } from "../../theme"

/** Text filled with the four-color brand gradient. */
export function GradientText(props: TextProps) {
  return (
    <Text
      as="span"
      bgImage={gradients.logo}
      bgClip="text"
      color="transparent"
      css={{ WebkitTextFillColor: "transparent" }}
      {...props}
    />
  )
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <ChakraLink
      asChild
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="800"
      letterSpacing="-0.03em"
      textDecoration="none"
      _hover={{ textDecoration: "none", opacity: 0.85 }}
      focusRing="outside"
      rounded="md"
    >
      <RouterLink to="/" onClick={onClick} aria-label="InstaGPT home">
        <GradientText>InstaGPT</GradientText>
      </RouterLink>
    </ChakraLink>
  )
}

/** Primary call-to-action button with the purple-to-magenta gradient. */
export const GradientButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function GradientButton(props, ref) {
    return (
      <Button
        ref={ref}
        bgImage={gradients.cta}
        color="white"
        fontWeight="bold"
        rounded="full"
        shadow="0 10px 30px -10px rgba(134, 15, 243, 0.6)"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          bgImage: gradients.ctaHover,
          transform: "translateY(-1px)",
          shadow: "0 14px 34px -10px rgba(134, 15, 243, 0.75)",
        }}
        _active={{ transform: "translateY(0)" }}
        _motionReduce={{ transition: "none", _hover: { transform: "none" } }}
        {...props}
      />
    )
  },
)

export function Eyebrow({ children, color = "magenta.600" }: { children: ReactNode; color?: string }) {
  return (
    <Text
      fontSize="sm"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="0.14em"
      color={color}
    >
      {children}
    </Text>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "start"
  as?: "h1" | "h2"
}) {
  return (
    <Stack
      gap="3"
      textAlign={align}
      align={align === "center" ? "center" : "flex-start"}
      maxW="2xl"
      mx={align === "center" ? "auto" : undefined}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        as={as}
        fontSize={as === "h1" ? { base: "4xl", md: "6xl" } : { base: "3xl", md: "5xl" }}
        lineHeight="1.1"
        letterSpacing="-0.03em"
        fontWeight="800"
      >
        {title}
      </Heading>
      {description && (
        <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
          {description}
        </Text>
      )}
    </Stack>
  )
}

/** Fades and lifts its children into view the first time they scroll on screen. */
export function Reveal({ delay = 0, ...props }: BoxProps & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // Any overlap counts, so blocks partly on screen after an anchor jump still reveal.
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      opacity={visible ? 1 : 0}
      transform={visible ? "none" : "translateY(24px)"}
      transition="opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
      transitionDelay={`${delay}ms`}
      _motionReduce={{ opacity: 1, transform: "none", transition: "none" }}
      {...props}
    />
  )
}
