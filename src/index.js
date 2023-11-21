import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import List from './routes/List';
import Vote from './routes/Vote';
import Favorites from './routes/Favorites';
import ListItem from './routes/ListItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <List />
      },
      {
        path: "/list/:id",
        element: <ListItem />
      },
      {
        path: "/about",
        element: <Vote />
      },
      {
        path: "/contact",
        element: <Favorites />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
