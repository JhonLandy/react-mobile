export default function work(state={
    data: {},
    loading: true
},action){
    switch(action.type){
        case "WORK_RESET":
            return {
                data: {},
                loading: true
            };
        case "WORK_LOADOVER":
            return {
                loading: false,
                data: action.data
            };
    };
    return state
}