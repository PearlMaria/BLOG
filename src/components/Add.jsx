import {Button,TextField} from '@mui/material'
import React from 'react'
const Add=()=>{
    return(
        <div style={{paddingTop:"100px"}}>
            <TextField variant='filled' label='Blog Name'/>
            <br/>
            <br/>
            <TextField variant='filled' label='Description'/>
            <br />
            <br />
            <TextField variant='filled' label='Author Name'/>
            <br />
            <br />
            <Button variant ='outlined' color='primary'>ADD</Button>

        </div>
    )
}
export default Add