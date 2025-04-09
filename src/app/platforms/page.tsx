import BgOverlay from "@/components/bg-overlay";
import PlatformsList from "@/app/platforms/platforms-list";
import {Suspense} from "react";

export default async function PlatformsPage(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}){
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/platforms_bg.webp'}/>
      <Suspense>
        <PlatformsList page={currentPage}/>
      </Suspense>
    </main>
  )
}