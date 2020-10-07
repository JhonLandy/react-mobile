import React,{useEffect,useState} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getGood,setGood,cancelGood} from "../../store/action/good";

function Good(props){
    let {goodNub,good,goodid,user,dispatch,id,history} = props;
    let point = {};
    const [goodCount,setGoodCount] = useState(parseInt(goodNub));
    useEffect(()=>{
        dispatch(getGood(id));
    },[user]);
    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span
                className={"iconfont icon-tuijian1 " + (good?"good":"")}
                onTouchStart={(e)=>{
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y = touch.pageY;
                }}
                onTouchEnd={(e)=>{
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    if(Math.abs(nowPoint.x - point.x)<5
                        &&Math.abs(nowPoint.y - point.y)<5){
                        if(user){
                            if(good){
                                dispatch(cancelGood({
                                    id,
                                    goodid
                                })).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount - 1);
                                    }
                                });
                            } else {
                                dispatch(setGood(id)).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount + 1);
                                    }
                                });
                            }
                        } else {
                            history.push("/login");
                        }
                    }
                }}
            ></span>
        </p>
    );
}
export default withRouter(connect(state=>({
    ...state.good,
    user: state.loginUser
}))(Good));