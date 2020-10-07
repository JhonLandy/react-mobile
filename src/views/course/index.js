import React from 'react';
import Frame from '../../common/component/frame';
import "../../common/css/class.css";

function Index() {
    return (
        <Frame>
            <div className="class_box">
                <h2><span>一周学习安排</span></h2>
                <table className="timetable">
                    <thead>
                    <tr>
                        <th>星期</th>
                        <th>时间</th>
                        <th>学习内容</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="week1" rowSpan="2">周一</td>
                        <td className="center">上午</td>
                        <td className="content_td">前端代码初识</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">基本属性：背景，边框</td>
                    </tr>
                    <tr>
                        <td className="week2" rowSpan="2">周二</td>
                        <td className="center">上午</td>
                        <td className="content_td">H5标签与css选择器</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">练习题</td>
                    </tr>
                    <tr>
                        <td className="week3" rowSpan="2">周三</td>
                        <td className="center">上午</td>
                        <td className="content_td">浮动的深度剖析</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">定位进阶</td>
                    </tr>
                    <tr>
                        <td className="week4" rowSpan="2">周四</td>
                        <td className="center">上午</td>
                        <td className="content_td">表单详解</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">表单的相关属性</td>
                    </tr>
                    <tr className="single">
                        <td className="center week5">周五</td>
                        <td className="center">全天</td>
                        <td className="content_td">浏览器兼容性</td>
                    </tr>
                    <tr className="single">
                        <td className="center week6">周末</td>
                        <td className="center" colSpan="2">合理安排自己的时间，记得做联系哦！</td>
                    </tr>
                    </tbody>
                </table>
                <p className="more_message">
                    更详情的课程安排请点击：<a href="#">www.miaov.com</a>
                </p>
            </div>
            <footer id="footer">
                <div className="link clearfix">
                    <a href="#">hr_recruit@miaov.com</a>
                    <a href="#">010-57269690</a>
                </div>
                <nav className="foot_nav clearfix">
                    <a href="#">网站首页</a>
                    <a href="#">课程安排</a>
                    <a href="#">学员作品</a>
                    <a href="#">视频教程</a>
                    <a href="#">关于我们</a>
                    <a href="#">在线留言</a>
                    <a href="#">常见问题</a>
                </nav>
                <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
            </footer>
        </Frame >
    );
}

export default Index;