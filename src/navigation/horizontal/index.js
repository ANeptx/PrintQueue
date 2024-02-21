export default [
  {
    header: 'Pages',
    icon: 'FileIcon',
    children: [
      {
        title: 'Home',
        route: 'home',
        icon: 'HomeIcon',
      },
      {
        title: 'TableLayout',
        route: 'Table-Layout',
        icon: 'TableIcon',
      },
      {
        title: 'Promotion',
        route: 'promotion-list',
        icon: 'StarIcon',
      },
      {
        title: 'Report',
        icon: 'BarChartIcon',
        children: [
          {
            title: 'Tip Report',
            route: 'tip-report',
            icon: 'BarChartIcon',
          },
        ],
      },
    ],
  },
]
