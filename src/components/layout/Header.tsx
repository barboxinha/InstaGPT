import { useState } from "react"
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  HStack,
  IconButton,
  Link as ChakraLink,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuLogOut, LuMenu } from "react-icons/lu"
import { NavLink, useLocation } from "react-router"

import { useAuth } from "../../context/auth"
import { useStartTrial } from "../../hooks/use-start-trial"
import { navItems } from "../../data/content"
import { GradientButton, GradientText, Logo } from "../ui/brand"

function NavItem({ to, label, onClick, block }: { to: string; label: string; onClick?: () => void; block?: boolean }) {
  return (
    <ChakraLink
      asChild
      display={block ? "block" : "inline-flex"}
      px={block ? "4" : "3.5"}
      py={block ? "3" : "2"}
      rounded={block ? "lg" : "full"}
      fontWeight="semibold"
      fontSize={block ? "lg" : "sm"}
      color="gray.700"
      textDecoration="none"
      transition="color 0.15s ease, background 0.15s ease"
      _hover={{ color: "grape.600", bg: "grape.50", textDecoration: "none" }}
      _currentPage={{ color: "magenta.700", bg: "magenta.50" }}
      focusRing="outside"
    >
      <NavLink to={to} end={to === "/"} onClick={onClick}>
        {label}
      </NavLink>
    </ChakraLink>
  )
}

export function Header() {
  const { user, openLogin, logout } = useAuth()
  const startTrial = useStartTrial()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const { pathname } = useLocation()

  // Close the mobile drawer whenever the route changes (including browser back/forward).
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMenuOpen(false)
  }

  const authButton = user ? (
    <Button variant="ghost" rounded="full" fontWeight="semibold" onClick={logout}>
      <LuLogOut /> Log out
    </Button>
  ) : (
    <Button colorPalette="sky" rounded="full" px="6" fontWeight="bold" onClick={openLogin}>
      Login
    </Button>
  )

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="rgba(255, 255, 255, 0.82)"
      backdropFilter="saturate(180%) blur(14px)"
      borderBottomWidth="1px"
      borderColor="#dbdbdb"
      pt="env(safe-area-inset-top)"
    >
      <Container
        maxW="7xl"
        px={{ base: "4", md: "6" }}
        h={{ base: "64px", md: "72px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="4"
      >
        <Logo />

        <HStack as="nav" aria-label="Main" gap="1" hideBelow="md">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </HStack>

        <HStack gap="2">
          <Box hideBelow="md">{authButton}</Box>

          <Drawer.Root open={menuOpen} onOpenChange={(e) => setMenuOpen(e.open)} placement="end" size="xs">
            <Drawer.Trigger asChild>
              <IconButton aria-label="Open menu" variant="ghost" rounded="full" size="lg" hideFrom="md">
                <LuMenu />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop backdropFilter="blur(4px)" />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title fontSize="2xl" fontWeight="800" letterSpacing="-0.03em">
                      <GradientText>InstaGPT</GradientText>
                    </Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Stack as="nav" aria-label="Mobile" gap="1">
                      {navItems.map((item) => (
                        <NavItem key={item.to} {...item} block onClick={closeMenu} />
                      ))}
                    </Stack>
                  </Drawer.Body>
                  <Drawer.Footer flexDirection="column" alignItems="stretch" gap="3" pb="calc(env(safe-area-inset-bottom) + 1.5rem)">
                    {user ? (
                      <>
                        <Text fontSize="sm" color="fg.muted" textAlign="center">
                          Signed in as {user.email}
                        </Text>
                        <Button
                          variant="outline"
                          rounded="full"
                          onClick={() => {
                            closeMenu()
                            logout()
                          }}
                        >
                          <LuLogOut /> Log out
                        </Button>
                      </>
                    ) : (
                      <>
                        <GradientButton
                          size="lg"
                          onClick={() => {
                            closeMenu()
                            startTrial()
                          }}
                        >
                          Start free trial
                        </GradientButton>
                        <Button
                          size="lg"
                          colorPalette="sky"
                          rounded="full"
                          fontWeight="bold"
                          onClick={() => {
                            closeMenu()
                            openLogin()
                          }}
                        >
                          Login
                        </Button>
                      </>
                    )}
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" aria-label="Close menu" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </HStack>
      </Container>
    </Box>
  )
}
