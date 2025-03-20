import {Box} from "@mui/material";
import {SearchInput} from "@/components/search";
import {GamesList} from "@/components/games-list";
import BgOverlay from "@/components/bg-overlay";

export default function GamesPage() {
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      <SearchInput/>
      <Box sx={{ height: 16 }} />
      <GamesList/>
    </main>
  );
}