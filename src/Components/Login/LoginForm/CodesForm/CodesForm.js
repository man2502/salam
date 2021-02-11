import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import { fixedNumbers } from "./../../common/numbers"

export default function CodesForm({ onChange, control }) {

  return (
    <Controller
      as={
        <select 
          defaultValue={"+993"}
          style={{width :"25%", height:50+"px"}}>
          {fixedNumbers.map(o => {
            return(
              <option selected={o.code =="+993"?true: false} value={o.code}>{o.code + " " + o.en+ " " + o.rus}</option>
            )
          })}
          
        </select>
      }
      name="country"
      control={control}
      defaultValue={"+993"}
      
    />
  );
}




