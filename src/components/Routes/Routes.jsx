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
            element: <AllToys></AllToys>
        },
        {
            path: 'my-toys',
            element: <MyToys></MyToys>
        },
        {
            path: 'add-toy',
            element: <AddToy></AddToy>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
  ]);

export default router;