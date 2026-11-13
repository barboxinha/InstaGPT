import { useEffect } from "react"
import { Box, Button, Center, Container, Heading, Icon, Progress, Stack, Text } from "@chakra-ui/react"
import { LuArrowLeft, LuConstruction, LuLogOut } from "react-icons/lu"
import { Link as RouterLink, useNavigate } from "react-router"

import { GradientButton, GradientText } from "../components/ui/brand"
import { useAuth } from "../context/auth"
import { gradients } from "../theme"

/** Shown after a successful login while the member dashboard is being built. */
export function UnderConstructionPage() {
  const { user, logout, openLogin } = useAuth()
  const navigate = useNavigate()

  // This page is only for signed-in visitors; send everyone else to log in.
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true })
      openLogin()
    }
  }, [user, navigate, openLogin])

  if (!user) return null

  const firstName = user.email.split("@")[0]

  return (
    <>
      <title>Under Construction | InstaGPT</title>
      <Box
        as="section"
        aria-labelledby="construction-title"
        position="relative"
        overflow="hidden"
        bg="grape.950"
        color="white"
        minH={{ base: "auto", md: "calc(100dvh - 72px)" }}
        display="flex"
        alignItems="center"
      >
        {/* Caution-tape stripe in the brand gold. */}
        <Box
          position="absolute"
          top="0"
          insetX="0"
          h="3"
          bgImage="repeating-linear-gradient(-45deg, #f5bd00 0 18px, #1c0334 18px 36px)"
          aria-hidden="true"
        />
        <Box position="absolute" inset="0" bgImage={gradients.heroOverlay} opacity="0.55" aria-hidden="true" />

        <Container maxW="2xl" px={{ base: "4", md: "6" }} py={{ base: "16", md: "20" }} position="relative">
          <Stack gap="7" align="center" textAlign="center">
            <Center
              boxSize={{ base: "20", md: "24" }}
              rounded="full"
              bg="sun.500"
              color="grape.950"
              shadow="0 0 0 10px rgba(245, 189, 0, 0.15), 0 0 0 22px rgba(245, 189, 0, 0.07)"
              animation="pulse 2.4s ease-in-out infinite"
              _motionReduce={{ animation: "none" }}
            >
              <Icon boxSize={{ base: "10", md: "12" }}>
                <LuConstruction />
              </Icon>
            </Center>

            <Stack gap="3">
              <Text fontWeight="bold" textTransform="uppercase" letterSpacing="0.16em" color="sun.300" fontSize="sm">
                You're logged in, {firstName}
              </Text>
              <Heading
                as="h1"
                id="construction-title"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="800"
                letterSpacing="-0.04em"
                lineHeight="1.05"
              >
                Site Under <GradientText>Construction</GradientText>
              </Heading>
            </Stack>

            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900">
              Thank you for being a part of the InstaGPT project. Our agents are still learning to hold a hammer, and
              your dashboard isn't quite ready to move into.
            </Text>
            <Text color="whiteAlpha.800">
              Please come back later. We'll have the paint dry, the captions flowing, and a seat saved just for you.
            </Text>

            <Progress.Root value={72} w="full" maxW="md" colorPalette="sun" size="lg" striped animated>
              <Stack direction="row" justify="space-between" mb="2">
                <Progress.Label color="whiteAlpha.800" fontWeight="semibold">
                  Dashboard build progress
                </Progress.Label>
                <Progress.ValueText color="sun.300" fontWeight="bold" />
              </Stack>
              <Progress.Track bg="whiteAlpha.200" rounded="full">
                <Progress.Range rounded="full" />
              </Progress.Track>
            </Progress.Root>

            <Stack direction={{ base: "column", sm: "row" }} gap="3" w={{ base: "full", sm: "auto" }} pt="2">
              <GradientButton asChild size="xl">
                <RouterLink to="/">
                  <LuArrowLeft /> Back to home
                </RouterLink>
              </GradientButton>
              <Button
                size="xl"
                rounded="full"
                variant="outline"
                color="white"
                borderColor="whiteAlpha.600"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={() => {
                  logout()
                  navigate("/")
                }}
              >
                <LuLogOut /> Log out
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
