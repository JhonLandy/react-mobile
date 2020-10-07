import HTTP from "./http";
export default function getMessageList(id){
    return function(dispatch, getState){
        dispatch({
            type: "MESSAGE_LOAD"
        });
        let {page} = getState().messageList;
        return HTTP.post(`/lecturer/getcomment?page=${page}&rows=10`,{
            article_id: id
        }).then(res=>{
            console.log(res);
            if(!res.data.length){
                dispatch({
                    type: "MESSAGE_LOADEND"
                });
                return false;
            }
            dispatch({
                type: "MESSAGE_LOADOVER",
                messageList: res.data
            });
            return true;
        })
    }
}