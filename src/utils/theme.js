import { extendTheme } from "@chakra-ui/react"

// Color palette for project
const theme = extendTheme ({
    colors: {
        main: {
            background: '#F1F1F1',
            orange: '#F76902',
            hoverOrange: '#C75300',
            white: '#FFFFFF',
            black: '#000000',
            font: '#212519',
            gray: {
                200: '#DEDEDE',
                300: '#A2AAAD',
                400: '#727578',
            },
        }
    }
});

export default theme;