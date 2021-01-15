import colors from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors'

const blue60 = `#0e8de6`
const blue30 = `#63b8f6`

export default {
    ...colors,
    primary: blue60,
    modes: {
         dark: {
          ...colors.modes.dark,
          primary: blue30,
          highlight: blue60,
        },
      },
  }
