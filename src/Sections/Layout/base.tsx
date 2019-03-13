import React from 'react';
import { Box, Grid } from 'grommet';
import Dashboard from '../Dashboard';
import { BaseLayoutGridAreas, BaseLayoutGridConfig, SidebarGridAreas, SidebarGridConfig } from './models';
import Menu from '../Menu';
import { FUNCTION, SidebarContentBase } from '../Sidebar';

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
      <Box gridArea={SidebarGridAreas.Menu} background={'white'} direction={'row'} justify={'between'} pad={{ horizontal: 'small', vertical: 'small'}}>
          <Menu />
      </Box>

     <Box gridArea={SidebarGridAreas.Content} background={'orange'}>
       <SidebarContentBase display={FUNCTION.TODO} />
      </Box>
   </Grid>
);