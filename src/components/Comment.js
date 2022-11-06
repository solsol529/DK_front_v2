import commentProfileImg from "../resource/kriby_study2.png";
const Comment = ()=>{
  return(
    <li className="commentLi">
        <p className="commentP">
          <img src={commentProfileImg} alt="댓글 프로필 이미지"/>
          <span className="commentnickname">닉네임</span>
          <span className="commentdelete">삭제</span>
        </p>
        <p>동글동글한 핑크색 공 모양 생김새에 뭐든지 빨아들여서 삼키는 능력을 가진, 별의 커비 시리즈의 주인공!</p>
        <time>10분 전</time>
    </li>
  );
};

export default Comment;