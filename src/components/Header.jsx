import React from 'react'
import { AppBar, Toolbar,IconButton, Container, Link } from '@mui/material'


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
            <Link href="" color='inherit'>
                Inicio
            </Link>
            <Link href="" color='inherit'>
                Formulario
            </Link>
            <Link href="" color='inherit'>
                Lista
            </Link>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header