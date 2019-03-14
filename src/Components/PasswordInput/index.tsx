import React, { FunctionComponent, useState } from 'react';
import { Box, Button, Form, Text, TextInput } from 'grommet';
import { FormLock, View } from 'grommet-icons';
import { FormField } from 'grommet/es6';

type Props = {
  label: string;
  name?: string;
  value?: any;
};

export const PasswordInput: FunctionComponent<Props> = ({ value, name, label, ...rest }) => {
  const [inputValue, setValue] = useState(value);
  const [reveal, setReveal] = useState(false);
  return (
    <FormField
      label={label}
      name={name}
      required
    >
      <Box
        width="medium"
        direction="row"
      >
        <TextInput
          plain
          name={label}
          type={reveal ? 'text' : 'password'}
          value={inputValue}
          onChange={event => setValue(event.target.value)}
          {...rest}
        />
        <Button
          icon={reveal ? <FormLock size="medium" /> : <View size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </FormField>
  );
};