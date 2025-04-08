'use client'

import {signup} from "@/app/auth/lib/actions";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import PasswordInput from "@/app/auth/ui/PasswordInput";

export default function RegisterForm(){
  return(
    <form action={(formData: FormData) => signup(formData)}>
      <Stack direction="column" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            type='text'
            label="Name"
            name='name'
          />
        </FormControl>
        
        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="imail"
            type='email'
            label="Email"
            name='email'
          />
        </FormControl>
        
        <PasswordInput/>
        
        <Box mb={2}/>
        
        <Button type={'submit'} variant='contained'>Sign up</Button>
        
        <Box mb={2}/>
      </Stack>
    </form>
  )
}