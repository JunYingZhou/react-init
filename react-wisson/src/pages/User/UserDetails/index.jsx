import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../stores/userStore'; // 更新为正确路径

const UserDetails = () => {
  // 从 Redux store 中获取用户信息
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  // 本地状态用于处理表单输入
  const [name, setName] = useState(userInfo.name);
  const [age, setAge] = useState(userInfo.age);
  const [email, setEmail] = useState(userInfo.email);

  // 处理保存操作
  const handleSave = () => {
    dispatch(updateUserInfo({ name, age, email }));
    alert('用户信息已保存');
  };

  return (
    <div>
      <h1>用户详细信息</h1>
      <p>这里显示用户的详细信息。</p>
      <form>
        <div>
          <label>姓名:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>年龄:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div>
          <label>电子邮件:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          保存用户信息
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
