import {Button, Stack, Typography} from "@mui/material";
import {logout} from "@/app/login/login-container/lib/actions";
import {getUser} from "@/api/getUser";

export default async function ProfileInfo() {
  const user = await getUser()
  
  return (
    <Stack direction='column' spacing={3}>
      <Typography variant='h3' component='h3'>
        Profile
      </Typography>
      
      <Stack direction='column' spacing={1}>
        <Typography variant='h6' component='h6'>
          <Typography component='span' variant='h6' color={'textSecondary'}>
            {`Name: `}
          </Typography>
          {user?.user_metadata?.user_name}
        </Typography>
        
        <Typography variant='h6' component='h6'>
          <Typography component='span' variant='h6' color={'textSecondary'}>
            {`Email: `}
          </Typography>
          {user?.user_metadata?.email}
        </Typography>
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