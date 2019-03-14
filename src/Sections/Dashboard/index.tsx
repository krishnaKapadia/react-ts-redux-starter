import { Component } from 'react';
import { Box, CheckBox, Form, Grid, Heading, RadioButtonGroup, TextArea } from 'grommet';
import React from 'react';
import { Button, FormField } from 'grommet/es6';

type Props = {

};

const GridConfig = {
  fill: true,
  rows: ['fit', 'fit', 'fit', 'fit', 'fit'],
  columns: ['flex']
};

class Dashboard extends Component<Props> {
  render() {
    return (
      <Box fill background={"gray"} pad={"medium"}>
        <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.log(event)}
            onSubmit={(event: any) => console.log("Submit", event)}
          >
            <FormField
              label="Name"
              name="name"
              required
              validate={{ regexp: /^[a-z]/i }}
            />
            <FormField label="Email" name="email" required />

            <FormField
              label="Employee ID"
              name="employeeId"
              required
              validate={{ regexp: /^[0-9]{4,6}$/, message: "4-6 digits" }}
            />

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button label="Cancel" />
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
      </Box>
    );
  }
}

export default Dashboard;
