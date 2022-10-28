import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../resource/sleep_kirby.gif";
import "../style/join.scss"

const Join = ()=>{
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdchk, setPwdchk] = useState('');
  const [email, setEmail] = useState('');
  const [phonereg, setPhonereg] = useState("+82");
  const [phone, setPhone] = useState('');
  const [phonever, setPhonever] = useState('');
 
  const [nicknameMsg, setNicknameMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [pwdchkMsg, setPwdchkMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [phoneregMsg, setPhoneregMsg] = useState('');
  const [phoneMsg, setPhoneMsg] = useState('');
  const [phoneverMsg, setPhoneverMsg] = useState('');

  const [nicknameOkMsg, setNicknameOkMsg] = useState('');
  const [pwdOkMsg, setPwdOkMsg] = useState('');
  const [pwdchkOkMsg, setPwdchkOkMsg] = useState('');
  const [emailOkMsg, setEmailOkMsg] = useState('');
  const [phoneregOkMsg, setPhoneregOkMsg] = useState('');
  const [phoneOkMsg, setPhoneOkMsg] = useState('');
  const [phoneverOkMsg, setPhoneverOkMsg] = useState('');

  const [isNickname, setIsNickname] = useState('');
  const [isNicknamechk, setIsNicknamechk] = useState(false);
  const [isPwd, setIsPwd] = useState('');
  const [isPwdchk, setIsPwdchk] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhonereg, setIsPhonereg] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isPhonever, setIsPhonever] = useState('');
  const [buttonOn, setButtonOn] = useState(false);

  // 비밀번호, 비밀번호 확인 자물쇠 배경 위한 useState, white, red, blue 
  const [pwdlock, setPwdlock] = useState('white');
  const [pwdchklock, setpwdchklock] = useState('white');

  // 정규식
  // 패스워드 입력 조건 대문자, 소문자, 특수문자 포함 8자리 이상 20자리 이하
  const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,20}$/;
  // 이메일 - 일반적인 규칙
  const emailRegEx = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
  // 전화번호 - 일반적인 규칙
  const phoneRegEx = /^\d{2,3}-\d{3,4}-\d{4}$/;

  const buttonOnOff = ()=>{
    if(isNickname&&isPwd&&isPwdchk&&isPhone&&isPhonever){
      setButtonOn(true);
    }
    else setButtonOn(false);
  };

  const onChangeNickname = (e) =>{
    // console.log("onChange 이벤트 불러짐");
    // console.log(e.target.value);
    setNickname(e.target.value);
    const inputNickname = e.target.value;
    // console.log("들어온 값: "+ inputNickname);
    setIsNicknamechk(false);
    setIsNickname(false);

    if(inputNickname.length > 10){
      setIsNickname(false)
      setNicknameMsg("닉네임은 한글 최대 10글자까지 가능합니다!");
    } else if(!isNicknamechk){
      setIsNickname(false)
      setNicknameMsg("닉네임 중복 확인이 필요합니다!");
    }
  };

  const onBlurNickname = (e) =>{
    if(e.target.value.length === 0){
      setNicknameMsg("닉네임은 필수 항목입니다!");
    }
  };

  const onClickNickdup = () =>{
    console.log("닉네임 중복체크를 할때 들어온 값" + nickname);
    if((nickname.length !== 0) &&(nickname.length <= 10)){
      setIsNicknamechk(true);
      setIsNickname(true);
      setNicknameOkMsg("사용 가능한 닉네임 입니다!");
    }
    else{
      setIsNicknamechk(false);
      setIsNickname(false);
      setNicknameMsg("닉네임 형식을 확인 후 중복 체크를 해주세요!");
    }
  };

  const onChangePwd = () =>{};
  const onBlurPwd = () =>{};
  const onChangePwdchk = () =>{};
  const onBlurPwdchk = () =>{};
  const onChangeEmail = () =>{};
  const onBlurEmail = () =>{};
  const onChangePhonereg = () =>{};
  const onChangePhone = () =>{};
  const onBlurPhone = () =>{};
  const onChangePhonever = () =>{};
  const onBlurPhonever = () =>{};

  return(
    <div className="joinmain">
      <div className="logo">
        <Link to="/"><img src={logo} alt="개발하는 커비"/></Link>
        <Link to="/">개발하는 커비</Link>
      </div>
      <div div className="join">
        <form action="#" className="joinform">
          <div className="nicknamebox">
            <label htmlFor="nickname">닉네임</label>
            <div className="nicknameinput">
              <input type="text" value={nickname} name="nickname" id="nickname" className="nickname" 
              onChange={onChangeNickname} onBlur={onBlurNickname} placeholder="닉네임을 입력해 주세요"/>
              <button type="button" className="nickdup" onClick={onClickNickdup}>중복 확인</button>
            </div>
            {!isNickname && <span className="err">{nicknameMsg}</span>}
            {isNickname && <span className="msg">{nicknameOkMsg}</span>}
          </div>

          <div className="pwdbox">
            <label htmlFor="pwd">비밀번호</label>
            <div className="pwdinput">
              <input type="password" value={pwd} name="pwd" id="pwd" className="pwd"
              onChange={onChangePwd} onBlur={onBlurPwd} placeholder="비밀번호를 입력해 주세요"/>
            </div>
            {!isPwd && <span className="err">{pwdMsg}</span>}
            {isPwd && <span className="msg">{pwdOkMsg}</span>}
          </div>

          <div className="pwdchkbox">
            <label htmlFor="pwdchk">비밀번호 확인</label>
            <div className="pwdchkinput">
              <input type="password" value={pwdchk} name="pwdchk" id="pwdchk" className="pwdchk" 
              onChange={onChangePwdchk} onBlur={onBlurPwdchk} placeholder="비밀번호를 확인해 주세요"/>
            </div>
            {!isPwdchk && <span className="err">{pwdchkMsg}</span>}
            {isPwdchk && <span className="msg">{pwdchkOkMsg}</span>}
          </div>

          <div className="emailbox">
            <label htmlFor="email">본인 확인 이메일<span className="selection">(선택)</span></label>
            <div className="emailinput">
              <input type="email" value={email} name="email" id="email" className="email" 
              onChange={onChangeEmail} onBlur={onBlurEmail} placeholder="이메일을 입력해 주세요"/>
            </div>
            {!isEmail && <span className="err">{emailMsg}</span>}
            {isEmail && <span className="msg">{emailOkMsg}</span>}
          </div>

          <div className="phonebox">
            <label htmlFor="phone">휴대전화</label>
            <select name="phonereg" id="phonereg" className="phonereg" value={phonereg} onChange={onChangePhonereg}>
              <option value="+1">미국/캐나다 +1</option>
              <option value="+44">영국 +44</option>
              <option value="+61">호주 +61</option>
              <option value="+81">일본 +81</option>
              <option value="+82">대한민국 +82</option>
              <option value="+852">홍콩 +852</option>
            </select>

            <div className="phoneinput">
              <input type="tel" value={phone} name="phone" id="phone" className="phone" 
              onChange={onChangePhone} onBlur={onBlurPhone} placeholder="전화번호를 입력해 주세요" onkeyup="test(this)"/>
              <button className="phoneverbtn">인증번호 받기</button>
            </div>
            {!isPhone && <span className="err">{phoneMsg}</span>}
            {isPhone && <span className="msg">{phoneOkMsg}</span>}

            <div className="phoneverinput">
              <input type="text" value={phonever} name="phonevernum" id="phonevernum" className="phonevernum" 
              onChange={onChangePhonever} onBlur={onBlurPhonever} placeholder="인증번호를 입력해 주세요"/>
              <button type="button" className="vernumchk">인증번호 확인</button>
            </div>
            {!isPhonever && <span className="err">{phoneverMsg}</span>}
            {isPhonever && <span className="msg">{phoneverOkMsg}</span>}
          </div>
          {!buttonOn && <button className="regchkbtnf">가입하기</button>}
          {buttonOn && <button className="regchkbtnt">가입하기</button>}
        </form>
      </div>
    </div>
  );
};
export default Join;