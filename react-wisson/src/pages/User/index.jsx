import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import MyNavLink from '../../utils/MyNavLink';

function User() {
  // 获取路由参数
  const { id } = useParams();  
  const navigate = useNavigate(); // 使用 useNavigate 在组件内部

  const goToNews = (id) => {
    navigate(`/user/${id}/userDetails`); // 确保路径与路由配置一致
  };

  return (
    <div>
      <h1>用户详情</h1>
      <p>用户ID: {id}</p>
      <button onClick={() => goToNews(1)}>Go to User 1 Details</button>
      <button onClick={() => goToNews(2)}>Go to User 2 Details</button>

      {/* 使用 MyNavLink 进行导航 */}
      <MyNavLink to="userDetails">跳转到用户详情页</MyNavLink>

      <Outlet />
    </div>
  );
}

export default User;
