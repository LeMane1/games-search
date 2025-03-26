'use client'

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/system";
import {Breakpoint} from "@mui/material";

interface IMediaQueryContainerProps {
  breakPointValue: Breakpoint;
  isLowerThanBreakpoint?: boolean;
  children: React.ReactNode;
}

export const MediaQueryContainer = (
  {
    breakPointValue,
    isLowerThanBreakpoint = true,
    children
  }: IMediaQueryContainerProps) => {
  const theme = useTheme();
  const isLower = useMediaQuery(theme.breakpoints.up(breakPointValue));
  
  return (
    <>
      {(isLowerThanBreakpoint ? isLower : !isLower) && children}
    </>
  )
}