import React from 'react';
import { useSelector } from 'react-redux'; // 引入 useSelector 钩子
import { Outlet } from 'react-router-dom';
import MyNavLink from '../../utils/MyNavLink';

function Home() {
  // 从 Redux store 中获取用户信息
  const userName = useSelector((state) => state.user.userInfo.name);

  return (
    <div>
      <h3>我是Home组件</h3>
      <p>欢迎, {userName}!</p> {/* 显示用户的名字 */}
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="news/1">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/message?id=1">Message</MyNavLink>
          </li>
        </ul>

        {/* 用于渲染子路由的占位符 */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
