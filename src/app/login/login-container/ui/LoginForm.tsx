'use client'

import {login} from "@/app/login/login-container/lib/actions";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import PasswordInput from "@/app/login/login-container/ui/PasswordInput";

export default function LoginForm(){
  return(
    <form action={(formData: FormData) => login(formData)}>
      <Stack direction="column" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="imail"
            type='email'
            label="Email"
            name='email'
          />
        </FormControl>
        
        <PasswordInput/>
        
        <Box mb={2}/>
        
        <Button type={'submit'} variant='contained'>Login</Button>
        
        <Box mb={2}/>
      </Stack>
    </form>
  )
}