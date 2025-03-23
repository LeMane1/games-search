import Image from "next/image";

interface IPlatformBadgeProps {
  platformName: string;
}

export default function PlatformBadge({platformName}:IPlatformBadgeProps){
  return (
    <>
      <Image
        src={`/icons/icon_${platformName}.svg`}
        alt={platformName}
        width={16}
        height={16}
      />
    </>
  )
}