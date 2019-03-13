import React, { FunctionComponent } from 'react';
import { Box, Text } from 'grommet';
import { SidebarHeader } from './header';
import { Task } from '../Components/Task';

// Temp data
const todoList = [
  {
    objective: "Create todo list app",
    steps: [
      "Setup project", "Write the App", "Deploy app"
    ],
    comments: ['1', '2'],
    timeInDays: 2,
    timeInHours: 2,
    timeInMinutes: 45
  }
];

type Props = {
//   No props
};

export const TodoSidebar: FunctionComponent<Props> = () => (
  <>
    <SidebarHeader todoList={todoList} />

    <Box
      direction={'column'}
      pad={{ horizontal: 'small', vertical: 'medium' }}
      gap={'small'}
      justify={'start'}
      overflow={"hidden"}
    >
      <Task />
    </Box>
  </>
);