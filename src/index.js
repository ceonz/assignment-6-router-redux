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
import NotFound from './routes/NotFound';

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
        path: "/vote",
        element: <Vote />
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

export default store;