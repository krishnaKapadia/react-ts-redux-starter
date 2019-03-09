import { GridProps } from 'grommet';

export enum BaseLayoutGridAreas {
  Sidebar = 'Sidebar',
  Content = 'Content'
}

export const BaseLayoutGridConfig: GridProps = {
  rows: ['flex'],
  columns: ['medium', 'flex'],
  areas: [
    {
      name: BaseLayoutGridAreas.Sidebar,
      start: [0, 0],
      end: [0, 0]
    },
    {
      name: BaseLayoutGridAreas.Content,
      start: [1, 0],
      end: [1, 0]
    }
  ],
  fill: true
};

export enum SidebarGridAreas {
  Menu = 'Menu',
  Content = 'Content'
}

export const SidebarGridConfig: GridProps = {
  rows: ['xxsmall', 'flex'],
  columns: ['flex'],
  fill: true,
  areas: [
    {
      name: SidebarGridAreas.Menu,
      start: [0, 0],
      end: [0, 0]
    },
    {
      name: SidebarGridAreas.Content,
      start: [0, 1],
      end: [0, 1]
    }
  ]
};