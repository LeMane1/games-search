'use client'

import {Avatar, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {User} from "@supabase/auth-js";

interface IUserLabelProps{
  user: User;
  isExpanded?: boolean;
}

export default function UserLabel({user, isExpanded = true}:IUserLabelProps){
  return (
    <Link href={'/profile'} passHref>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        padding={1}
        borderRadius={1}
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
          '&:hover > #user-label-username': {
            opacity: 1,
          }
        }}
      >
        <Avatar
          src={user?.user_metadata?.avatar_url}
          sx={{
            bgcolor: 'primary.main',
            width: 30,
            height: 30,
          }}
        />
        
        {isExpanded && <Typography
          id={'user-label-username'}
          variant="subtitle1"
          component="h6"
          fontWeight={'bold'}
          sx={{
            opacity: .9
          }}
        >
          {user?.user_metadata?.full_name || user?.user_metadata?.user_name}
        </Typography>}
      </Stack>
    </Link>
  )
}