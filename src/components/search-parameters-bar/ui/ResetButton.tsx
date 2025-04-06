'use client'

import {Button} from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppDispatch} from "@/lib/hooks";
import {resetAllSearchParameters} from "@/lib/slices/searchParametersSlice";
import {resetSearchParams} from "@/components/search-parameters-bar/lib/resetSearchParams";

export default function ResetButton(){
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  
  const handleOnClick = () => {
    dispatch(resetAllSearchParameters())
    
    const params = new URLSearchParams(searchParams);
    const resetParams = resetSearchParams(params, 'ordering', 'parent_platforms')
    
    replace(`${pathname}?${resetParams.toString()}`);
  }
  
  return (
    <Button
      variant={'outlined'}
      color={'secondary'}
      fullWidth
      onClick={handleOnClick}
    >
      Reset
    </Button>
  )
}