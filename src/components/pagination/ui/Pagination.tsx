'use client'

import {Box} from "@mui/material";
import {Pagination as MuiPagination} from "@mui/material";
import {ChangeEvent} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface IPaginationProps {
  itemsCount: number;
  itemsPerPage?: number;
  defaultPage: number;
}

export const Pagination = (
  {
    itemsCount,
    itemsPerPage = 20,
    defaultPage
  }: IPaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleOnChange = (event: ChangeEvent<unknown>, pageValue: number) => {
    const params = new URLSearchParams(searchParams);
    
    if (pageValue) {
      params.set('page', pageValue.toString());
    } else {
      params.delete('page');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <>
      <Box
        my={2}
        sx={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center'}}>
        <MuiPagination
          count={Math.ceil(itemsCount / itemsPerPage)}
          shape="rounded"
          onChange={handleOnChange}
          page={defaultPage}
        />
      </Box>
    </>
  )
}