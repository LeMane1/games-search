import {Box} from "@mui/material";
import {SearchInput} from "@/components/search";
import GamesList from "src/app/games/games-list";
import BgOverlay from "@/components/bg-overlay";

export default async function GamesPage(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    ordering?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || '';
  const ordering = searchParams?.ordering || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      <SearchInput/>
      <Box sx={{ height: 16 }} />
      <GamesList search={search} ordering={ordering} page={currentPage}/>
    </main>
  );
}