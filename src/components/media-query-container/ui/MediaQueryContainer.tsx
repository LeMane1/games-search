'use client'

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/system";
import {Breakpoint} from "@mui/material";
import {useEffect, useState} from "react";

interface IMediaQueryContainerProps {
  breakPointValue: Breakpoint;
  isLowerThanBreakpoint?: boolean;
  children: React.ReactNode;
}

export const MediaQueryContainer = (
  {
    breakPointValue,
    isLowerThanBreakpoint = false,
    children
  }: IMediaQueryContainerProps) => {
  const theme = useTheme();
  const isActive = useMediaQuery(theme.breakpoints.up(breakPointValue));
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <>
      {(isLowerThanBreakpoint ? !isActive : isActive) && children}
    </>
  )
}