import HTTP from "./http";

export default function LoginAction(data) {
    return function(dispatch) {
        return HTTP.post("/user/login", data).then(res => {
            if(res.data.code == 0){
                dispatch({
                    type: "LOGIN",
                    user: data.username
                });
            };
            return res.data;
        });
    };
};