import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Message() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // 获取查询参数

  return (
    <div>
      <h1>Message: {id || 'No ID provided'}</h1>

      <ul>
        <li>
          <Link to="/message?id=1">message001</Link>&nbsp;&nbsp;
        </li>
        <li>
          <Link to="/message?id=2">message002</Link>&nbsp;&nbsp;
        </li>
        <li>
          <Link to="/message?id=3">message003</Link>&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  );
}

export default Message;
