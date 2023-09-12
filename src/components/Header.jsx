import React from 'react'
import { AppBar, Toolbar,IconButton, Container, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

const menuStyles = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const Header = () => {
  return (
    <AppBar position="sticky" >
        <Container maxWidth="lg">
        <Toolbar sx={menuStyles}> 
            <IconButton edge="start">
                <img height='30px' src='logo512.png' alt='logo'/>
            </IconButton>
            <Link component={RouterLink} to="/" color='inherit'>
                Inicio
            </Link>
            <Link component={RouterLink} to="/form" color='inherit'>
                Formulario
            </Link>
            <Link component={RouterLink} to="/list" color='inherit'>
                Lista
            </Link>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header