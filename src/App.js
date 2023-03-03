import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Currency from './pages/Currency';
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/', element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: 'currency', element: <Currency></Currency> },
    ]

  },

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
