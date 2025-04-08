'use client'

import {Box, Drawer, List, ListItem, ListItemButton} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import {navLinks} from "@/components/header/lib/constants";
import CloseButton from "@/components/header/ui/CloseButton";
import {useAppSelector} from "@/lib/hooks";

export default function NavDrawer(){
  const isDrawerOpened = useAppSelector(state => state.mainReducer.isDrawerOpened)
  return (
    <Drawer
      anchor={'right'}
      open={isDrawerOpened}
      disableScrollLock={true}
      slotProps={
        {
          'paper': {
            sx:{
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(20px)',
              height: '100%',
            }
          }
        }
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          paddingTop: 2,
          height: "100%",
          width: {
            xs: "90vw",
            sm: 400,
            md: 400,
          },
        }}
      >
        <CloseButton/>
        
        <List sx={{
          width: "100%",
        }}>
          {
            navLinks.map(link => (
              <ListItem key={link.linkUrl} disablePadding>
                <ListItemButton href={link.linkUrl}>
                  <ListItemText primary={link.linkName} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}