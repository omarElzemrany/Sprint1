import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { 
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/dashboard',
    home: true
  },
  {
    title: 'my-items', 
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/my-items'
  },
  {
    title: 'store',
    icon: 'fa fa-shopping-bag',
    link: '/dashboard/store',
    children:[
      {
        title: 'all-items', 
        icon: 'fa fa-list',
        link: '/dashboard/store/all-items'
      }
    ]

  }
];
