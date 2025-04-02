import BgOverlay from "@/components/bg-overlay";
import ProfileInfo from "@/app/profile/profile-info";
import GamesCollection from "@/app/profile/games-collection";
import {Stack} from "@mui/material";
import {checkAuth} from "@/api/getUser";
import {redirect} from "next/navigation";

export default async function ProfilePage() {
  const isAuthenticated = await checkAuth()
  if (!isAuthenticated){
    redirect('/')
  }
  
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      <Stack direction='column' spacing={5}>
        <ProfileInfo/>
        <GamesCollection/>
      </Stack>
    </main>
  );
}