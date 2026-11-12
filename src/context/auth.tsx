import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

/**
 * Records the email in memory so the Under Construction page can greet the user. 
 * A page refresh clears it.
 */
interface AuthContextValue {
  user: { email: string } | null
  login: (email: string) => void
  logout: () => void
  loginOpen: boolean
  openLogin: () => void
  closeLogin: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextValue["user"]>(null)
  const [loginOpen, setLoginOpen] = useState(false)

  const login = useCallback((email: string) => setUser({ email }), [])
  const logout = useCallback(() => setUser(null), [])
  const openLogin = useCallback(() => setLoginOpen(true), [])
  const closeLogin = useCallback(() => setLoginOpen(false), [])

  const value = useMemo(
    () => ({ user, login, logout, loginOpen, openLogin, closeLogin }),
    [user, login, logout, loginOpen, openLogin, closeLogin],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
  return ctx
}
