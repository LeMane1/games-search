import BgOverlay from "@/components/bg-overlay";
import ProfileInfo from "@/app/profile/profile-info";
import GamesCollection from "@/app/profile/games-collection";
import {Stack} from "@mui/material";

export default function ProfilePage() {
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