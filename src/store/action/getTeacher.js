import HTTP from "./http";
export default function getLecturers(){
    return function(dispatch){
        dispatch({
            type: "LOAD"
        })
        return HTTP.post(`/lecturer/lists?page=1&rows=100`,{
            order:"desc",
            sort:"sort",
            category_id: 2
        }).then(res=>{
            dispatch({
                type: "LOAD_LECTURERS",
                data: res.data
            });
        })
    }
}