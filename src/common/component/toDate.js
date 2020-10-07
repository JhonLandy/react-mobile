import React from 'react';
/*
    1分钟内 :  "刚刚", // 60000
    1小时内 :  "n分钟之前", // 3600000
    1天内 :  "n小时之前", // 24*3600000 = 86400000
    1周内 :  "n天之前",//  86400000*7 =
    time
*/
function ToDate(props){
    let {time} = props;
    let nowTime = Date.now();
    let newTime = new Date(time).getTime();
    let disTime = nowTime - newTime;
    //console.log(newTime);
    if(disTime < 60000){
        return "刚刚";
    } else if(disTime < 3600000){
        return parseInt(disTime/60000) + "分钟之前";
    } else if(disTime < 86400000){
        return parseInt(disTime/3600000) + "小时之前";
    } else if(disTime < 604800000){
        return parseInt(disTime/86400000) + "天之前";
    }
    return time;
}
export default ToDate;