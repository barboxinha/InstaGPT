import { Box, Flex } from "@chakra-ui/react"
import { Outlet, ScrollRestoration } from "react-router"

import { AuthProvider } from "../../context/auth"
import { LoginDialog } from "../LoginDialog"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function RootLayout() {
  return (
    <AuthProvider>
      <Flex direction="column" minH="100dvh">
        <Box
          asChild
          position="absolute"
          left="4"
          top="-20"
          zIndex="skipLink"
          bg="white"
          px="4"
          py="2"
          rounded="md"
          shadow="md"
          fontWeight="semibold"
          _focus={{ top: "4" }}
        >
          <a href="#main">Skip to content</a>
        </Box>
        <Header />
        <Box as="main" id="main" flex="1" tabIndex={-1} _focus={{ outline: "none" }}>
          <Outlet />
        </Box>
        <Footer />
      </Flex>
      <LoginDialog />
      {/* First entries of a full page load all share the key "default"; key those by path so a
          typed-in URL doesn't inherit the previous page's scroll position. */}
      <ScrollRestoration getKey={(location) => (location.key === "default" ? location.pathname : location.key)} />
    </AuthProvider>
  )
}
