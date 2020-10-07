function loginUser(state= "", action) {
    switch (action.type) {
        case "LOGIN":
            return action.user;
            break;
        case "LOGINOUT":
            return "";
            break;
    }
    return state;
}
export default loginUser;