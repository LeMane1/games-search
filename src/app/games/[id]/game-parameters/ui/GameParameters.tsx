import {Divider, Stack} from "@mui/material";
import GameParameter from "./GameParameter";

export interface IGameParameter{
  parameterType: string;
  parameterValue: string;
}

interface IGameParametersProps {
  parameters: IGameParameter[];
}

export default function GameParameters({parameters}: IGameParametersProps) {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={1}
      mb={3}
      sx={{ flexGrow: 1 }}
    >
      {parameters.map((parameter: IGameParameter) => (
        <GameParameter
          key={parameter.parameterType}
          parameterType={parameter.parameterType}
          parameterValue={parameter.parameterValue}
        />
      ))}
    </Stack>
  )
}