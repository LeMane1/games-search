import {Box, Stack, Typography} from "@mui/material";
import {removeTagsFromString} from "@/app/games/[id]/game-comments/lib/removeTagsFromString";
import {cleanUserName} from "@/app/games/[id]/game-comments/lib/cleanUserName";
import {getDateString} from "@/app/games/[id]/game-comments/lib/getDateString";

interface IGameCommentProps {
  header: string,
  text?: string,
  imageUrl?: string,
  userName?: string,
  createdAt?: string,
}

export default function GameComment({header, text, userName, createdAt, imageUrl}: IGameCommentProps) {
  return (
    <Box
      borderRadius={2}
      padding={2}
      sx={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Typography component='h6' variant='h6' gutterBottom>
        {header}
      </Typography>
      
      {
        text &&
        <Typography component='p' variant='body2' color='textSecondary' mb={2}>
          {removeTagsFromString(text)}
        </Typography>
      }
      
      {
        imageUrl &&
        <Box
          component={'img'}
          loading={'lazy'}
          borderRadius={2}
          src={imageUrl}
          alt={'Comment image'}
          width={{
            xs: '100%',
            sm: '100%',
            md: '50%',
            lg: '50%',
            xl: '50%'
          }}
          sx={{
            aspectRatio: 16/9,
          }}
          mb={2}
        />
      }
      
      <Stack
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
      >
        {
          userName &&
          <Typography component='span' variant='caption' fontWeight={'bold'}>
            {cleanUserName(userName)}
          </Typography>
        }
        
        {
          createdAt &&
          <Typography component='span' variant='caption' color='textSecondary'>
            {getDateString(createdAt)}
          </Typography>
        }
      </Stack>
    </Box>
  )
}