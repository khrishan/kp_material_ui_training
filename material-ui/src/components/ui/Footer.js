import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg' 

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
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(0)} to='/'>Home</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} to='/services'> Services </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} to='/customsoftware'> Custom Software </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} to='/mobileapps'> Mobile Development </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} to='/websites'> Website Development </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to='/revolution'> The Revolution </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to='/revolution'> Vision </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to='/revolution'> Technology </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to='/revolution'> Process </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to='/about'> About Us </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to='/about'> History </Grid>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to='/about'> Team </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} onClick={() => props.setValue(4)} to='/contact'> Contact Us </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt='Black decoration slash' src={footerAdornment} className={classes.adornment}/>

            <Grid container justify='flex-end' className={classes.socialContainer} spacing={2}>
                <Grid item component={'a'} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Facebook logo' src={facebook} className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Twitter logo' src={twitter}  className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'>
                    <img alt='Instagram logo' src={instagram}  className={classes.icon} />
                </Grid>
            </Grid>

        </footer>
    )

}

export default Footer