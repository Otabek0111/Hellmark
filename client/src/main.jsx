import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

import './index.css';
// import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/AboutUs',
        element: <AboutUs />
      }, {
        path: '/Shop/',
        element: <Shop />
      },
      {
        path: '/Cart/',
        element: <Cart />
      },
      {
        path: '/Signup/',
        element: <Signup />
      },
      {
        path: '/Login/',
        element: <Login />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
