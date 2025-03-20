import {Box} from '@mui/material'
import Image from 'next/image'

export default function Header(){
  return (
    <header>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image src={'/icons/icon_logo.svg'} alt='Logo' width={200} height={50} />
      </Box>
    </header>
  )
}