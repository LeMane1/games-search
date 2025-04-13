'use client'

import {signup} from "@/app/auth/lib/actions";
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
import type {RegisterFormData} from "@/app/auth/lib/schema";
import {RegisterSchema} from "@/app/auth/lib/schema";

export default function RegisterForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });
  
  const onSubmit = async (formData: RegisterFormData) => {
    await signup(formData)
  };
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            type='text'
            label="Name"
            {...register("userName")}
          />
          {errors.userName && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.userName.message}
            </Typography>
          )}
        </FormControl>
        
        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type='email'
            label="Email"
            {...register("email")}
          />
          {errors.email && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.email.message}
            </Typography>
          )}
        </FormControl>
        
        <PasswordInput <RegisterFormData>
          register={register}
          error={errors.password}
        />
        
        <Box mb={2}/>
        
        <Button type={'submit'} variant='contained'>Sign up</Button>
        
        <Box mb={2}/>
      </Stack>
    </form>
  )
}