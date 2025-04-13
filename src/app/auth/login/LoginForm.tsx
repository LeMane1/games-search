'use client'

import {login} from "@/app/auth/lib/actions";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack, Typography,
} from "@mui/material";
import PasswordInput from "@/app/auth/ui/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {LoginFormData} from "@/app/auth/lib/schema";
import {LoginSchema} from "@/app/auth/lib/schema";

export default function LoginForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });
  
  const onSubmit = async (formData: LoginFormData) => {
    await login(formData)
  };
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            type="email"
            autoComplete={'off'}
            {...register("email")}
          />
          {errors.email && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.email.message}
            </Typography>
          )}
        </FormControl>
        
        <PasswordInput <LoginFormData>
          register={register} error={errors.password}
        />
        
        <Box mb={2}/>
        
        <Button type={'submit'} variant='contained'>Login</Button>
        
        <Box mb={2}/>
      </Stack>
    </form>
  )
}