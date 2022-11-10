import { createTheme} from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
    
    palette: {
        mode: 'dark',
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText:'#ffffff' , //tipo um hover para facilitar a leitura
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff'
        },
        background: {
            default: '#202124', //cor de fundo
            paper:  '#303134'   // cor no card
        }
    },
    typography: {
        allVariants: {
            color: 'white'
        }
    }
})