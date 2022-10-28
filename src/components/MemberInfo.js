import { Link } from "react-router-dom";
import "../style/member.scss"
import defaultProfileImg from "../resource/kriby_study2.png";
import rankIcon1 from "../resource/kirby_icon1.png";
import ChangeMemberInfo from "./ChangeMemberInfo";
import MyWrite from "./MyWrite";
const MemberInfo = () =>{
  return(
    <div className="memberinfomain">
      <div className="memberinfoheader">
        <div className="profilecard">
          <div className="profileimg">
            <img src={defaultProfileImg} alt="기본 프로필 이미지(공부하는 커비)"/>
          </div>
          <p>닉네임</p>
          <p>
            <Link to="#">
              <img src={rankIcon1} alt="회원등급 1"/>
              회원등급
            </Link>
          </p>
          <p>회원번호 /  가입일</p>
          <p>이메일@email.com</p>
          <p>+82 10-1234-5678</p>
          <button>로그아웃</button>
        </div>
      </div>
      <div className="memberinfocenter">
        <ChangeMemberInfo/>
        <MyWrite/>
      </div>
    </div>
  );
};
export default MemberInfo;