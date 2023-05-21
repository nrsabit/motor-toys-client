import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';
import AddToy from '../Pages/AddToy/AddToy';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import NotFound from '../Pages/NotFound/NotFound';
import SingleToy from '../Pages/SingleToy/SingleToy';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'all-toys',
            element: <AllToys></AllToys>,
            loader: () => fetch(`https://motor-toys-server.vercel.app/all-toys?limit=20`)
        },
        {
            path: 'my-toys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: 'add-toy',
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: '/toys/:id',
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader: ({params}) => fetch(`https://motor-toys-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

export default router;