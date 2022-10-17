export const menuItems = [
  {
    label: '菜单一',
    key: 'item-1',
    children: [
      {
        label: '子菜单1-1',
        key: 'item-1-1',
        children: [
          { label: '子菜单1-1-1', key: 'item-1-1-1' },
          { label: '子菜单1-1-2', key: 'item-1-1-2' },
        ],
      },
      { label: '子菜单1-2', key: 'item-1-2' },
    ],
  },
  {
    label: '菜单二',
    key: 'item-2',
    children: [
      { label: '子菜单2-1', key: 'item-2-1' },
      { label: '子菜单2-2', key: 'item-2-2' },
    ],
  },
];
