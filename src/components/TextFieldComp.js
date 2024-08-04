import React from 'react'
import { FormControl,TextField } from "@mui/material"
import {Box} from "@mui/system"
import { useDispatch } from "react-redux"
import { handleAmountChange } from "../redux/actions"

function TextFieldComp() {

  const dispatch =useDispatch

  const handleChange=(e)=>{
    dispatch(handleAmountChange(e.target.value));
     
  }
  return (
    <Box mt={3} width="100%">
        <FormControl >
            <TextField
              onChange={handleChange} 
              label="Amount of Questions"
              variant="outlined"
              type="number"
              size="small"
              >

            </TextField>
        </FormControl>
    </Box>
  )
}

export default TextFieldComp