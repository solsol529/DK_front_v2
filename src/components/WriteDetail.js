import CommentList from "./CommentList";
import writeProfileImg from "../resource/kriby_study2.png";
import goodIcon from "../resource/kirby_icon6.png";
import commentIcon from "../resource/kirby_icon7.png"
import tomatoIcon from "../resource/kirby_icon6-1.png";
import writeIcon from "../resource/kirby_icon8.png";
const WriteDetail = () =>{
  return(
    <div className="writedetail">
      <div className="wname">
        <p>귀여운 커비</p>
        <div className="writeprofile">
          <img src={writeProfileImg} alt="게시글 프로필 이미지"/>
          <time>방금</time>
          <h3 className="nickname">와들디</h3>
          <span className="writedelete">삭제</span>
        </div>
      </div>
      <p className="wcontent">
        봄바람과 함께 푸푸푸랜드에 찾아온 모험의 용사<br/>
        적을 빨아들이고 능력을 카피해, 변신하기도!<br/>
        무기를 휘두르고, 신기한 기술도 사용하고, 때로는 모습을 바꿔 활약!!</p>
      <ul className="status">
        <li className="good">
          <img src={goodIcon} alt="좋아요"/>
          <span>0</span>
        </li>
        <li className="comment">
          <img src={commentIcon} alt="댓글"/>
          <span>0</span>
        </li>
      </ul>
      <button className="goodbtn">
        <img src={tomatoIcon} alt="맥시멈토마토"/>
        <p>0</p>
      </button>
      <CommentList/>
      <form action="#" className="writecomment">
        <input type="text" name="commentinput" className="commentinput"/>
        <button><img src={writeIcon} alt="글쓰기아이콘"/></button>
      </form>
    </div>
  );
};
export default WriteDetail;