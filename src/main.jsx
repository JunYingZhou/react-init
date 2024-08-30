import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/index.jsx'
import { Provider } from 'react-redux';
import store from './stores/store';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
