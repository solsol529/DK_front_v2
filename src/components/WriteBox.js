import writeIcon from "../resource/kirby_icon8.png";
const WriteBox = ()=>{
  return(
    <div className="writebox">
      <div className="form">
        <input type="text" name="writename" className="writename" placeholder="글제목"/>
        <textarea name="writecontent" className="writecontent" placeholder="글내용"></textarea>
        <button>등록 <img src={writeIcon} alt="글쓰기아이콘"/></button>
      </div>
    </div>
  );
};

export default WriteBox;