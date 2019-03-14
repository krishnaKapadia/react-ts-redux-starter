import React, { Component } from 'react';
import { Box, Form, Heading, Text } from 'grommet';
import { Button, FormField } from 'grommet/es6';
import { PasswordInput } from '../../Components/PasswordInput';

type StateProps = {

};

type Props = StateProps;

class LoginContainer extends Component<Props> {
  render() {
    return (
      <Box fill background={"white"} pad={"medium"}>
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Heading alignSelf={"center"} color={"brand"}>GIVE</Heading>
          </Box>
          <Box width="medium">
            <Form
              onReset={event => console.log(event)}
              onSubmit={(event: any) => console.log("Submit", event)}
            >
              <FormField label="Email" name="email" required />
              <PasswordInput label={"Password"} />

              <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button label="Cancel" />
                <Button type="submit" label="Login" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default LoginContainer;