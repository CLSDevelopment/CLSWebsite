import { DebitCard, Home, Platform, Wallet, Information, NotFound } from 'pages';


export const PublicRoutes = [
  {
    component: Home,
    path: 'home',
  },
  {
    component: Platform,
    path: 'platform',
  },
  {
    component: Wallet,
    path: 'wallet',
  },
  { 
    component: DebitCard, 
    path: 'debit-card' 
  },
  {
    component: Information,
    path: "information"
  },
  {
    component: NotFound,
    path: "*"
  }

];
