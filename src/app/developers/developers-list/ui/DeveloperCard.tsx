import {Box, Typography} from "@mui/material";
import Link from "next/link";

interface IGameDeveloperCardProps {
  name: string;
  gamesCount: number;
}

export default function DeveloperCard({name, gamesCount}: IGameDeveloperCardProps) {
  return (
    <Link href={`/developers/${123}`} passHref>
      <Box
        padding={2}
        borderRadius={2}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          display: "flex",
          gap: 0.5,
          flexDirection: "column",
          opacity: 0.8,
          minHeight: 'fit-content',
          height: '100%',
          '&:hover': {
            opacity: 1,
          }
        }}>
        <Typography variant="h5" component="h5">
          {name}
        </Typography>
        
        <Typography variant="subtitle1" component="h6" color="textSecondary">
          Games: {gamesCount}
        </Typography>
      </Box>
    </Link>
  )
}