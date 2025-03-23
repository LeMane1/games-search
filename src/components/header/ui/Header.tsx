import {Box} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
  return (
    <header>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/">
          <Image src={'/icons/icon_logo.svg'} alt='Logo' width={140} height={50} />
        </Link>
      </Box>
    </header>
  )
}