'use client'

import {Box} from "@mui/material";
import {Pagination as MuiPagination} from "@mui/material";
import {useDispatch} from "react-redux";
import {changePageValue} from "@/lib/features/mainSlice";
import {ChangeEvent} from "react";

interface IPaginationProps {
  itemsCount: number;
  itemsPerPage?: number;
}

export const Pagination = ({itemsCount, itemsPerPage = 20}: IPaginationProps) => {
  const dispatch = useDispatch();
  
  const handleOnChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(changePageValue(page));
  }
  
  return (
    <>
      <Box
        my={2}
        sx={{
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center'}}>
        <MuiPagination count={Math.ceil(itemsCount / itemsPerPage)} shape="rounded" onChange={handleOnChange}/>
      </Box>
    </>
  )
}