'use client'

import {useGetGameScreenShotsByIdQuery} from "@/api/api";
import {GamePreviewScreenshot} from "@/app/games/[id]/game-screenshots/ui/GamePreviewScreenshot";
import {IGameScreenshot} from "@/api/types";
import {Box} from "@mui/material";

interface IGameScreenshotsProps {
  gameId: number;
}

export const GameScreenshots = ({gameId}: IGameScreenshotsProps) => {
  const {data: screenshots} = useGetGameScreenShotsByIdQuery(gameId)
  return (
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          // flexWrap: 'wrap',
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
          overflow: 'auto', // Горизонтальный скролл
          // whiteSpace: 'nowrap', // Запрет переноса строк
          paddingBottom: 1, // Добавим небольшой отступ для скролла
          // '&::-webkit-scrollbar': {
          //   height: 8, // Высота скроллбара
          // },
          // '&::-webkit-scrollbar-thumb': {
          //   backgroundColor: '#888',
          //   borderRadius: 4,
          // },
          // '&::-webkit-scrollbar-track': {
          //   backgroundColor: '#f1f1f1',
          // },
        }}
      >
        {
          screenshots && screenshots?.results.length > 0 && screenshots.results.map((screenshot: IGameScreenshot) => (
            <GamePreviewScreenshot key={screenshot.id} image={screenshot.image} />
          ))
        }
      </Box>
  )}