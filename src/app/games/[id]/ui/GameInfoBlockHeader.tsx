import {Typography} from "@mui/material";

interface IGameInfoBlockHeaderProps {
  headerText: string;
}

export default function GameInfoBlockHeader({headerText}: IGameInfoBlockHeaderProps) {
  return (
    <Typography variant="h5" component="h5" mb={1}>
      {headerText}
    </Typography>
  )
}