export default function good(state={
    good: false,
    goodid: 0
},action){
    switch(action.type){
        case "GOOD":
            return {
                good: true,
                goodid: action.goodid
            };
        case "CANCEL_GOOD":
            return {
                good: false,
                goodid: 0
            };
    };
    return state
}