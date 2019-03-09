import React from 'react';
import { Box, Grid, Text, Heading } from 'grommet';
import Dashboard from '../Dashboard';
import { BaseLayoutGridAreas, BaseLayoutGridConfig, SidebarGridAreas, SidebarGridConfig } from './models';
import { Menu as MenuIcon } from 'grommet-icons';

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
        {/*<Button icon={<MenuIcon/>} label={"Menu"} onClick={() => console.log("Expand")} />*/}
        <div>
          <MenuIcon color={"accent-1"} style={{ alignSelf: 'start', marginRight: '15px' }} />
          <Text weight={"bold"} color={"brand"} style={{ float: "right"}}>GIVE</Text>
        </div>
      </Box>

     <Box gridArea={SidebarGridAreas.Content} background={'orange'}>
        <p>Content area</p>
      </Box>
   </Grid>
);