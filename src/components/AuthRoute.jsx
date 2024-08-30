import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export function AuthRoute ({children}){
      // 从 Redux store 中获取用户信息
  const userInfo = useSelector((state) => state.user.userInfo);
  if(userInfo.authToken){
    return <>{children}</>
  }else{
    return <Navigate to={'/login'} replace></Navigate>
  }
}