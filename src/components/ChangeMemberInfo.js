import { useState } from "react";
const ChangeMemberInfo = () =>{
  const [changeProfileImg, setChangeProfileImg] = useState(false);
  const [changePwd, setChangePwd] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  return(
    <div className="changememberinfo">
      <p>회원정보 수정</p>
      <p>프로필 사진 변경</p>
      {changeProfileImg && <div></div>}
      <p>비밀번호 변경</p>
      {changePwd && <div></div>}
      <p>이메일 변경</p>
      {changeEmail && <div></div>}
    </div>
  );
};

export default ChangeMemberInfo;