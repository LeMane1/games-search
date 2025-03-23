import GameSystemRequirement from "@/app/games/[id]/game-system-requirements/ui/GameSystemRequirement";
import {IPlatform} from "@/api/types";
import {Typography} from "@mui/material";

interface IGameSystemRequirementProps {
  platforms?: IPlatform[];
}

export default function GameSystemRequirements({platforms}: IGameSystemRequirementProps) {
  return (
    <>
      {
        platforms && platforms.length > 0 ? platforms.map((platform: IPlatform) => (
          <GameSystemRequirement
            key={platform.platform.id}
            minimum={platform.requirements.minimum}
            recommended={platform.requirements.recommended}
            platformName={platform.platform.name}
          />
        ))
          :
        <Typography variant="body2" component="div">
          No system requirements found
        </Typography>
      }
    </>
  )
}