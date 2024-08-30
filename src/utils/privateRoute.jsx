import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  // 这里可以是实际的认证逻辑
  const user = { isAuthenticated: true }; // 例如，检查用户是否已登录
  return user.isAuthenticated;
};

function PrivateRoute() {
  const isAuthenticated = useAuth();
  
  // 如果已认证，渲染子路由
  if (isAuthenticated) {
    return <Outlet />;
  }

  // 如果未认证，重定向到登录页面
  return <Navigate to="/login" />;
}

export default PrivateRoute;
