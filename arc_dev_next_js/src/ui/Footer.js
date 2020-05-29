import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../Link'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment:{
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    mainContainer:{
        position: 'absolute'
    },
    link:{
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]:{
            height: '2em',
            width: '2em',
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]:{
            right: '0.8em',
        }
    }
}))

function Footer(props){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify='center' className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column'>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(0)} href='/'>Home</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2} style={{margin: 0}}>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} href='/services'> Services </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} href='/cushrefmsoftware'> Custom Software </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} href='/mobileapps'> Mobile Development </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} href='/websites'> Website Development </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2} style={{margin: 0}}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} href='/revolution'> The Revolution </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} href='/revolution'> Vision </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} href='/revolution'> Technology </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} href='/revolution'> Process </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2} style={{margin: 0}}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} href='/about'> About Us </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} href='/about'> History </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} href='/about'> Team </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2} style={{margin: 0}}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(4)} href='/contact'> Contact Us </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt='Black decoration slash' src='/assets/footerAdornment.svg' className={classes.adornment}/>

            <Grid container justify='flex-end' className={classes.socialContainer} spacing={2}>
                <Grid item component={'a'} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Facebook logo' src='/assets/facebook.svg' className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Twitter logo' src='/assets/twitter.svg'  className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Instagram logo' src='/assets/instagram.svg'  className={classes.icon} />
                </Grid>
            </Grid>

        </footer>
    )

}

export default Footer