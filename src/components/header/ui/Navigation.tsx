import Link from "next/link";
import Image from "next/image";
import {Box} from "@mui/material";
import SearchBar from "@/components/header/ui/SearchBar";
import {MediaQueryContainer} from "@/components/media-query-container";
import ResponsiveNavigation from "@/components/header/ui/ResponsiveNavigation";
import WideNavigation from "@/components/header/ui/WideNavigation";
import ShortNavigation from "@/components/header/ui/ShortNavigation";

export default function Navigation() {
  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}>
      <Link href="/">
        <Image src={'/icons/icon_logo.svg'} alt='Logo' width={140} height={50} />
      </Link>
      
      <ResponsiveNavigation
        wideVariant={<WideNavigation/>}
        shortVariant={<ShortNavigation/>}
      />
    </Box>
  )
}