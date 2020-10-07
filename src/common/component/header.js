import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {NavLink, Link, withRouter} from "react-router-dom";
import {useBack} from "../hook/index";
import loginOut from "../../store/action/logout";
import isLogin from "../../store/action/isLogin";

function Header(props) {
    let {showMenu, loginUser, history, location} = props;
    let path = location.pathname;
    const back = useBack();
    let [isBtnShow, setBtnShow] = useState(false);
    useEffect(() => {
        props.dispatch(isLogin());
    }, []);

    function getUser(){
        if(path === "/login"){
            return ""
        }
        if(loginUser){
            return (<span className="header-btn-right">
                <span
                    className="header-user"
                    onClick = {()=>{
                        setBtnShow(!isBtnShow);
                    }}
                >{loginUser}</span>
                <span
                    className="header-logout-btn"
                    style={{
                        display:isBtnShow?"block":"none"
                    }}
                    onClick={()=>{
                        props.dispatch(loginOut()).then(data => {
                            if (data.code === 1) {
                                setBtnShow(false);
                            }
                        });
                    }}
                >退出</span>
            </span>);
        }
        return <Link className="user" to="/login" ></Link>;
    }
     return (
         <header id="header">
             <nav className="menu">
                 {path === "/login" ?
                     <a className="header-btn-left iconfont icon-back"
                     onClick={()=>{
                     back(history);
                 }}></a>:<a
                     className="header-btn-left iconfont icon-hycaidan" onClick={showMenu}
                 ></a>}
             </nav>
             <h1 className="logo">miaov.com</h1>
             {getUser()}
         </header>
     );
}

export default connect(res => res)(withRouter(Header));