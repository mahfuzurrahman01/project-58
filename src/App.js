import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoutes from './Routes/PrivateRoutes';
import Orders from './Components/Orders';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
