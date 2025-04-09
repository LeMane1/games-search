import {getComments} from "@/app/games/[id]/game-comments/lib/getComments";
import GameComment from "@/app/games/[id]/game-comments/ui/GameComment";
import {Stack, Typography} from "@mui/material";
import {IGameComment} from "@/api/types";

interface IGameCommentsProps {
  gameId: number;
}

export default async function GameComments({gameId}: IGameCommentsProps) {
  const comments = await getComments(gameId);
  
  return (
    <Stack direction="column" spacing={1}>
      {
        comments && comments.length > 0 ?
          comments.map((comment: IGameComment) => (
            <GameComment
              key={comment.id}
              header={comment.name}
              text={comment.text}
              userName={comment.username}
              createdAt={comment.created}
              imageUrl={comment.image}
            />
          ))
          :
          <Typography variant='h6' component='h6' color={'textSecondary'}>
            No comments found
          </Typography>
      }
    </Stack>
  )
}