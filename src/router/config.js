import FundSup from '../views/FundSup.js';
import FundSupNew from '../views/FundSupNew.js';
import Home from '../views/Home.js'

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: "/fund_sup",
    name: 'FundSup',
    component: FundSup,
    exact: true
  }, {
    path: "/fund_sup_new",
    name: 'FundSupNew',
    component: FundSupNew,
    exact: true
  }
];
export default routes;