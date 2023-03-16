import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search} from '@mui/icons-material'
function Searchbar() {
  return (
    <Paper
    component="form"
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        p1: 6,
        boxShadow: 'none',
        mr: { sm: 10},
    }}
    elevation={7}
    >
        <input className='search-bar'
        placeholder='Search...'
        value=""
        onChange={() => {}}
        />
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default Searchbar