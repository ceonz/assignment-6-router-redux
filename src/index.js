import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/Root';
import List from './routes/List';
import Vote from './routes/Vote';
import Favorites from './routes/Favorites';
import ListItem from './routes/ListItem';
import store from './app/store'
import { Provider } from 'react-redux'
import App from './App';

const router = createHashRouter([
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
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

export default store;