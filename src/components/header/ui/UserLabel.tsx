import {getUser} from "@/api/getUser";
import {Avatar, Stack, SvgIcon, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";

export default async function UserLabel(){
  const user = await getUser()
  
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
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(8px)",
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }
        }}
      >
        <Avatar
          src={user?.user_metadata?.avatar_url}
          sx={{
            bgcolor: 'primary.main',
            width: 30,
            height: 30,
            color: "white",
          }}
        />
        
        <Typography variant="subtitle1" component="h6" fontWeight={'bold'}>
          {user?.user_metadata?.full_name || user?.user_metadata?.user_name}
        </Typography>
        
        <SvgIcon sx={{
          width: 20,
          height: 20,
        }}>
          <ArrowForwardIosIcon/>
        </SvgIcon>
      </Stack>
    </Link>
  )
}