import React from 'react';
import { Box, Grid, Text } from 'grommet';
import Dashboard from '../Dashboard';
import { BaseLayoutGridAreas, BaseLayoutGridConfig, SidebarGridAreas, SidebarGridConfig } from './models';

type LayoutBaseProps = {};

export const LayoutBase: React.FunctionComponent<LayoutBaseProps> = () => (
  <Grid
    {...BaseLayoutGridConfig}
  >
    <Box gridArea={BaseLayoutGridAreas.Sidebar} background="menu">
      <SidebarBase />
    </Box>

    <Box gridArea={BaseLayoutGridAreas.Content}>
      <Dashboard />
    </Box>
  </Grid>
);

type SidebarBaseProps = {};

const SidebarBase: React.FunctionComponent<SidebarBaseProps> = () => (
   <Grid {...SidebarGridConfig}>
      <Box gridArea={SidebarGridAreas.Menu} background={'white'} direction={"row"} align={'center'} justify={'between'} pad={{ horizontal: 'medium', vertical: 'small'}}>
        <Icon></Icon>
        <Text>GIVE</Text>
      </Box>

     <Box gridArea={SidebarGridAreas.Content} background={'orange'}>
        <p>Content area</p>
      </Box>
   </Grid>
);