'use client'

import {Box} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {changeCurrentScreenshotId, changeModalState} from "@/lib/features/mainSlice";

interface IGamePreviewScreenshotProps {
  image: string;
  screenShotId: number;
}

export default function GamePreviewScreenshot ({image,  screenShotId}: IGamePreviewScreenshotProps){
  const dispatch = useAppDispatch();
  
  const handleOnClick = () => {
    dispatch(changeCurrentScreenshotId(screenShotId));
    dispatch(changeModalState())
  }
  
  return (
    <>
      <Box
        component="img"
        src={image}
        width={340}
        height={200}
        borderRadius={2}
        onClick={() => handleOnClick()}
        sx={{
          objectFit: 'cover',
          ":hover":{
            cursor: 'pointer',
          }
        }}
      />
    </>
  )
}