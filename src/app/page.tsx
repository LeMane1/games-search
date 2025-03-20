import {Stack} from '@mui/material';
import BgOverlay from "@/components/bg-overlay";
import MainPageSelectButton from "@/components/main-page-select-button";

export default function Home() {
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      
      <Stack>
        <MainPageSelectButton/>
      </Stack>
    </main>
  );
}
