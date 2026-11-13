import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuArrowRight, LuCalendarClock, LuCircleCheck, LuHash, LuSend } from "react-icons/lu"

import { GradientButton, Reveal, SectionHeading } from "../components/ui/brand"
import { faqs, features, steps, type Feature } from "../data/content"
import { useStartTrial } from "../hooks/use-start-trial"
import { gradients } from "../theme"

/** Small product-UI vignettes layered over each feature photo. */
function FeatureMock({ id }: { id: string }) {
  const shell = {
    bg: "rgba(255, 255, 255, 0.94)",
    backdropFilter: "blur(10px)",
    rounded: "2xl",
    shadow: "0 20px 50px -20px rgba(28, 3, 52, 0.55)",
    p: "4",
    borderWidth: "1px",
    borderColor: "whiteAlpha.700",
  } as const

  if (id === "scheduled-posts") {
    return (
      <Stack gap="2.5" {...shell}>
        <HStack justify="space-between">
          <Badge colorPalette="grape" variant="subtle" rounded="full">
            <LuCalendarClock /> Scheduled
          </Badge>
          <Text fontSize="xs" color="fg.muted">
            Thu, 9:00 AM
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.800">
          Blue tiles, golden light, and a staircase that feels like the inside of a wave. Some buildings you visit;
          this one visits you back.
        </Text>
        <HStack gap="3" rowGap="1" color="grape.600" fontSize="xs" fontWeight="semibold" flexWrap="wrap">
          {["architecturelovers", "lightwell", "travelgram"].map((tag) => (
            <HStack key={tag} gap="0.5" whiteSpace="nowrap">
              <LuHash aria-hidden="true" />
              {tag}
            </HStack>
          ))}
        </HStack>
      </Stack>
    )
  }

  if (id === "engagement") {
    return (
      <Stack gap="3" {...shell}>
        <HStack gap="2.5" align="flex-start">
          <Avatar.Root size="xs" colorPalette="sky" variant="solid">
            <Avatar.Fallback name="Trail Mix" />
          </Avatar.Root>
          <Box>
            <Text fontSize="xs" fontWeight="bold">
              @trailmix.tom
            </Text>
            <Text fontSize="sm" color="gray.700">
              First light on the ridge. Worth the 4 AM alarm.
            </Text>
          </Box>
        </HStack>
        <HStack gap="2.5" align="flex-start" ps="6">
          <Avatar.Root size="xs" colorPalette="magenta" variant="solid">
            <Avatar.Fallback name="You" />
          </Avatar.Root>
          <Box>
            <Text fontSize="xs" fontWeight="bold">
              you{" "}
              <Text as="span" color="magenta.600" fontWeight="semibold">
                via Engage Agent
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.700">
              That backlight on the fog is unreal. Were you shooting bracketed, or is that one exposure?
            </Text>
          </Box>
        </HStack>
      </Stack>
    )
  }

  return (
    <Stack gap="3" {...shell} align="center" textAlign="center">
      <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="0.14em" color="sky.700">
        Story preview
      </Text>
      <Text fontWeight="800" fontSize="lg" lineHeight="1.2">
        Sunday reset, but make it 10 minutes.
      </Text>
      <HStack w="full" gap="2">
        <Center flex="1" py="2" rounded="lg" bg="grape.50" fontSize="sm" fontWeight="semibold">
          Yes, please
        </Center>
        <Center flex="1" py="2" rounded="lg" bg="magenta.50" fontSize="sm" fontWeight="semibold">
          Need it
        </Center>
      </HStack>
      <Center w="full" py="2" rounded="full" bgImage={gradients.cta} color="white" fontSize="sm" fontWeight="bold" gap="2">
        <LuSend /> Get the checklist
      </Center>
    </Stack>
  )
}

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1
  return (
    <Box as="section" id={feature.id} aria-labelledby={`${feature.id}-title`} py={{ base: "12", md: "20" }}>
      <Container maxW="7xl" px={{ base: "4", md: "6" }}>
        <Stack
          direction={{ base: "column", lg: flip ? "row-reverse" : "row" }}
          gap={{ base: "10", lg: "16" }}
          align="center"
        >
          <Reveal flex="1" w="full">
            <Box position="relative">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                loading="lazy"
                rounded="3xl"
                w="full"
                aspectRatio={{ base: 4 / 3, md: 5 / 4 }}
                objectFit="cover"
                shadow="0 30px 70px -30px rgba(28, 3, 52, 0.5)"
              />
              <Box
                position={{ base: "relative", md: "absolute" }}
                mt={{ base: "-12", md: "0" }}
                mx={{ base: "4", md: "0" }}
                bottom={{ md: "6" }}
                insetInlineStart={flip ? { md: "auto" } : { md: "6" }}
                insetInlineEnd={flip ? { md: "6" } : { md: "auto" }}
                maxW={{ md: "xs" }}
              >
                <FeatureMock id={feature.id} />
              </Box>
            </Box>
          </Reveal>

          <Reveal flex="1" delay={120}>
            <Stack gap="5">
              <HStack gap="3">
                <Center boxSize="11" rounded="xl" bg={`${feature.palette}.subtle`} color={`${feature.palette}.fg`}>
                  <Icon boxSize="5">
                    <feature.icon />
                  </Icon>
                </Center>
                <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="0.14em" color={`${feature.palette}.fg`}>
                  {feature.eyebrow}
                </Text>
              </HStack>
              <Heading
                as="h2"
                id={`${feature.id}-title`}
                fontSize={{ base: "3xl", md: "4xl" }}
                lineHeight="1.15"
                letterSpacing="-0.03em"
                fontWeight="800"
              >
                {feature.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
                {feature.description}
              </Text>
              <List.Root gap="3" variant="plain">
                {feature.bullets.map((b) => (
                  <List.Item key={b} alignItems="flex-start">
                    <List.Indicator asChild color={`${feature.palette}.solid`} mt="0.5">
                      <LuCircleCheck />
                    </List.Indicator>
                    {b}
                  </List.Item>
                ))}
              </List.Root>
            </Stack>
          </Reveal>
        </Stack>
      </Container>
    </Box>
  )
}

