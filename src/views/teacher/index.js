import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import "../../common/css/teacher.css";
import Frame from '../../common/component/frame';
import getTeachers from '../../store/action/getTeacher';
import TeacherTab from './tab';
import Detail from './detail';
import Footer from './foot';
import Join from './join';

function Teacher(props) {
    let newData = [];
    let {dispatch, data} = props;
    let [show, setShow] = useState(false);
    let [alertData, setAlertData] = useState(false);

    function showAlert(data) {
        setAlertData(data);
        setShow(true);
    }

    function hideAlert() {
        setShow(false);
    }
    useEffect(()=>{
        dispatch(getTeachers());

    }, []);
    for(let i = 0; i < data.length; i+=3){
        let newArr = [];
        let end = i+3;
        end = end > data.length?data.length:end;

        for(let j = i; j < end; j++){
            newArr.push(data[j]);
        }
        newData.push(newArr);
    }

    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <TeacherTab data={data} newData={newData} showAlert={showAlert}/>
                </div>
                <Join />
                <Footer />
            </Frame>
            {show ? <Detail data={alertData} hideAlert={hideAlert}/> : ""}
        </div>
    );
};

export default connect(res => ({...res.teacher}))(Teacher);