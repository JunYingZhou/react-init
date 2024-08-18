import { createSlice } from '@reduxjs/toolkit';

// 初始状态
const initialState = {
  userInfo: {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    authToken: '1234567890',
  }
};

// 创建切片
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 示例：更新用户名
    updateName(state, action) {
      state.userInfo.name = action.payload;
    },
    // 示例：更新年龄
    updateAge(state, action) {
      state.userInfo.age = action.payload;
    },
    // 示例：更新电子邮件
    updateEmail(state, action) {
      state.userInfo.email = action.payload;
    },
    // 示例：更新授权令牌
    updateAuthToken(state, action) {
      state.userInfo.authToken = action.payload;
    },
    updateUserInfo(state, action) {
        state.userInfo = { ...state.userInfo, ...action.payload };
      },
  },
});

// 导出 actions 和 reducer
export const { updateName, updateAge, updateEmail, updateAuthToken,updateUserInfo } = userSlice.actions;
export default userSlice.reducer;
