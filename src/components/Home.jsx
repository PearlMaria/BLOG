import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Home = () => {
    var [names,setnames]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setnames(response.data);
            console.log(response.data);
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div style={{paddingTop:"30px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red", fontSize:"20px"}}>Id</TableCell>
                        <TableCell style={{color:"red", fontSize:"20px"}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        names.map((value,index)=>{
                            return(
                                <TableRow>
                                    <TableCell>{value.id}</TableCell>
                                    <TableCell>{value.title}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home



