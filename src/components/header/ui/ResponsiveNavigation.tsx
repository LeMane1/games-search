'use client'

import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/system";
import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

interface IResponsiveNavigationProps {
  wideVariant: React.ReactNode;
  shortVariant: React.ReactNode;
}

export default function ResponsiveNavigation({ wideVariant, shortVariant }: IResponsiveNavigationProps) {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up('md'));
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return <Skeleton variant="rounded" height={50} animation={'wave'} sx={{flexGrow: 1}} />
  
  return isWide ? wideVariant : shortVariant;
}