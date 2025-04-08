import GamesList from "src/app/games/games-list";
import BgOverlay from "@/components/bg-overlay";
import {Suspense} from "react";
import {GamesListSkeleton} from "@/components/skeletons";

export default async function GamesPage(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    ordering?: string;
    parent_platforms?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || '';
  const ordering = searchParams?.ordering || '';
  const currentPage = Number(searchParams?.page) || 1;
  const parentPlatforms = searchParams?.parent_platforms || ''
  
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      <Suspense fallback={<GamesListSkeleton/>}>
        <GamesList
          search={search}
          ordering={ordering}
          page={currentPage}
          parentPlatforms={parentPlatforms}
        />
      </Suspense>
    </main>
  );
}