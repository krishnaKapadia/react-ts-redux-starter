import React, { FunctionComponent } from 'react';
import { Box, Grid, Text } from 'grommet';

const GridConfig = {
  rows: ["flex"],
  columns: ["flex", "xsmall"],
  gap: "small",
  fill: true,
  areas: [
    {
      name: 'mainContent',
      start: [0, 0],
      end: [0, 0]
    },
    {
      name: 'time',
      start: [1, 0],
      end: [1, 0]
    }
  ]
};

export const Task: FunctionComponent<{}> = () => (
  <Box border={{ color: "accent-1", size: 'small' }} height="xxxxsmall">
    <Grid  {...GridConfig}>
      <Box gridArea="mainContent" height={"xsmall"} pad={{ horizontal: 'small', vertical: 'none'}}>
        <Grid fill rows={["flex", "flex", "flex"]} columns={['fill']} margin={'xsmall'}>
          <Text size={"16px"} weight={550}>Re-write email worker</Text>

          <Grid fill rows={['fil l']} columns={["flex", "flex"]}>
            <Text color={"gray"} size={"xsmall"} weight={100}>Comments: 3</Text>
            <Text color={"gray"} size={"xsmall"} weight={100}>Days elapsed: 2</Text>
          </Grid>


          <Grid gap={'small'} fill rows={['fill']}  columns={["flex", "flex", "flex"]}>
            <Box fill background={"red"} justify={"center"}>
              <Text alignSelf={"center"}color={'white'} size={"small"}>Tag 1</Text>
            </Box>
            <Box fill background={"blue"} justify={"center"}>
              <Text alignSelf={"center"} color={'white'} size={"small"}>Tag 2</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box gridArea="time" height={"xsmall"} justify={"center"}>
        <Text alignSelf={"center"} color={"black"} size={"medium"}>3h 45m</Text>
      </Box>
    </Grid>
  </Box>

);