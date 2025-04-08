import Image from "next/image";
import {Button} from "@mui/material";
import {signinWithOAuth} from "@/app/auth/lib/actions";
import {Provider} from "@supabase/auth-js";

interface IProviderButtonProps {
  icon: string;
  children: string;
  providerName: string;
}

export default function ProviderButton({icon, children, providerName}: IProviderButtonProps) {
  return (
    <Button
      variant='outlined'
      color={'secondary'}
      onClick={() => signinWithOAuth(providerName as Provider)}
      startIcon={<Image
        src={icon}
        alt={providerName}
        width={20}
        height={20}
      />}
      sx={{
        height: 50,
      }}
    >
      {children}
    </Button>
  )
}