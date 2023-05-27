import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
 const [searchTerm, setsearchTerm]= useState("")
 const navigate=useNavigate()
 const handlesubmit= (e)=>{
  e.preventDefault()
  if(searchTerm){
    navigate(`/search/${searchTerm}`)
    
  }
 }
  return (
     
    <div>
      <Paper
        component="form"
        onSubmit={handlesubmit}
        sx={{
          
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',

          mr: { sm: 3 },
        }}
      >
        <input 
          className="search-bar"
          placeholder="search.."
          value={searchTerm}
          onChange={(e) => {setsearchTerm(e.target.value)}}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'green' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
