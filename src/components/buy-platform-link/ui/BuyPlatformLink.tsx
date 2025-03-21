import Image from "next/image";
import {Button} from "@mui/material";

interface IBuyPlatformLinkProps {
  name: string;
  slug?: string;
  url?: string;
}

export const BuyPlatformLink = (
  {
    name,
    slug,
    url
  }: IBuyPlatformLinkProps) => {
  return (
    <>
      <Button
        href={url}
        target="_blank"
        variant="outlined"
        color='secondary'
        component='a'
        startIcon={<Image
          src={`/icons/icon_${slug}.svg`}
          alt={name}
          width={16}
          height={16}
        />}>
        {name}
      </Button>
    </>
  )
}