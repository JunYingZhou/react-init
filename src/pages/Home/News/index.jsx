import React from 'react';
import { useParams } from 'react-router-dom';

function News() {
    // 获取路由参数
    const { id } = useParams();
    console.log(id); // 确认 id 是否在控制台中显示
    
    return (
        <div>
            <h1>News: {id}</h1>
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        </div>
    );
}

export default News;
