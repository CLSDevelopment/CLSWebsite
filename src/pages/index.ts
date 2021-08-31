import React from 'react';

export const Home = React.lazy(() => import("./Home/home"));
export const Platform = React.lazy(() => import('./Platform/platform'));
export const Wallet = React.lazy(() => import('./Wallet/wallet'));
export const DebitCard = React.lazy(() => import('./DebitCard/debitCard'));
export const Information = React.lazy(() => import('./Information/information'));
export const NotFound = React.lazy(() => import('./NotFound/notFound'));