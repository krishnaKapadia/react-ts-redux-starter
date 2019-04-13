import React, { FunctionComponent, useState } from 'react';
// import { Box, Button, Form, Text, TextInput } from 'grommet';
import { FormLock, View } from 'grommet-icons';
import { Box, FormField, TextInput } from 'grommet/es6';
// import { FormField } from 'grommet/es6';

type Props = {
  label: string;
  type: 'text' | 'password' | 'email';
  name?: string;
  value?: any;
  onChange: (value: string) => void;
  required?: boolean;
};

export const Input: FunctionComponent<Props> = ({ value, name, label, onChange, ...props }) => {
  const [inputValue, setValue] = useState(value);
  const [reveal, setReveal] = useState(false);
  return (
    <FormField
      label={label}
      name={name}
    >
      <Box
        width="medium"
        direction="row"
      >
        <TextInput
          plain
          type={props.type}
          value={inputValue}
          onChange={(event: any) => onChange(event.target.value)}
          {...props}
        />
      </Box>
    </FormField>
  );
};