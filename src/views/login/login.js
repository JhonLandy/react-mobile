import React, {useState} from 'react';
import {connect} from 'react-redux';
import login from '../../store/action/login';
import {NavLink, withRouter} from "react-router-dom";
import {useBack} from '../../common/hook/index';

function LoginBox(props) {
    let {setDeg, history} = props;
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [vcode, setVcode] = useState("");
    let [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?"+Date.now());
    const back = useBack();
    function toLogin() {
        props.dispatch(login({
            username,
            password,
            verify: vcode
        })).then(data => {
            alert(data.msg);
            if(data.code != 0){
                setTimeout(()=>{
                    setVcodeSrc("/miaov/user/verify?"+Date.now());
                    setVcode("");
                }, 1000);
            } else {
                back(history);
            }
        });
    }
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="images/user_img.png" alt=""/>
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text" name="username" value={username} onChange={e => {
                        setUsername(e.target.value);
                    }} placeholder="用户名" />
                </p>
                <p>
                    <input type="password" name="password" value={password} onChange={e => {
                        setPassword(e.target.value);
                    }} placeholder="请输入密码"/>
                </p>
                <p className="clearfix">
                    <input className="verifyCode" type="text" placeholder="验证码" value={vcode}
                        onChange={e=>{
                            setVcode(e.target.value);
                        }}
                    />
                    <img className="verify" src={vcodeSrc} onClick={()=>{
                        setVcodeSrc("/miaov/user/verify?"+Date.now())
                    }}/>
                </p>
                <button className="form_btn" onClick={toLogin}>登录</button>
                <p className="form_tip">没有帐号？<a href="#"
                    onClick={()=>{
                        setDeg(-180)
                    }
                }>立即注册</a></p>
            </div>
        </div>
    );
}

export default connect(res => res)(withRouter(LoginBox))