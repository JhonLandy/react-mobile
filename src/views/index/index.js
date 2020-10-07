import React, {useState, useEffect, useRef} from 'react';
import Tab from "../../common/component/tab";
import Frame from "../../common/component/frame";
import {connect} from 'react-redux';
import "../../common/css/index.css";
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Works from './works';
import getWorks from "../../store/action/getWorks";
const imgeData = [
    require("../../common/images/banner1.jpg"),
    require("../../common/images/banner2.jpg"),
    require("../../common/images/banner3.jpg"),
    require("../../common/images/banner4.jpg")
]
function Index(props) {
    let {dispatch}  = props;

    function getWorkData() {
        return dispatch(getWorks());
    }
    useEffect(()=>{
        getWorkData();
    },[]);
    return (
        <Frame pull={true} getWorkData={getWorkData}>
            <Tab data={imgeData} render={url => {
                    return <img src={url} />;
            }}/>
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
                <Works {...props}/>
            </section>
        </Frame>
    );
}

export default connect(props => ({...props.works}))(Index);
