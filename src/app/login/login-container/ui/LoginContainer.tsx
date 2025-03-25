'use client';

// import { useState } from 'react';
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {login, signup} from "@/app/login/login-container/lib/actions";

export default function LoginContainer() {
  return (
    <>
      <form action={(formData: FormData) => signup(formData)}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="imail"
            type='email'
            label="Email"
            name='email'
          />
        </FormControl>
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id='password'
            type='password'
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    'hide the password'
                  }
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  // onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {<VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  );
}