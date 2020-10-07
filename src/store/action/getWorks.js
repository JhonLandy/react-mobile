import HTTP from "./http";

export default function getWork(data) {

    return function(dispatch, getState) {
        dispatch({type: "LOAD"});
        let {page} = getState().works;
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`, {
            order: 'desc',
            sort: 'sort',
            recommend: 1
        }).then(res => {
            if(!res.data.length){
                dispatch({
                    type: "LOADEND"
                });
                return false;
            }
            dispatch({
                type: "LOADOVER",
                data: res.data
            });
            return true;
        });
    };
};