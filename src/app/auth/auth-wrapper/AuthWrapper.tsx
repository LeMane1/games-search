'use client'

import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import ProviderButtons from "@/app/auth/ui/ProviderButtons";
import Link from "next/link";

interface IAuthWrapperProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  actionExtraText?: string;
  actionText?: string;
  link: string;
}

export default function AuthWrapper(
  {
    children,
    title,
    subtitle,
    actionExtraText,
    actionText,
    link
  }: IAuthWrapperProps) {
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
          
          <Link href={link}>
            <Typography component="h6" variant="subtitle1" color={'primary.main'} fontWeight={'bold'}>
              {actionText}
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  )
}