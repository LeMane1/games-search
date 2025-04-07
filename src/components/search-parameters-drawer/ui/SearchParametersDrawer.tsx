'use client'

import {Box, Stack, SwipeableDrawer} from "@mui/material";
import Puller from "@/components/search-parameters-drawer/ui/Puller";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";
import {changeSearchParametersModalState} from "@/lib/slices/mainSlice";

interface ISearchParametersDrawerProps {
  children?: React.ReactNode;
}

export default function SearchParametersDrawer({children}: ISearchParametersDrawerProps) {
  const isSearchParametersModalOpened = useAppSelector((state: RootState) => state.mainReducer.isSearchParametersModalOpened);
  const dispatch = useAppDispatch();
  
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isSearchParametersModalOpened}
      onClose={() => dispatch(changeSearchParametersModalState(false))}
      onOpen={() => {}}
      swipeAreaWidth={56}
      disableSwipeToOpen={true}
      disableScrollLock={false}
      keepMounted
      slotProps={
        {
          'paper': {
            sx:{
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              height: '80%',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }
          }
        }
      }
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box sx={{
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: 40
        }}>
          <Puller/>
        </Stack>
        
        {children}
      </Box>
    </SwipeableDrawer>
  )
}