import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import defaultProfileImg from "../resource/kriby_study2.png";
import rankIcon1 from "../resource/kirby_icon1.png";
import { logout } from "../util/common";
import api from "../api/api";

const ProfileCard = ()=>{

  const [lists, setLists] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.boardInfoDetail();
        setLists(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return(
    <div className="profilecard">
      <div className="profileimg">
        <img src={defaultProfileImg} alt="프로필 이미지"/>
      </div>
      <p>닉네임</p>
      <p>
        <Link to="#">
          <img src={rankIcon1} alt="회원등급 1"/>
          회원등급
        </Link>
      </p>
      <p><Link to="/memberinfo">내 정보</Link><Link to="#" onClick={logout}>로그아웃</Link></p>
    </div>
  );
};

export default ProfileCard;