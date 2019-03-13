import { FunctionComponent } from 'react';
import { Box } from 'grommet';
import React from 'react';
import { TodoSidebar } from './Todo';

export enum FUNCTION {
  TODO, TIME
}


type SidebarBaseProps = {
//  No props
  display: FUNCTION
};

export const SidebarContentBase: FunctionComponent<SidebarBaseProps> = () => (
  <Box fill background={'white'} direction={'column'} pad={{ horizontal: 'medium', vertical: 'medium' }} >
    <TodoSidebar />
  </Box>
);
