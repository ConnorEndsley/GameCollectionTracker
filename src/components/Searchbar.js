import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search} from '@mui/icons-material'

const Searchbar = () => {
  return (
    <Paper
    component="form"
    sx={{
        borderRadius: 0,
        border: '1px solid #e3e3e3',
        backgroundColor: '#444343',
        borderRadius: '25px',
        p1: 6,
        boxShadow: 'none',
        mr: { sm: 2},
    }}
    >
        <input className='search-bar'
        placeholder='Search...'
        value=""
        />
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default Searchbar