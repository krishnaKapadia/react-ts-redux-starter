import { Component } from 'react';
import { Box, Grid, Heading } from 'grommet';
import React from 'react';

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
      <Box fill background={"dark-3"} pad={"medium"}>
        <Grid {...GridConfig}>
          <Box fill background={"blue"}>
            <Heading level={"3"}>Rewrite the email worker</Heading>
          </Box>
          <Box fill background={"red"}></Box>
          <Box fill background={"green"}></Box>
          <Box fill background={"orange"}></Box>
          <Box fill background={"black"}></Box>
        </Grid>
      </Box>
    );
  }
}

export default Dashboard;
