import {Box, Typography} from "@mui/material";
import Link from "next/link";

interface IGameDeveloperCardProps {
  name: string;
  gamesCount: number;
  developerId: number;
}

export default function DeveloperCard({name, gamesCount, developerId}: IGameDeveloperCardProps) {
  return (
    <Link href={`/developers/${developerId}`} passHref>
      <Box
        padding={2}
        borderRadius={2}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          opacity: 0.7,
          minHeight: 'fit-content',
          height: '100%',
          '&:hover': {
            opacity: 1,
          }
        }}>
        <Typography variant="h5" component="h5" fontWeight={'bold'}>
          {name}
        </Typography>
        
        <Typography variant="subtitle1" component="h6" color="textSecondary">
          Games: {gamesCount}
        </Typography>
      </Box>
    </Link>
  )
}