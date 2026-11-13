import { Box, Button, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { LuArrowLeft, LuSparkles } from "react-icons/lu"
import { Link as RouterLink, useLocation } from "react-router"

import { GradientButton, GradientText, Logo } from "../components/ui/brand"

/**
 * Branded 404. Rendered inside the main layout for unknown URLs.
 */
export function NotFoundPage({ standalone = false }: { standalone?: boolean }) {
  const { pathname } = useLocation()

  return (
    <>
      <title>Page not found | InstaGPT</title>
      <Box
        as="section"
        aria-labelledby="not-found-title"
        minH={standalone ? "100dvh" : { base: "auto", md: "calc(100dvh - 72px)" }}
        display="flex"
        alignItems="center"
        bgImage="radial-gradient(circle at 20% 20%, rgba(134,15,243,0.10), transparent 45%), radial-gradient(circle at 80% 80%, rgba(245,2,187,0.10), transparent 45%)"
      >
        <Container maxW="2xl" px={{ base: "4", md: "6" }} py={{ base: "16", md: "20" }}>
          <Stack gap="6" align="center" textAlign="center">
            {standalone && <Logo />}
            <Text
              as="p"
              aria-hidden="true"
              fontSize={{ base: "8xl", md: "9xl" }}
              fontWeight="800"
              lineHeight="1"
              letterSpacing="-0.06em"
            >
              <GradientText>404</GradientText>
            </Text>
            <Heading as="h1" id="not-found-title" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="800" letterSpacing="-0.03em">
              This post got lost in the algorithm.
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }}>
              We searched every grid, Story, and comment thread, but{" "}
              <Text as="code" bg="grape.50" color="grape.700" px="1.5" py="0.5" rounded="md" fontSize="0.9em" wordBreak="break-all">
                {pathname}
              </Text>{" "}
              doesn't exist. Even our agents can't caption a page that isn't there.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="3" w={{ base: "full", sm: "auto" }} pt="2">
              <GradientButton asChild size="xl">
                <RouterLink to="/">
                  <LuArrowLeft /> Take me home
                </RouterLink>
              </GradientButton>
              <Button asChild size="xl" rounded="full" variant="outline" colorPalette="grape" borderColor="grape.300">
                <RouterLink to="/features">
                  <HStack gap="2">
                    <LuSparkles /> Explore features
                  </HStack>
                </RouterLink>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
