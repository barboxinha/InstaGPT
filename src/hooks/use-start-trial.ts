import { useCallback, useSyncExternalStore } from "react"
import { useLocation, useNavigate } from "react-router"

export const SIGN_UP_ID = "sign-up"
export const SIGN_UP_EMAIL_ID = "sign-up-email"

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** Scrolls the Home page sign-up card into view and focuses its email field. */
export function focusSignUp() {
  const card = document.getElementById(SIGN_UP_ID)
  if (!card) return
  card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" })
  document.getElementById(SIGN_UP_EMAIL_ID)?.focus({ preventScroll: true })
}

/** Returns a handler that takes the visitor to the sign-up form from any page. */
export function useStartTrial() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return useCallback(() => {
    if (pathname === "/") focusSignUp()
    else navigate(`/#${SIGN_UP_ID}`)
  }, [navigate, pathname])
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)"

export function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(reducedMotionQuery)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  )
}
