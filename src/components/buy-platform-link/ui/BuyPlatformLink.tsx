import Image from "next/image";
import {Button} from "@mui/material";

interface IBuyPlatformLinkProps {
  name: string;
  slug?: string;
  domain?: string;
}

export const BuyPlatformLink = (
  {
    name,
    slug,
    domain,
  }: IBuyPlatformLinkProps) => {
  return (
    <>
      <Button
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