'use client'

import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography} from "@mui/material";
import {VisibilityOff, Visibility} from "@mui/icons-material";
import {useState} from "react";
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface IPasswordInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: FieldError;
}

export default function PasswordInput<T extends FieldValues>({ register, error}: IPasswordInputProps<T>){
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility/>}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        {...register("password" as Path<T>)}
      />
      {error && (
        <Typography color="error" variant="caption" mt={1}>
          {error.message}
        </Typography>
      )}
    </FormControl>
  )
}