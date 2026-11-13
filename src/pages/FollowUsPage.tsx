import { useState, type SubmitEvent } from "react"
import {
  Box,
  Card,
  Center,
  Container,
  Field,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuArrowUpRight, LuMail } from "react-icons/lu"

import architecturePost from "../assets/images/architecture-post.webp"
import banner from "../assets/images/banner-steve-gale.webp"
import handheldGrid from "../assets/images/handheld-device-2.webp"
import { GradientButton, GradientText, Reveal, SectionHeading } from "../components/ui/brand"
import { toaster } from "../components/ui/toaster"
import { socials } from "../data/content"
import { gradients } from "../theme"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const latestPosts = [
  { src: architecturePost, alt: "Someone photographing a tiled blue light well", caption: "Caption makeover: before vs. after" },
  { src: handheldGrid, alt: "A phone showing an Instagram grid of adventure photos", caption: "How @trailmix.tom tripled replies" },
  { src: banner, alt: "A phone on a selfie stick against a dusky blue sky", caption: "Golden-hour posting windows, decoded" },
]

function Newsletter() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string>()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email address.")
      return
    }
    setError(undefined)
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setEmail("")
    toaster.create({
      type: "success",
      title: "You're subscribed",
      description: "The Creator Dispatch lands in your inbox every other Tuesday.",
      closable: true,
    })
  }

  return (
    <Box rounded="3xl" bgImage={gradients.band} color="white" p={{ base: "6", md: "12" }}>
      <Stack direction={{ base: "column", lg: "row" }} gap={{ base: "6", lg: "12" }} align={{ lg: "center" }}>
        <Stack gap="2" flex="1">
          <HStack gap="2" fontWeight="bold" textTransform="uppercase" letterSpacing="0.14em" fontSize="sm">
            <LuMail /> The Creator Dispatch
          </HStack>
          <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="800" letterSpacing="-0.03em">
            Algorithm intel, minus the doomscroll.
          </Heading>
          <Text color="whiteAlpha.900">
            One short email every other week with what's working on Instagram right now. Unsubscribe in one click.
          </Text>
        </Stack>
        <Box asChild flex="1" w="full">
          <form onSubmit={handleSubmit} noValidate>
          <Stack direction={{ base: "column", sm: "row" }} gap="3" align={{ sm: "flex-start" }}>
            <Field.Root invalid={!!error} flex="1">
              <Field.Label srOnly>Email address</Field.Label>
              <Input
                size="xl"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                bg="white"
                color="gray.900"
                rounded="full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
              />
              <Field.ErrorText color="white" fontWeight="semibold">
                {error}
              </Field.ErrorText>
            </Field.Root>
            <GradientButton
              type="submit"
              size="xl"
              bgImage="none"
              bg="grape.950"
              _hover={{ bg: "grape.900" }}
              loading={submitting}
            >
              Subscribe
            </GradientButton>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  )
}

export function FollowUsPage() {
  return (
    <>
      <title>Follow Us | InstaGPT</title>

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Stack gap={{ base: "10", md: "14" }}>
            <Reveal>
              <SectionHeading
                as="h1"
                eyebrow="Follow us"
                title={
                  <>
                    Come hang out <GradientText>in the feed.</GradientText>
                  </>
                }
                description="Our own accounts are run by InstaGPT agents (with a human on approvals). Follow along for workflow tips, product drops, and the occasional behind-the-scenes blooper."
              />
            </Reveal>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="5">
              {socials.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  <Card.Root
                    asChild
                    h="full"
                    rounded="2xl"
                    borderWidth="1px"
                    borderColor="gray.100"
                    transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      borderColor: `${s.palette}.200`,
                      shadow: "0 20px 50px -24px rgba(134, 15, 243, 0.45)",
                    }}
                    _focusVisible={{ outline: "3px solid", outlineColor: "grape.500", outlineOffset: "2px" }}
                    _motionReduce={{ transition: "none", _hover: { transform: "none" } }}
                    className="group"
                  >
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow InstaGPT on ${s.name} (opens in a new tab)`}>
                      <Card.Body gap="4">
                        <HStack justify="space-between">
                          <Center boxSize="12" rounded="xl" bg={`${s.palette}.subtle`} color={`${s.palette}.fg`}>
                            <Icon boxSize="6">
                              <s.icon />
                            </Icon>
                          </Center>
                          <Icon
                            boxSize="5"
                            color="fg.subtle"
                            transition="transform 0.2s ease, color 0.2s ease"
                            _groupHover={{ transform: "translate(2px, -2px)", color: "grape.600" }}
                          >
                            <LuArrowUpRight />
                          </Icon>
                        </HStack>
                        <Stack gap="0.5">
                          <Heading as="h2" fontSize="xl">
                            {s.name}
                          </Heading>
                          <Text fontSize="sm" color="fg.muted">
                            {s.handle} &middot; {s.followers} followers
                          </Text>
                        </Stack>
                        <Text color="gray.700">{s.blurb}</Text>
                      </Card.Body>
                    </a>
                  </Card.Root>
                </Reveal>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box as="section" aria-labelledby="latest-title" py={{ base: "12", md: "16" }} bg="gray.50">
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Stack gap="8">
            <HStack justify="space-between" align="end" flexWrap="wrap" gap="2">
              <Heading as="h2" id="latest-title" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" letterSpacing="-0.02em">
                Latest from @instagpt.ai
              </Heading>
              <Text color="fg.muted" fontSize="sm">
                Posted by our own Post Agent
              </Text>
            </HStack>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: "4", md: "6" }}>
              {latestPosts.map((p) => (
                <Box as="figure" key={p.caption} position="relative" rounded="2xl" overflow="hidden" className="group">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    aspectRatio={1}
                    w="full"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _groupHover={{ transform: "scale(1.05)" }}
                    _motionReduce={{ transition: "none", _groupHover: { transform: "none" } }}
                  />
                  <Box
                    as="figcaption"
                    position="absolute"
                    insetX="0"
                    bottom="0"
                    p="4"
                    pt="12"
                    color="white"
                    fontWeight="semibold"
                    bgImage="linear-gradient(to top, rgba(28,3,52,0.85), transparent)"
                  >
                    {p.caption}
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box as="section" py={{ base: "16", md: "24" }} px={{ base: "4", md: "6" }}>
        <Container maxW="6xl" px="0">
          <Reveal>
            <Newsletter />
          </Reveal>
        </Container>
      </Box>
    </>
  )
}
