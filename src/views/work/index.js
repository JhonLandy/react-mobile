import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import "../../common/css/miiaov.css";
import Frame from '../../common/component/frame';
import getWork from '../../store/action/getWork';
import Skeleton from '../../common/component/skeleton';
import getMessageList from "../../store/action/getMessageList";
import {getGood} from "../../store/action/good";
import Main from './main';
import Message from './message';

function Work(props) {
    let {dispatch, match, loading, data, user, history}  = props;
    let {id} = match.params;

    let [isShow, setShow] = useState(false);
    function getMessage() {
        return dispatch(getMessageList(id));
    }
    useEffect(() => {
        dispatch(getWork(id));
        getMessage();
        dispatch(getGood(id));
    }, []);

    return (
        <div>
            <Frame pull={true} getWorkData={getMessage}>
                {loading ? <Skeleton /> : <Main data={data} />}
            </Frame>
            <footer className="miiapv_footer" onClick={() => {
                if (user) {
                    setShow(true)
                } else {
                    history.push('/login');
                }
            }}>回复本帖</footer>
            <Message isShow={isShow} setShow={setShow} user={user}/>
        </div>
    );
}

export default connect(res => ({...res.work, user: res.loginUser}))(Work);