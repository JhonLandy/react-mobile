import  React,{useState, useEffect, useRef} from 'react';
import BetterScroll from 'better-scroll';

function Tab(props) {
    let {data, render}  = props;
    let [page, setPage] = useState(0);
    let banner = useRef(null);
    let scroll =null;
    useEffect((e) => {
        scroll = new BetterScroll(banner.current, {
            scrollX:true,
            scrollY:false,
            eventPassthrough: "vertical",
            momentum: false,
            snap: {
                loop: true
            }
        });
        scroll.on("scrollEnd", () => {
            setPage(scroll.getCurrentPage().pageX);
        })
    },[]);

    return (
        <section className="banner">
            <div ref={banner} className="banner_img">
                <ul className="banner_list clearfix">
                    {data.map((data, index) => {
                        return <li key={index}>{render(data)}</li>;
                    })}
                </ul>
            </div>
            <ul className="banner_nav">
                {data.map((url, index) => {
                    return  <li className={index == page ? "active" : ""} key={index}></li>;
                })}
            </ul>
        </section>
    );
}

export default Tab;