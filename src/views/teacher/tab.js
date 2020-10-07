import React from 'react';
import Tab from '../../common/component/tab';

function TeacherTab(props) {
    let point = [];
    let {data, newData, showAlert} = props;
    return (
        data.length > 1 ? (<Tab data={newData} render={(data) => {
            return (
                <ul className="lecturer_list">
                    {   data.map(item => {
                            return (
                                <li key={item.id}
                                    onTouchStart={(e)=>{
                                        let touch = e.changedTouches[0];
                                        point.x = touch.pageX;
                                        point.y = touch.pageY;
                                    }}
                                    onTouchEnd={(e)=>{
                                        let touch = e.changedTouches[0];
                                        let nowPoint = {
                                            x: touch.pageX,
                                            y: touch.pageY
                                        };
                                        //console.log(point,nowPoint);
                                        if(Math.abs(nowPoint.x - point.x)<5
                                            &&Math.abs(nowPoint.y - point.y)<5){
                                            showAlert(item);
                                        }
                                    }}
                                >
                                    <img src={item.icon} />
                                    <p>{item.title}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }}/>) : ""

    );

}

export default TeacherTab;