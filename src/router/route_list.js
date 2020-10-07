import  React from 'react';
import Index from '../views/index/index';
import Login from '../views/login/index';
import Course from '../views/course/index';
import Teacher from '../views/teacher/index';
import Work from '../views/work/index';
const routeList = [
    {
        name: "首页",
        path: "/react-mobile",
        exact: true,
        render(props){
            return <Index {...props}/>;
        }
    },
    {
        name: "登录",
        path: "/login",
        exact: true,
        render(props){
            return <Login {...props}/>;
        }
    },{
        name: "课程安排",
        path: "/course",
        exact: true,
        render(props){
            return <Course {...props}/>;
        }
    },{
        name: "讲师团队",
        path: "/teacher",
        exact: true,
        render(props){
            return <Teacher {...props}/>;
        }
    },{
        name: "作品详情",
        path: "/work/:id",
        exact: true,
        render(props){
            return <Work {...props}/>;
        }
    }
];

const nav = [
    {
        name: "首页",
        path: "/react-mobile",
        exact: true,
        className: "iconfont icon-home"
    },{
        name: "课程安排",
        path: "/course",
        exact: true,
        className: "iconfont icon-kecheng"
    },{
        name: "讲师团队",
        path: "/teacher",
        exact: true,
        className: "iconfont icon-peixunjiangshi"
    }
];
export {routeList, nav};