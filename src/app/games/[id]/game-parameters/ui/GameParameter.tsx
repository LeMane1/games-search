import {Stack, Typography} from "@mui/material";

interface IGameParameterProps {
  parameterType: string;
  parameterValue: string;
}

export default function GameParameter(
  { parameterType,
    parameterValue,
  }: IGameParameterProps){
  return (
    <Stack direction="row" sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <Typography variant="subtitle1" component="h5" color={'textSecondary'}>
        {parameterType}
      </Typography>
      
      <Typography variant="subtitle1" component="h5">
        {parameterValue}
      </Typography>
    </Stack>
  )
}