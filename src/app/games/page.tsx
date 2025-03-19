import {Box} from "@mui/material";
import {SearchInput} from "@/components/search";
import {GamesList} from "@/components/games-list";

export default function GamesPage() {
  return (
    <main style={{width: '100%'}}>
        <SearchInput/>
        <Box sx={{ height: 16 }} />
        <GamesList/>
    </main>
  );
}