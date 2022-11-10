import { Link } from "react-router-dom";
import "../style/member.scss"
import defaultProfileImg from "../resource/kriby_study2.png";
import rankIcon1 from "../resource/kirby_icon1.png";
import rankIcon2 from "../resource/kirby_icon2.png";
import rankIcon3 from "../resource/kirby_icon3.png";
import rankIcon4 from "../resource/kirby_icon4.png";
import rankIcon5 from "../resource/kirby_icon5.png";
import Write from "./Write";
import BoardName from "./BoardName";
import { useState, useEffect } from "react";
import api from "../api/api";
import MyCommentWrite from "./MyCommentWrite";
import { logout } from "../util/common";

const MemberInfoMyComment = () =>{
  const [memberInfo, setMemberInfo] = useState('');
  const getNickname = window.localStorage.getItem("userNickname");

  useEffect(() => {    
    const memberData = async () => {
        try {
            const response = await api.memberInfo(getNickname);
            setMemberInfo(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    };
    memberData();
  }, []);
  return(
    <div className="memberinfomain">
      <div className="memberinfoheader">
        <div className="profilecard">
          {memberInfo && memberInfo.map(member => (
            <>
            <div className="profileimg">
            {member.pfImg? <img src={member.pfImg} alt="프로필 이미지"/> :
            <img src={defaultProfileImg} alt="기본 프로필 이미지(공부하는 커비)"/>}
            </div>
            <div className="profileinfo">
              <div key={member.nickname}>
                  <p>닉네임 : {member.nickname}</p>
                  <p>가입일 : {member.regDate}</p>
                  <p>전화번호 : {member.phone}</p>
                  <p>이메일 : {member.email}</p>
                  <p>회원등급 : <img className="memberrankimg" src={
                  member.grade === "새싹"? rankIcon1 : (member.grade === "잎새"? rankIcon2 : 
                  (member.grade === "가지열매나무"? rankIcon3 : (member.grade === "열매"? rankIcon4:rankIcon5)))
                  } alt={member.grade}/>{member.grade}
                  </p>
              </div>
            </div>
            </>
          ))}
          <Link to="#" onClick={logout} className="logout">로그아웃</Link>
        </div>
      </div>
      <div className="memberinfocenter">
        <BoardName name="내가 댓글 작성한 글" notlink={true}/>
        <div className="mywriteview">
          <MyCommentWrite/>
        </div>
      </div>
    </div>
  );

};
export default MemberInfoMyComment;