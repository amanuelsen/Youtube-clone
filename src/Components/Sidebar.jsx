import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../Utils/Constace'

export default function Sidebar({selectedcategory, setselectedcategory}) {
  return (
    <Stack  direction={"row"} sx={{overflowY:"auto", height:{sx:"auto", md:"95%"}, flexDirection:{md:"column"}}}>
        {categories.map((cat)=> (
            <button onClick={()=>{setselectedcategory(cat.name)}}  key={cat} style={{background:cat.name === selectedcategory && "red", color:"black"}} className='category-btn'>
                <span style={{color:cat.name=== selectedcategory ? "white ":"red", marginRight:"15px"}}>{cat.icon}</span>
                <span style={{opacity:cat.name=== selectedcategory ? "1 ":"0.8"}}>{cat.name}</span>
                
            </button>

        ))}
      
    </Stack> 
  )
}
