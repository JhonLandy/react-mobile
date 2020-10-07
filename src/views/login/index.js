import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Frame from "../../common/component/frame";
import  LoginBox from './login';
import  Register from './register';
import "../../common/css/login.css";

function Index(props) {
    let [deg, setDeg] = useState(true);
    useEffect(()=>{
        const html = document.documentElement;
        const width = html.clientWidth;
        const size = width / 10;
        html.style.fontSize = size + 'px';
    },[]);
    return (
        <Frame>
            <div id="login_boxWrap">
                <h2 className="login_register"><span>登录&注册</span></h2>
                <div className="login_register_box">
                    <div className="box" style={
                        {transform:`rotateY(${deg}deg)`}
                    }>
                        <LoginBox setDeg={setDeg}/>
                        <Register setDeg={setDeg}/>
                    </div>
                </div>
            </div>
        </Frame>
    );
}

export default connect(res => res)(Index);