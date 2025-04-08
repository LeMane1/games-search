'use client'

import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {VisibilityOff, Visibility} from "@mui/icons-material";
import {useState} from "react";

export default function PasswordInput(){
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        name="password"
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
      />
    </FormControl>
  )
}