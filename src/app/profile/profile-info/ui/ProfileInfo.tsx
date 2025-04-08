import {Avatar, Button, Stack, Typography} from "@mui/material";
import {logout} from "@/app/login/login-container/lib/actions";
import {getUser} from "@/api/getUser";

export default async function ProfileInfo() {
  const user = await getUser()
  
  return (
    <Stack direction='column' spacing={3}>
      <Typography variant='h3' component='h3'>
        Profile
      </Typography>
      
      <Stack direction='row' spacing={2}>
        <Avatar
          src={user?.user_metadata?.avatar_url}
          sx={{
            bgcolor: 'primary.main',
            width: {
              xs: 80,
              sm: 100,
              md: 150,
              lg: 150,
              xl: 150,
            },
            height: {
              xs: 80,
              sm: 100,
              md: 150,
              lg: 150,
              xl: 150,
            },
            color: "white",
          }}
        />
        
        <Stack direction='column'>
          <Typography variant='h4' component='h4'>
            {user?.user_metadata?.full_name || user?.user_metadata?.user_name}
          </Typography>
          
          <Typography variant='subtitle1' component='h6' color={'textSecondary'}>
            {user?.user_metadata?.email}
          </Typography>
        </Stack>
      </Stack>
      
      <Button
        color={'warning'}
        variant='contained'
        onClick={logout}
        sx={{
          width: 'fit-content',
        }}
      >Logout</Button>
    </Stack>
  )
}