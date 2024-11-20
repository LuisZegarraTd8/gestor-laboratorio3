import { TextField, Autocomplete } from '@mui/material';
// import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

import { DocTypes } from '@/types';

type ComboBoxProps = {
    options: DocTypes[]
    label: string
}

export default function ComboBoxSelect({options, label }: ComboBoxProps) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={(option) => option.abbr || ''}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
    // <FormControl
    //   fullWidth
    //   error={error}
    // >
    //   <InputLabel>{label}</InputLabel>
    //   <Select
    //     labelId={`${label}-label`}
    //     id={`${label}-select`}
    //     label={label}
    //   >
    //     {options.map((option) => (
    //       <MenuItem key={option.abbr} value={option.abbr}>
    //         {option.abbr}
    //       </MenuItem>
    //     ))}
    //   </Select>
    //   {error && <FormHelperText>{messageError}</FormHelperText>}
    // </FormControl>
  );
}