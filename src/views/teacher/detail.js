import  React, {useEffect, useRef} from 'react';
import BScroll  from "better-scroll";

export default function Detail(props) {
    let {data, hideAlert} = props;
    let wrap = useRef(null);
    let point = [];
    useEffect(()=>{
        new BScroll(wrap.current, {
            scrollbar: true
        });
    });

    return (
        <aside className="elastic">
            <div className="elastic_box">
            <span className="close"
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
                          hideAlert();
                      }
                  }}
            >关闭</span>
                <div className="elastic_img">
                    <img src={data.icon} alt="" />
                </div>
                <div className="elastic_txt">
                    <h3>{data.title}-妙味课堂 全职讲师</h3>
                    <div className="elastic_content" ref={wrap}>
                        <div dangerouslySetInnerHTML={{
                            __html: data.content
                        }}></div>
                    </div>
                </div>
            </div>
        </aside>
    );
}