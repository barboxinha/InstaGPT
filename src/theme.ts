import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const scale = (values: Record<string, string>) => Object.fromEntries(Object.entries(values).map(([k, v]) => [k, { value: v }]))

/** Semantic tokens that let a scale work with `colorPalette="..."`. */
const paletteSemantics = (
  name: string,
  opts: { solid: string; contrast: string; fg: string },
) => ({
  [name]: {
    solid: { value: `{colors.${name}.${opts.solid}}` },
    contrast: { value: opts.contrast },
    fg: { value: `{colors.${name}.${opts.fg}}` },
    muted: { value: `{colors.${name}.100}` },
    subtle: { value: `{colors.${name}.50}` },
    emphasized: { value: `{colors.${name}.200}` },
    focusRing: { value: `{colors.${name}.500}` },
  },
})

/** InstaGPT Brand Palette */
export const brand = {
  grape: "#860ff3", // primary purple
  magenta: "#f502bb", // nav links, sign-up card
  sun: "#f5bd00", // feature accent
  rose: "#f60a5d", // gradient tail, active states
  sky: "#4cb5f9", // login button, footer
}

export const gradients = {
  /** The four-stop logo gradient. */
  logo: `linear-gradient(90deg, ${brand.grape}, ${brand.magenta}, ${brand.sun}, ${brand.rose})`,
  /** Button-safe gradient (white text passes contrast at both ends). */
  cta: "linear-gradient(100deg, #860ff3 0%, #cc029c 100%)",
  ctaHover: "linear-gradient(100deg, #6f0bcb 0%, #a3027d 100%)",
  /** Hero overlay painted over the banner photograph. */
  heroOverlay: "linear-gradient(115deg, rgba(45,5,83,0.92) 0%, rgba(134,15,243,0.78) 38%, rgba(245,2,187,0.45) 72%, rgba(246,10,93,0.15) 100%)",
  band: "linear-gradient(120deg, #860ff3 0%, #f502bb 60%, #f60a5d 100%)",
}

const config = defineConfig({
  globalCss: {
    html: {
      scrollPaddingTop: "88px",
    },
    body: {
      bg: "white",
      color: "gray.900",
    },
    "::selection": {
      bg: "magenta.200",
      color: "grape.950",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Plus Jakarta Sans Variable', system-ui, sans-serif" },
        body: { value: "'Plus Jakarta Sans Variable', system-ui, sans-serif" },
      },
      colors: {
        grape: scale({
          50: "#f6edff",
          100: "#ead6fe",
          200: "#d5adfc",
          300: "#bd80f9",
          400: "#a34ff6",
          500: "#860ff3",
          600: "#6f0bcb",
          700: "#5809a2",
          800: "#42077a",
          900: "#2d0553",
          950: "#1c0334",
        }),
        magenta: scale({
          50: "#fff0fa",
          100: "#fed9f3",
          200: "#fcb0e8",
          300: "#fa7fda",
          400: "#f84acb",
          500: "#f502bb",
          600: "#cc029c",
          700: "#a3027d",
          800: "#7a015d",
          900: "#52013f",
          950: "#330127",
        }),
        sky: scale({
          50: "#eef8ff",
          100: "#d9effe",
          200: "#b5e0fd",
          300: "#8ccffb",
          400: "#4cb5f9",
          500: "#2a9ff0",
          600: "#1680cc",
          700: "#1366a3",
          800: "#12507f",
          900: "#0f3d61",
          950: "#0a2741",
        }),
        sun: scale({
          50: "#fffaeb",
          100: "#fff1c2",
          200: "#ffe285",
          300: "#ffd147",
          400: "#ffc71f",
          500: "#f5bd00",
          600: "#cc9b00",
          700: "#a37a00",
          800: "#7a5b00",
          900: "#523d00",
          950: "#332600",
        }),
        rose: scale({
          50: "#fff0f5",
          100: "#fed7e5",
          200: "#fdafcb",
          300: "#fb7ea8",
          400: "#f94a83",
          500: "#f60a5d",
          600: "#cc074c",
          700: "#a3063d",
          800: "#7a042e",
          900: "#52031f",
          950: "#330213",
        }),
      },
    },
    semanticTokens: {
      colors: {
        ...paletteSemantics("grape", { solid: "500", contrast: "white", fg: "700" }),
        ...paletteSemantics("magenta", { solid: "600", contrast: "white", fg: "700" }),
        ...paletteSemantics("sky", { solid: "400", contrast: "{colors.grape.950}", fg: "700" }),
        ...paletteSemantics("sun", { solid: "500", contrast: "{colors.grape.950}", fg: "800" }),
        ...paletteSemantics("rose", { solid: "500", contrast: "white", fg: "700" }),
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
