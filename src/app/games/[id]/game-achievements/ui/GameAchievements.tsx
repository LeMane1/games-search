import {getData} from "@/api/getData";
import GameAchievement from "@/app/games/[id]/game-achievements/ui/GameAchievement";
import {Box} from "@mui/material";
import {IGameAchievement, IGameAchievementsResponse} from "@/api/types";

interface IGameAchievementsProps {
  gameId: number;
}

export default async function GameAchievements({gameId}: IGameAchievementsProps){
  const achievementsResponse = await getData<IGameAchievementsResponse>({
    url: `games/${gameId}/achievements`
  })
  const achievements: IGameAchievement[] = achievementsResponse.results
  
  return(
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        minWidth: 0,
        maxWidth: '100%',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        paddingBottom: 2,
      }}
    >
      {achievements.map((achievement: IGameAchievement) => (
        <GameAchievement
          key={achievement.id}
          name={achievement.name}
          description={achievement.description}
          image={achievement.image}
          percent={achievement.percent}
        />
      ))}
    </Box>
  )
}