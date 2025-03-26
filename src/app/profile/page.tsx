import BgOverlay from "@/components/bg-overlay";
import ProfileInfo from "@/app/profile/profile-info";

export default function ProfilePage() {
  return (
    <main style={{width: '100%'}}>
      <BgOverlay imageName={'/images/games_bg.jpg'}/>
      <ProfileInfo/>
    </main>
  );
}