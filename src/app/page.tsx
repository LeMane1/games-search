import {Box} from '@mui/material';
import Link from "next/link";

export default function Home() {
  return (
    <main style={{width: '100%'}}>
        <Box sx={{
            width: '100%',
            backgroundColor: '#252525',
            padding: 2
        }}>
          <Link href="/games">Go to games search</Link>
        </Box>
    </main>
  );
}
