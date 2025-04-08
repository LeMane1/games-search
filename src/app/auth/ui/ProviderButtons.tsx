import {Divider, Stack, Typography} from "@mui/material";
import ProviderButton from "@/app/auth/ui/ProviderButton";

export default function ProviderButtons(){
  return (
    <Stack direction='column' spacing={2} mb={2}>
      <ProviderButton
        icon={'/icons/icon_google.svg'}
        providerName={'google'}
      >
        Continue with Google
      </ProviderButton>
      
      <ProviderButton
        icon={'/icons/icon_github.svg'}
        providerName={'github'}
      >
        Continue with Github
      </ProviderButton>
      
      <Divider>
        <Typography component="p" color={'textSecondary'}>
          OR
        </Typography>
      </Divider>
    </Stack>
  )
}