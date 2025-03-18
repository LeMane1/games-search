import {Stack, Box} from '@mui/material';
import Header from "src/components/header";
import {GamesList} from "@/components/games-list";
import {SearchInput} from "@/components/search";

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

                <SearchInput/>
                <Box sx={{ height: 24 }} />
              
                <GamesList/>
            </Stack>
        </Box>
    </main>
  );
}
