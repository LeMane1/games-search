import {Box, Stack, Typography} from "@mui/material";

interface IGameAchievementProps {
  name: string;
  description: string;
  image: string;
  percent: string
}

export default function GameAchievement({name, image, description, percent}: IGameAchievementProps) {
  return (
    <Box
      component="div"
      borderRadius={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "row",
        minWidth: 340,
        minHeight: 'fit-content',
        width: 340,
        height: '100%',
        gap: 2,
        padding: 2
    }}>
      <Box component='img' src={image} height={100} width={100} borderRadius={'50%'}/>
      <Stack direction="column" spacing={0.5}>
        <Typography
          variant="h6"
          component="h6"
          lineHeight={1.1}
          sx={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal"
          }}
        >
          {name}
        </Typography>
        
        <Typography
          variant="caption"
          component="span"
          sx={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal"
          }}
        >
          {percent} %
        </Typography>
        
        <Typography
          variant="body1"
          component="span"
          color="textSecondary"
          sx={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            whiteSpace: "normal"
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  )
}