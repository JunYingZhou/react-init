// src/router/index.js
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthRoute } from '@/components/AuthRoute';

const Home = lazy(() => import('@/pages/Home'));
const User = lazy(() => import('@/pages/User'));
const UserDetails = lazy(() => import('@/pages/User/UserDetails'));
const Message = lazy(() => import('@/pages/Home/Message'));
const News = lazy(() => import('@/pages/Home/News'));
const Login = lazy(() => import('@/pages/Login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <Suspense fallback="加载中">
          <Home />
        </Suspense>
      </AuthRoute>
    ),
    children: [
      {
        path: 'news/:id',
        element: (
          <Suspense fallback="加载中">
            <News />
          </Suspense>
        ),
      },
      {
        path: 'message',
        element: (
          <Suspense fallback="加载中">
            <Message />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/user/:id',
    element: (
      <AuthRoute>
        <Suspense fallback="加载中">
          <User />
        </Suspense>
      </AuthRoute>
    ),
    children: [
      {
        path: 'userDetails',
        element: (
          <Suspense fallback="加载中">
            <UserDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback="加载中">
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
