import { Box, Center, Container, Heading, Icon, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { LuArrowRight, LuHandHeart, LuShieldCheck, LuUserRoundCheck } from "react-icons/lu"

import handheldFeed from "../assets/images/handheld-device-1.webp"
import { Eyebrow, GradientButton, GradientText, Reveal, SectionHeading } from "../components/ui/brand"
import { useStartTrial } from "../hooks/use-start-trial"

const values = [
  {
    icon: LuUserRoundCheck,
    palette: "grape",
    title: "Your voice, amplified",
    body: "Agents learn from you, not the other way around. If a draft doesn't sound like something you'd say, it doesn't ship.",
  },
  {
    icon: LuShieldCheck,
    palette: "magenta",
    title: "Humans hold the keys",
    body: "Approve-first by default, clear activity logs, and one-tap pause. Automation should feel like a seatbelt, not a stranger driving.",
  },
  {
    icon: LuHandHeart,
    palette: "sky",
    title: "Creator-first, always",
    body: "We build for the solo creator juggling a day job and a dream. If a feature doesn't buy you back time, we cut it.",
  },
] as const

const milestones = [
  { year: "2024", text: "Born from a group chat of burned-out creators asking, \"What if the caption wrote itself?\"" },
  { year: "2025", text: "Private beta with 600 creators. Average weekly time on Instagram admin dropped from 6 hours to 40 minutes." },
  { year: "2026", text: "Post, Engage, and Story Agents launch publicly, and 40,000 creators put their feeds on autopilot." },
]

export function AboutPage() {
  const startTrial = useStartTrial()

  return (
    <>
      <title>About | InstaGPT</title>

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Stack direction={{ base: "column", lg: "row" }} gap={{ base: "10", lg: "16" }} align="center">
            <Reveal flex="1">
              <Stack gap="6">
                <Eyebrow>About InstaGPT</Eyebrow>
                <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05" letterSpacing="-0.04em" fontWeight="800">
                  We build the coworker <GradientText>every creator deserves.</GradientText>
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                  Creators were never supposed to be full-time schedulers, copywriters, and community managers on top of
                  making the actual thing. InstaGPT exists to hand that busywork to AI agents that work like a great
                  assistant: quietly, reliably, and always in your voice.
                </Text>
                <Text color="fg.muted">
                  We're a small team of designers, engineers, and recovering social media managers based in Los Angeles.
                  We use InstaGPT to run our own accounts, which means we feel every rough edge before you do.
                </Text>
              </Stack>
            </Reveal>
            <Reveal flex="1" w="full" delay={120}>
              <Image
                src={handheldFeed}
                alt="A hand holding a phone showing a bright, curated Instagram feed"
                rounded="3xl"
                w="full"
                aspectRatio={4 / 3}
                objectFit="cover"
                shadow="0 30px 70px -30px rgba(28, 3, 52, 0.5)"
              />
            </Reveal>
          </Stack>
        </Container>
      </Box>

      <Box as="section" aria-labelledby="values-title" py={{ base: "16", md: "24" }} bg="gray.50">
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Stack gap={{ base: "10", md: "14" }}>
            <Reveal>
              <SectionHeading
                eyebrow="What we believe"
                title={<span id="values-title">AI that works for creators, not instead of them.</span>}
              />
            </Reveal>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 100}>
                  <Stack gap="4" h="full" p={{ base: "6", md: "8" }} bg="white" rounded="2xl" borderWidth="1px" borderColor="gray.100">
                    <Center boxSize="12" rounded="xl" bg={`${v.palette}.subtle`} color={`${v.palette}.fg`}>
                      <Icon boxSize="6">
                        <v.icon />
                      </Icon>
                    </Center>
                    <Heading as="h3" fontSize="xl">
                      {v.title}
                    </Heading>
                    <Text color="fg.muted">{v.body}</Text>
                  </Stack>
                </Reveal>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box as="section" aria-labelledby="story-title" py={{ base: "16", md: "24" }}>
        <Container maxW="3xl" px={{ base: "4", md: "6" }}>
          <Stack gap="10">
            <SectionHeading eyebrow="Our story" title={<span id="story-title">Short history, big feed.</span>} />
            <Stack as="ol" gap="0" listStyle="none" position="relative">
              {milestones.map((m, i) => (
                <Reveal as="li" key={m.year} delay={i * 100}>
                  <Stack
                    direction="row"
                    gap={{ base: "4", md: "6" }}
                    pb={i === milestones.length - 1 ? "0" : "10"}
                    position="relative"
                  >
                    <Stack align="center" gap="0" flexShrink="0">
                      <Center boxSize="12" rounded="full" bg="grape.500" color="white" fontWeight="800" fontSize="sm">
                        {m.year.slice(2)}
                      </Center>
                      {i < milestones.length - 1 && <Box flex="1" w="2px" bg="grape.100" mt="2" minH="10" />}
                    </Stack>
                    <Stack gap="1" pt="2">
                      <Text fontWeight="800" fontSize="lg" color="grape.700">
                        {m.year}
                      </Text>
                      <Text color="fg.muted">{m.text}</Text>
                    </Stack>
                  </Stack>
                </Reveal>
              ))}
            </Stack>
            <Center>
              <GradientButton size="xl" onClick={startTrial} w={{ base: "full", sm: "auto" }}>
                Join the next chapter <LuArrowRight />
              </GradientButton>
            </Center>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
