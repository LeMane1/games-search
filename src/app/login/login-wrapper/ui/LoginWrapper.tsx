'use client'

import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {changeLoginState} from "@/lib/slices/mainSlice";
import ProviderButtons from "@/app/login/login-wrapper/ui/ProviderButtons";

interface ILoginWrapperProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  actionExtraText?: string;
  actionText?: string;
}

export default function LoginWrapper(
  {
    children,
    title,
    subtitle,
    actionExtraText,
    actionText,
  }: ILoginWrapperProps) {
  
  const dispatch = useAppDispatch();
  
  return (
    <Stack
      direction="column"
    >
      <Typography
        component="h1"
        variant="h4"
        fontWeight={'bold'}
        textAlign="center"
      >
        {title}
      </Typography>
      
      <Typography
        component="h6"
        variant="subtitle1"
        color={'textSecondary'}
        textAlign="center"
        mb={2}
      >
        {subtitle}
      </Typography>
      
      <ProviderButtons/>
      
      {children}
      
      <Box justifyContent="center" width='100%' display='flex'>
        <Stack direction="row" spacing={0.5}>
          <Typography component="h6" variant="subtitle1" color={'textSecondary'}>
            {actionExtraText}
          </Typography>
          
          <Box
            onClick={() => dispatch(changeLoginState())}
            sx={{
              '&:hover':{
                cursor: 'pointer'
              }
          }}>
            <Typography component="h6" variant="subtitle1" color={'primary.main'} fontWeight={'bold'}>
              {actionText}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}