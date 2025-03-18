'use client'

import {TextField, Stack, Box} from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Header from "src/components/header";
import {GamesList} from "@/components/games-list";

export default function Home() {
  return (
    <main style={{width: '100%'}}>
        <Box sx={{
            width: '100%',
            backgroundColor: '#252525',
            padding: 2,
        }}>
            <Stack>
                <Header/>
                <Box sx={{ height: 16 }} />

                <TextField
                    id="search-input"
                    variant="outlined"
                    placeholder='Search...'
                    sx={{width: '100%'}}
                    slotProps={{
                    input: {
                        startAdornment: (
                            <SearchSharpIcon sx={{mr: '.5rem'}}/>
                        ),
                    },
                }}/>
              
                <GamesList/>
            </Stack>
        </Box>
    </main>
  );
}
