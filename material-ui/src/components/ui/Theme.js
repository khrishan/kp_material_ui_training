import { createMuiTheme } from '@material-ui/core/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

const theme = createMuiTheme({
    palette: {
        common: {
            blue : arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: arcBlue,
            lineHeight: 1.5
        }, 
        h3: {
            fontFamily: 'Pacifico',
            fontSize: '2.5em',
            color: arcBlue
        },
        h4:{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1.75rem',
            color: arcBlue,
        },
        h6: {
            fontWeight: 500,
            fontFamily: 'Raleway',
            color: arcBlue,
            lineHeight: 1
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: '1.25rem',
            color: arcGrey,
        },
        subtitle2: {
            fontWeight: 300,
            fontSize: '1.25rem',
            color: 'white',
        },
        learnButton:{
            borderColor: arcBlue,
            borderWidth: 2,
            color: arcBlue,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
        tab: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        },
        body1: {
            fontSize: '1.25rem',
            color: arcGrey,
            fontWeight: 300
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 300,
            color: arcGrey
        }
    },
    overrides: {
        MuiInputLabel:{
            root: {
                color: arcBlue,
                fontSize : '1em'
            }
        },
        MuiInput:{
            root:{
                color: arcGrey,
                fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
})

export default theme