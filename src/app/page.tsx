import {Stack} from '@mui/material';
import BgOverlay from "@/components/bg-overlay";
import MainPageSelectButton from "@/components/main-page-select-button";

export default function Home() {
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      
      <Stack spacing={5}>
        <MainPageSelectButton
          buttonText='GAMES'
          image='/images/image_search_games.jpg'
          link='/games'
        />
        
        <MainPageSelectButton
          buttonText='DEVELOPERS'
          image='/images/image_search_developers.jpg'
          link='/developers'
        />
        
        <MainPageSelectButton
          buttonText='PLATFORMS'
          image='/images/image_search_platforms.jpg'
          link='/platforms'
        />
      </Stack>
    </main>
  );
}
