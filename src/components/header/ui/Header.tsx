import {Box, Typography} from '@mui/material'

export default function Header(){
  return (
    <header>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Typography variant='h4'>
          Game Searcher
        </Typography>
        
        {/*<Button variant='contained' color='primary'>*/}
        {/*  Enter*/}
        {/*</Button>*/}
      </Box>
    </header>
  )
}