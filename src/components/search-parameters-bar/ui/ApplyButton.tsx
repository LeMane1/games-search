'use client'

import {Button} from "@mui/material";
import {useSearchParams} from "next/navigation";

export default function ApplyButton(){
  //const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  
  const handleOnClick = () => {
  
  }
  
  // const handleChange = useDebouncedCallback((event: SelectChangeEvent) => {
  //   const sortValue:string = event.target.value
  //   const params = new URLSearchParams(searchParams);
  //
  //   if (sortValue) {
  //     params.set('ordering', sortValue);
  //   } else {
  //     params.delete('ordering');
  //   }
  //
  //   if (params.get('page')){
  //     params.set('page', '1');
  //   }
  //
  //   replace(`${pathname}?${params.toString()}`);
  // }, 1000)
  
  return (
    <Button
      fullWidth
      variant={'contained'}
      onClick={handleOnClick}
    >
      Apply Filters
    </Button>
  )
}