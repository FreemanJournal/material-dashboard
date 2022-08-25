import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles'{
    interface Palette{
        custom?:PaletteColor
    }
    interface PaletteOptions{
        custom?:PaletteColorOptions
    }
    interface SimplePaletteColorOptions{
        light_dark?:string,
        bg_shadow?:string
    }
    interface PaletteColor{
        light_dark?:string,
        bg_shadow?:string

    }
}