import { PaletteColorOptions } from "@mui/material/styles"

declare module '@mui/material/styles' {
    interface Palette {
        custom?: PaletteColor
    }
    interface PaletteOptions {
        custom?: PaletteColorOptions
    }
    interface SimplePaletteColorOptions {
        light_dark?: string,
        bg?: string
    }
    interface PaletteColor {
        light_dark?: string,
        bg?: string

    }
}


