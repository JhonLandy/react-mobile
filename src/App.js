import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import IndexRoute from './router/index';
import Header from "./common/component/header";
import Menu from "./common/component/menu";
import "./common/css/common.css";
import "./common/css/reset.css";

function App(props) {
    let [show,setShow] = useState(false);
    useEffect(()=>{
        const html = document.documentElement;
        const width = html.clientWidth;
        const size = width / 10;
        html.style.fontSize = size + 'px';
    },[]);

    const wrap = useRef(null);
    let pageScroll = null;



    function showMenu() {
        setShow(!show);
    }

    function hideMenu() {
        setShow(false);
    }
    return (
        <BrowserRouter>
            <Header showMenu={showMenu} />
            <Menu hideMenu={hideMenu}/>
            <div className="pageWrap" ref={wrap} style={{
                transform: `translateX(${show?4.5:0}rem)`,
            }} onTouchEnd={hideMenu}>
                <IndexRoute showMenu={showMenu}/>
            </div>
        </BrowserRouter>
    );
}

export default connect(res => res)(App);
