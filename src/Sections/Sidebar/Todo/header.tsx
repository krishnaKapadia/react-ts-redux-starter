import { FunctionComponent } from 'react';
import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';

type Props = {
  todoList: object[]
};

export const SidebarHeader : FunctionComponent<Props> = ({ todoList }) => (
  <Box background={'white'} direction={'row'} pad={{ horizontal: 'medium', vertical: 'small' }} justify={'between'}>
    <Text size={"small"} weight={"bold"} color={"accent-1"} >Current items: {todoList.length}</Text>
    <Add size={"medium"} color={"accent-1"} style={{  }} />
  </Box>
);
