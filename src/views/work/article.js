import React,{useRef,useEffect} from 'react';
export default function Article(props){
    let {data} = props;
    let wrap = useRef(null);
    useEffect(()=>{
        let imgs = wrap.current.querySelectorAll("img");
        imgs.forEach(img => {
            img.onload = function(){
                window.pageScroll.refresh();
            };
        });
    },[data])
    return (
        <article className="miiaov_article" ref={wrap}>
            <h3>{data.title}</h3>
            <div className="miiaov_txt"
                 dangerouslySetInnerHTML={{
                     __html: data.content
                 }}
            >
            </div>
        </article>
    )
}