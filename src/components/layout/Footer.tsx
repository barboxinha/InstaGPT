import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuHeart } from "react-icons/lu"
import { Link as RouterLink } from "react-router"

import { features, navItems, socials } from "../../data/content"
import { gradients } from "../../theme"
import { GradientText } from "../ui/brand"

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <ChakraLink
      asChild
      color="whiteAlpha.800"
      fontSize="sm"
      _hover={{ color: "sky.300", textDecoration: "none" }}
      focusRing="outside"
    >
      <RouterLink to={to}>{children}</RouterLink>
    </ChakraLink>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" bg="grape.950" color="white" position="relative" mt="auto">
      <Box h="1" bgImage={gradients.logo} aria-hidden="true" />
      <Container
        maxW="7xl"
        px={{ base: "4", md: "6" }}
        pt={{ base: "12", md: "16" }}
        pb="calc(env(safe-area-inset-bottom) + 3rem)"
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={{ base: "10", md: "8" }}>
          <Stack gap="4" gridColumn={{ sm: "span 2", md: "span 2" }} maxW="sm">
            <Text fontSize="3xl" fontWeight="800" letterSpacing="-0.03em">
              <GradientText>InstaGPT</GradientText>
            </Text>
            <Text color="whiteAlpha.800">
              AI agents that caption, post, and engage on Instagram, so you can get back to creating the
              things worth posting.
            </Text>
            <HStack gap="2" pt="2" flexWrap="wrap">
              {socials.map((s) => (
                <IconButton
                  key={s.name}
                  asChild
                  aria-label={`InstaGPT on ${s.name}`}
                  variant="ghost"
                  rounded="full"
                  size="lg"
                  color="whiteAlpha.900"
                  bg="whiteAlpha.100"
                  _hover={{ bg: "sky.400", color: "grape.950" }}
                >
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    <s.icon />
                  </a>
                </IconButton>
              ))}
            </HStack>
          </Stack>

          <Stack gap="3" as="nav" aria-label="Footer">
            <Text fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="0.14em" color="sky.300">
              Explore
            </Text>
            {navItems.map((item) => (
              <FooterLink key={item.to} to={item.to}>
                {item.label}
              </FooterLink>
            ))}
          </Stack>

          <Stack gap="3">
            <Text fontWeight="bold" fontSize="sm" textTransform="uppercase" letterSpacing="0.14em" color="sky.300">
              Agents
            </Text>
            {features.map((f) => (
              <FooterLink key={f.id} to={`/features#${f.id}`}>
                {f.eyebrow}
              </FooterLink>
            ))}
          </Stack>
        </SimpleGrid>

        <Flex
          mt="12"
          pt="6"
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap="3"
          fontSize="sm"
          color="whiteAlpha.700"
        >
          <Text>InstaGPT &copy; {year}. An imaginary product, built for real creators.</Text>
          <HStack gap="1.5" letterSpacing="0.2em" textTransform="uppercase" fontSize="xs">
            <Text>Made with</Text>
            <Icon color="magenta.400" aria-label="love" role="img">
              <LuHeart fill="currentColor" />
            </Icon>
            <Text>in LA</Text>
            <ChakraLink
              href="https://github.com/barboxinha"
              target="_blank"
              rel="noopener noreferrer"
              color="whiteAlpha.800"
              _hover={{ color: "sky.300", textDecoration: "none" }}
              focusRing="outside"
            >
              @barboxinha
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
