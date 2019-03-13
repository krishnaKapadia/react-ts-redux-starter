import React, { FunctionComponent } from 'react';
import { Box, Text } from 'grommet';
import { Clock, Menu as MenuIcon, Notes } from 'grommet-icons';

type Props = {
//  No props
};

const Menu: FunctionComponent<Props> = () => (
  <>
    <Box direction={'row'} >
      <MenuIcon size={"medium"} color={"brand"} style={{ marginRight: '16px' }} />
      <Text weight={"bold"} color={"brand"}>Hyper Space</Text>
    </Box>

    <Box direction={'row'} justify={'between'} >
      <Clock size={"medium"} color={"accent-1"} style={{ marginRight: '8px' }} />
      <Notes size={"medium"} color={"brand"} style={{ marginRight: '8px' }} />
    </Box>
  </>
);

export default Menu;