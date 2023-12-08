import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Dashboard from "./views/Dashboard";
import Login from './views/Login';
import Signup from './views/Signup';
import Surveys from './views/Surveys';
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
const router = createBrowserRouter([

{
  path:'/app',
  element:<App/>
},

{
  path:'/',
  element:<DefaultLayout/>,
  children:[
    {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'/surveys',
      element:<Surveys/>
    },
  ]
},
{
  path:'/',
  element:<GuestLayout/>,
  children:[
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'signup',
      element:<Signup/>
    },
  ]
}
])
export default router;
