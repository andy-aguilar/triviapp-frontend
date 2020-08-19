import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const gridStyle = {
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    padding: '80px 0px'
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 80px',
    width: '300px'
}

function Dashboard(props) {
    const classes = useStyles()

    const handelLogOut = () => {
        // console.log('enters log out')
        localStorage.clear()
        props.history.push("/login")
    }

    const handleNewGame = () => {
        props.history.push("/game")
    }

    const handleJoinGame = () => {
        props.history.push("/creategame")
    }

    
    return(
        <Container maxWidth="lg">
            <Grid container direction='row' justify='space-evenly' alignItems='center' style={gridStyle} >
                <Grid item xs={6} container direction='column' justify='space-between' alignItems='center' spacing={10} >
                    <Grid item xs={12}>
                        <Paper elevation={4} style={{ textAlign: 'center', padding: '30px', width: '350px' }}>
                            <Avatar src="/broken-image.jpg" style={{margin: 'auto'}} className={classes.large}/>
                            <h3>Welcome, {localStorage.name}!</h3>
                            <h3>{localStorage.username}</h3>
                            <p>Member since: {localStorage.created_at.split(' 2020')[0]}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
                                <Button variant='outlined' color='primary'>Edit</Button>
                                <Button onClick={handelLogOut} variant='outlined' color='primary'>Log out</Button>
                            </div>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={4} >
                        <Paper elevation={4} style={buttonStyle}>
                            <Button onClick={handleNewGame} variant='contained' color='primary'>Solo Game</Button>
                            <Button onClick={handleJoinGame} variant='contained' color='primary'>Multi-Player Game</Button>
                            {/* <Button variant='contained' color='primary'>More Options</Button> */}
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={2} style={{ marginBotton: '300px' }}>
                    <Paper elevation={4} style={{ height: '500px', textAlign: 'center', padding: '5px'}}>
                        <h2>History</h2>
                        <p>Game 1</p>
                        <p>Game 2</p>
                        <p>Game 3</p>
                        <p>Game 4</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Dashboard