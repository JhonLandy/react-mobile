function works(state= {
    page: 1,
    loading: false,
    loadEnd: false,
    data: []
}, action) {
    switch (action.type) {
        case "LOAD":
            return {
                ...state,
                loading: true,
            };
            break;
        case "LOADOVER":
            return {
                page: state.page + 1,
                data: [...state.data, ...action.data],
                loading: false,
            };
            break;
        case "LOADEND":
            return {
                ...state,
                loadEnd: true
            }
    }
    return state;
}
export default works;