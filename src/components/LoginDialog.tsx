import { useRef, useState, type SubmitEvent } from "react"
import {
  Button,
  Checkbox,
  CloseButton,
  Dialog,
  Field,
  Flex,
  Input,
  Link as ChakraLink,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useNavigate } from "react-router"

import { useAuth } from "../context/auth"
import { useStartTrial } from "../hooks/use-start-trial"
import { gradients } from "../theme"
import { GradientButton, GradientText } from "./ui/brand"
import { PasswordInput } from "./ui/password-input"
import { toaster } from "./ui/toaster"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Errors {
  email?: string
  password?: string
}

export function LoginDialog() {
  const { loginOpen, closeLogin, login } = useAuth()
  const navigate = useNavigate()
  const startTrial = useStartTrial()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)

  const reset = () => {
    setEmail("")
    setPassword("")
    setErrors({})
    setSubmitting(false)
  }

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: Errors = {}
    if (!EMAIL_RE.test(email.trim())) next.email = "Enter the email you signed up with."
    if (!password) next.password = "Enter your password."
    setErrors(next)
    if (next.email) return emailRef.current?.focus()
    if (next.password) return passwordRef.current?.focus()

    // Simulated; no real authentication.
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    login(email.trim())
    closeLogin()
    reset()
    navigate("/welcome")
  }

  return (
    <Dialog.Root
      open={loginOpen}
      onOpenChange={(e) => {
        if (!e.open) {
          closeLogin()
          reset()
        }
      }}
      placement="center"
      size={{ base: "full", sm: "md" }}
      motionPreset="slide-in-bottom"
      initialFocusEl={() => emailRef.current}
    >
      <Portal>
        <Dialog.Backdrop bg="rgba(28, 3, 52, 0.55)" backdropFilter="blur(6px)" />
        <Dialog.Positioner>
          <Dialog.Content rounded={{ base: "none", sm: "2xl" }} overflow="auto" minH={{ sm: "auto" }} my={{ sm: "16" }} shadow="2xl" pt="env(safe-area-inset-top)">
            <Flex h="1.5" bgImage={gradients.logo} aria-hidden="true" />
            <form onSubmit={handleSubmit} noValidate>
              <Dialog.Header flexDirection="column" alignItems="flex-start" gap="1" pt="8">
                <Dialog.Title fontSize="2xl" fontWeight="800" letterSpacing="-0.02em">
                  Welcome back to <GradientText>InstaGPT</GradientText>
                </Dialog.Title>
                <Dialog.Description color="fg.muted">
                  Your agents kept the feed warm while you were away.
                </Dialog.Description>
              </Dialog.Header>

              <Dialog.Body>
                <Stack gap="4">
                  <Field.Root invalid={!!errors.email} required>
                    <Field.Label>
                      Email address <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      ref={emailRef}
                      size="lg"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={submitting}
                    />
                    <Field.ErrorText>{errors.email}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.password} required>
                    <Flex w="full" justify="space-between" align="center">
                      <Field.Label>
                        Password <Field.RequiredIndicator />
                      </Field.Label>
                      <ChakraLink
                        as="button"
                        fontSize="sm"
                        color="grape.600"
                        fontWeight="semibold"
                        onClick={(e) => {
                          e.preventDefault()
                          toaster.create({
                            type: "info",
                            title: "Password resets are coming soon",
                            description: "This demo does not send email yet. Try any password for now.",
                            closable: true,
                          })
                        }}
                      >
                        Forgot password?
                      </ChakraLink>
                    </Flex>
                    <PasswordInput
                      ref={passwordRef}
                      size="lg"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={submitting}
                    />
                    <Field.ErrorText>{errors.password}</Field.ErrorText>
                  </Field.Root>

                  <Checkbox.Root defaultChecked colorPalette="grape" size="sm">
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Keep me signed in on this device</Checkbox.Label>
                  </Checkbox.Root>
                </Stack>
              </Dialog.Body>

              <Dialog.Footer flexDirection="column" alignItems="stretch" gap="4" pb="8">
                <GradientButton type="submit" size="lg" loading={submitting} loadingText="Signing you in">
                  Log in
                </GradientButton>
                <Text fontSize="sm" color="fg.muted" textAlign="center">
                  New here?{" "}
                  <Button
                    variant="plain"
                    size="sm"
                    p="0"
                    h="auto"
                    color="magenta.700"
                    fontWeight="bold"
                    textDecoration="underline"
                    _hover={{ textDecoration: "none" }}
                    onClick={() => {
                      closeLogin()
                      reset()
                      startTrial()
                    }}
                  >
                    Start your free trial
                  </Button>
                </Text>
              </Dialog.Footer>
            </form>
            <Dialog.CloseTrigger asChild top="calc(env(safe-area-inset-top) + 1.25rem)">
              <CloseButton size="md" aria-label="Close login" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
