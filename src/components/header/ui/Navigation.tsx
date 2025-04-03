import Link from "next/link";
import Image from "next/image";
import {Box} from "@mui/material";
import WideNavigation from "@/components/header/ui/WideNavigation";
import ShortNavigation from "@/components/header/ui/ShortNavigation";
import SearchBar from "@/components/header/ui/SearchBar";

export default function Navigation() {
  return (
    <Box
      component='nav'
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
      }}>
      <Link href="/">
        <Image src={'/icons/icon_logo.svg'} alt='Logo' width={140} height={50} />
      </Link>
      
      <SearchBar/>
      
      <WideNavigation/>
      <ShortNavigation/>
    </Box>
  )
}