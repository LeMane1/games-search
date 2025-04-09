import BgOverlay from "@/components/bg-overlay";
import DevelopersList from "@/app/developers/developers-list";
import {Suspense} from "react";

export default async function DevelopersPage(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/developers_bg.webp'}/>
      <Suspense>
        <DevelopersList page={currentPage}/>
      </Suspense>
    </main>
  );
}