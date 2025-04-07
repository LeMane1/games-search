'use client'

import {Button} from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {RootState} from "@/lib/store";
import {changeSearchParametersModalState} from "@/lib/slices/mainSlice";

export default function ApplyButton(){
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const {sortOrdering, selectedPlatforms} = useAppSelector((state: RootState) => state.searchParametersReducer);
  const dispatch = useAppDispatch();
  
  const handleOnClick = () => {
    const params = new URLSearchParams(searchParams);
    
    if (sortOrdering){
      params.set('ordering', sortOrdering);
    } else {
      params.delete('ordering');
    }
    
    if (selectedPlatforms.length > 0){
      const platformsString = selectedPlatforms.join(',');
      params.set('parent_platforms', platformsString);
    }else{
      params.delete('parent_platforms');
    }
    
    if (params.get('page')){
      params.set('page', '1');
    }
    
    dispatch(changeSearchParametersModalState(false))
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <Button
      fullWidth
      variant={'contained'}
      onClick={handleOnClick}
    >
      Apply
    </Button>
  )
}