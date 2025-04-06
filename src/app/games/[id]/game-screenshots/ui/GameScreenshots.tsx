import {IGameScreenshot, IGameScreenShotResponse} from "@/api/types";
import {Box, Skeleton} from "@mui/material";
import {Suspense} from "react";
import { lazy } from 'react';
import {GameScreenshotViewer} from "./GameScreenshotViewer";
import {getData} from "@/api/getData";

const GamePreviewScreenshot = lazy(() => import('./GamePreviewScreenshot'));

interface IGameScreenshotsProps {
  gameId: number;
}

export default async function GameScreenshots({gameId}: IGameScreenshotsProps) {
  const screenshots: IGameScreenShotResponse = await getData<IGameScreenShotResponse>({
    url: `/games/${gameId}/screenshots`
  })
  
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          width: '100%',
          minWidth: 0,
          maxWidth: '100%',
          overflow: 'auto',
          whiteSpace: 'nowrap',
          paddingBottom: 2,
        }}
      >
        {
          screenshots && screenshots?.results.length > 0 && screenshots.results.map((screenshot: IGameScreenshot) => (
            <Suspense fallback={<Skeleton variant="rectangular" width={340} height={200} />} key={screenshot.id}>
              <GamePreviewScreenshot
                image={screenshot.image}
                screenShotId={screenshot.id}
              />
            </Suspense>
          ))
        }
      </Box>
      
      <GameScreenshotViewer screenshots={screenshots.results}/>
    </>
  )}