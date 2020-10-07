import HTTP from "./http";
function getGood(id){
    return function(dispatch){
        return HTTP.post(`/lecturer/getgood`,{
            article_id:id
        }).then(res=>{
            //console.log(res);
            if(res.data.code == 0){
                dispatch({
                    type: "GOOD",
                    goodid: res.data.gooid
                });
            } else {
                dispatch({
                    type: "CANCEL_GOOD"
                });
            }
        })
    }
}
function setGood(id){
    return function(dispatch){
        return HTTP.post(`/lecturer/good`,{
            article_id:id
        }).then(res=>{
            if(res.data.code == 0){
                dispatch(getGood(id));
                return true;
            }
        })
    }
}
function cancelGood({id,goodid}){
    return function(dispatch){
        return HTTP.post(`/lecturer/cancelgood`,{
            article_id:id,
            goodid
        }).then(res=>{
            if(res.data.code == 0){
                dispatch({
                    type: "CANCEL_GOOD"
                });
                return true;
            }
        })
    }
}

export {getGood,setGood,cancelGood};