export function FeaturesPage() {
  const startTrial = useStartTrial()

  return (
    <>
      <title>Features | InstaGPT</title>

      <Box as="section" bg="grape.950" color="white" position="relative" overflow="hidden">
        <Box position="absolute" inset="0" bgImage={gradients.heroOverlay} opacity="0.9" aria-hidden="true" />
        <Container maxW="4xl" px={{ base: "4", md: "6" }} py={{ base: "16", md: "24" }} position="relative" textAlign="center">
          <Stack gap="5" align="center">
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="0.14em" color="sun.300">
              Features
            </Text>
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05" letterSpacing="-0.04em" fontWeight="800">
              Your whole Instagram workflow, on autopilot.
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="2xl">
              Posting, engaging, and Stories: the three jobs that eat a creator's week. InstaGPT gives each one its own
              agent so you can focus on the work only you can do.
            </Text>
            <HStack gap="2" flexWrap="wrap" justify="center" pt="2">
              {features.map((f) => (
                <Button
                  key={f.id}
                  asChild
                  size="sm"
                  rounded="full"
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.500"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  <a href={`#${f.id}`}>
                    <f.icon /> {f.eyebrow}
                  </a>
                </Button>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>

      {features.map((f, i) => (
        <Box key={f.id} bg={i % 2 === 1 ? "gray.50" : "white"}>
          <FeatureBlock feature={f} index={i} />
        </Box>
      ))}

      <Box as="section" aria-labelledby="how-title" py={{ base: "16", md: "24" }} bg="grape.950" color="white">
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Stack gap={{ base: "10", md: "14" }}>
            <Reveal>
              <Stack gap="3" textAlign="center" align="center">
                <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="0.14em" color="sky.300">
                  How it works
                </Text>
                <Heading as="h2" id="how-title" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" letterSpacing="-0.03em">
                  From sign-up to autopilot in an afternoon.
                </Heading>
              </Stack>
            </Reveal>
            <SimpleGrid as="ol" columns={{ base: 1, sm: 2, lg: 4 }} gap="6" listStyle="none">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 90}>
                  <Stack gap="3" h="full" p="6" rounded="2xl" bg="whiteAlpha.50" borderWidth="1px" borderColor="whiteAlpha.200">
                    <Text fontSize="4xl" fontWeight="800" lineHeight="1" bgImage={gradients.logo} bgClip="text" color="transparent">
                      0{i + 1}
                    </Text>
                    <Heading as="h3" fontSize="lg">
                      {s.title}
                    </Heading>
                    <Text color="whiteAlpha.800">{s.body}</Text>
                  </Stack>
                </Reveal>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box as="section" aria-labelledby="faq-title" py={{ base: "16", md: "24" }}>
        <Container maxW="3xl" px={{ base: "4", md: "6" }}>
          <Stack gap="10">
            <SectionHeading eyebrow="FAQ" title={<span id="faq-title">Questions, answered.</span>} />
            <Accordion.Root collapsible defaultValue={[faqs[0].q]} variant="enclosed" rounded="2xl">
              {faqs.map((f) => (
                <Accordion.Item key={f.q} value={f.q}>
                  <Accordion.ItemTrigger py="5" fontWeight="bold" fontSize={{ base: "md", md: "lg" }} cursor="pointer">
                    <Text flex="1" textAlign="start">
                      {f.q}
                    </Text>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody color="fg.muted" pb="5">
                      {f.a}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
            <Stack direction={{ base: "column", sm: "row" }} justify="center" gap="3">
              <GradientButton size="xl" onClick={startTrial}>
                Start your free trial <LuArrowRight />
              </GradientButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
