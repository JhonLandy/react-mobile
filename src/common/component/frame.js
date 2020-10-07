import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {useInnerHeight} from  '../hook/index'

import BScroll from "better-scroll";

function Frame(props) {
    let {pull, getWorkData} = props;
    let wrap = useRef(null);
    let mianHeight = useInnerHeight();
    useEffect(()=>{
        window.pageScroll = new BScroll(wrap.current, {
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pull ? {threshold:200} : false
        });
        window.pageScroll.on("pullingUp", () => {
            getWorkData().then((res) => {
                if (res) {
                    window.pageScroll.finishPullUp();
                    window.pageScroll.refresh();
                } else {
                    window.pageScroll.closePullUp();
                }
            });
        });
        return () => {
            window.pageScroll = null;
        }
    },[]);

    return (
        <div id="main" style={{height: mianHeight}}>
            <div className="pageWrap" ref={wrap}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Frame;