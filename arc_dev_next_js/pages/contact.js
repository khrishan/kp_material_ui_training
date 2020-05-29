import React, {useState} from 'react'
import ReactGA from 'react-ga'
import axios from 'axios'
import Link from '../src/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Head from 'next/head'

import ButtonArrow from '../src/ui/ButtonArrow'

const useStyles = makeStyles(theme => ({
    rowContainer:{
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    },
    background:{
        backgroundImage: `url('/assets/background.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url('/assets/mobileBackground.jpg')`,
        }
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]:{
            marginBottom: '2em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5em',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('md')]:{
            marginRight: 0,
            marginLeft: 0,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1em',
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]:{
            height: 40,
            width: 225
        },
    }
}))

const Contact = (props) => {
    
    const classes = useStyles()
    const theme = useTheme()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneHelper, setPhoneHelper] = useState('')
    const [message, setMessage] = useState('')

    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = useState({
        open: false,
        message: '',
        backgroundColor: ''
    })

    const onConfirm = () => {
        setLoading(true)

        ReactGA.event({category: 'Message', action: 'Message Sent'})

        axios.get('https://us-central1-material-ui-course-6e851.cloudfunctions.net/sendMail', {
            params: {
                name,
                email,
                phone,
                message
            }
        })
        .then(res => {
            setLoading(false)
            setOpen(false)
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
            setAlert({
                open: true,
                message: 'Message sent successfully!',
                backgroundColor: '#4BB543'
            })
        })
        .catch(err => {
            setLoading(false)
            setAlert({
                open: true,
                message: 'Something went wrong, please try again!',
                backgroundColor: '#ff3232'
            })
        })
    }

    const buttonContents = (
        <React.Fragment>
            Send Message
            <img src='/assets/send.svg' alt='paper airplane' style={{marginLeft : '1em' }} />
        </React.Fragment>
    )

    const onChange = (event) => {
        let valid

        switch(event.target.id) {
            case 'email':
                // use validator 
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if(!valid){
                    setEmailHelper('Invaid Email')
                } else {
                    setEmailHelper('')
                }
                break
            case 'phone':
                setPhone(event.target.value)

                valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                if(!valid){
                    setPhoneHelper('Invaid Phone Number')
                } else {
                    setPhoneHelper('')
                }
                break
            default:
                break
        }
    }

    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid container direction='row'>
            <Head>
                <title key='title'>Contact Us | Arc Development</title>
                <meta name='description' key='description' content='Let us guide you through the custom software design and development process. Send us a message with any of your ideas or quesitions to get started!' />
                <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest | Contact Us' />
                <meta property='og:url' key='og:url' content='https://arc.com/contact' />
                <link rel='canonical' key='canonical'  href='https://arc.com/contact' />
            </Head> 
            <Grid item container direction='column' justify='center' alignItems='center' lg={4} xl={3} style={{marginBottom: matchesMD ? '5em' : 0, marginTop : matchesSM ? '1em' : matchesMD ? '5em' : 0}}>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='h1' align={matchesMD ? 'center' : undefined} style={{lineHeight : 1}}>Contact Us</Typography>
                            <Typography variant='body1' align={matchesMD ? 'center' : undefined} style={{color : theme.palette.common.blue}}>We're waiting.</Typography>
                        </Grid>
                        <Grid item container style={{marginTop: '2em'}}>
                            <Grid item>
                                <img src='/assets/phone.svg' alt='phone' style={{marginRight: '0.5em' }}/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1em'}}><a href='tel:5555555555' style={{textDecoration: 'none', color: 'inherit'}}>(555) 555-5555</a></Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: '2em'}}>
                            <Grid item>
                                <img src='/assets/email.svg' alt='envelope' style={{marginRight: '0.5em', verticalAlign: 'bottom'}}/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1em'}}><a href='mailto:zachary@gmail.com' style={{textDecoration: 'none', color: 'inherit'}}>zachary@gmail.com</a></Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column' style={{width: '20em'}}>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Name' required id='name' value={name} fullWidth onChange={(event) => setName(event.target.value)}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Email' error={emailHelper.length !== 0} helperText={emailHelper} id='email' value={email} fullWidth onChange={onChange}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Phone' error={phoneHelper.length !== 0} helperText={phoneHelper} id='phone' value={phone} fullWidth onChange={onChange}></TextField>
                            </Grid>
                        </Grid>
                        <Grid item style={{width: '20em'}}>
                            <TextField value={message} className={classes.message} fullWidth id='message' multiline rows={10} onChange={(event) => setMessage(event.target.value)} InputProps={{disableUnderline: true}}></TextField>
                        </Grid>
                        <Grid item container justify='center' style={{marginTop: '2em'}}>
                            <Button 
                                //disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0 } variant='contained'
                                className={classes.sendButton} onClick={() => setOpen(true)}>
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)} fullScreen={matchesSM} style={{zIndex: 1302}}
                PaperProps={{
                    style: {
                        paddingTop: matchesXS ? '1em' : '5em',
                        paddingBottom: matchesXS ? '1em' : '5em',
                        paddingLeft: matchesXS ? '0' : matchesSM ? '5em' : matchesMD ? '15em' : '25em',
                        paddingRight: matchesXS ? '0' : matchesSM ? '5em' : matchesMD ? '15em' : '25em',
                    }
                }}>
                <DialogContent>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography align='center' variant='h4' gutterBottom>Confirm Message?</Typography>
                        </Grid>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Name' required id='name' value={name} fullWidth onChange={(event) => setName(event.target.value)}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Email' error={emailHelper.length !== 0} helperText={emailHelper} id='email' value={email} fullWidth onChange={onChange}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom : '0.5em'}}>
                                <TextField label='Phone' error={phoneHelper.length !== 0} helperText={phoneHelper} id='phone' value={phone} fullWidth onChange={onChange}></TextField>
                            </Grid>
                            <Grid item style={{width: matchesSM ? '100%' : '20em'}}>
                                <TextField value={message} className={classes.message} fullWidth id='message' placeholder='Tell us more about your project' multiline rows={10} onChange={(event) => setMessage(event.target.value)} InputProps={{disableUnderline: true}}></TextField>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginTop : '2em'}} alignItems='center' direction={matchesSM ? 'column' : 'row'}>
                            <Grid item>
                                <Button style={{fontWeight : 300}}color='primary' onClick={() => setOpen(false)}>Cancel</Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    //disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0 } variant='contained'
                                    className={classes.sendButton} onClick={onConfirm}>
                                    {loading ? <CircularProgress size={30} /> : buttonContents}
                                </Button>
                            </Grid>

                        </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{style: {backgroundColor: alert.backgroundColor}}}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                onClose={() => setAlert({...alert, open: false})}
                autoHideDuration={4 * 1000}
            />
            <Grid item container className={classes.background} lg={8} xl={9} alignItems='center' direction={matchesMD ? 'column' : 'row'} justify={matchesMD ? 'center' : undefined} >
                <Grid item style={{marginLeft: matchesMD ? 0 : '3em', textAlign: matchesMD ? 'center': 'inherit'}}>
                    <Grid container >
                        <Grid item>
                            <Typography variant='h1' align={matchesMD ? 'center' : undefined}>Simple software.<br/>Revolutionary Results.</Typography>
                            <Typography variant='subtitle2'  align={matchesMD ? 'center' : undefined} style={{fontSize: '1.5em'}}>Take advantage of the 21st Century.</Typography>
                            <Grid container justify={matchesMD ? 'center' : undefined} item>
                                <Button variant='outlined' component={Link} href='/revolution' className={classes.learnButton} onClick={() => props.setValue(2)}><span className={classes.learnMoreHeroText}>Learn More</span><ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button component={Link} href='/estimate' variant='contained' className={classes.estimateButton} onClick={() => {props.setValue(5); ReactGA.event({category: 'Estimate', action: 'Contact Page Pressed'})}}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact