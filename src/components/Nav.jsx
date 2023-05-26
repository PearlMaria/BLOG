import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography color={'red'}
    sx ={{ flexGrow: 1 }} 
    >BLOG APP</Typography>
                    <Button variant='outlined'>
                        <Link to={'/Home'}>Home</Link>
                    </Button>
                    <Button variant='outlined'>
                        <Link to={'/Add'}>Add Blog</Link>
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav


