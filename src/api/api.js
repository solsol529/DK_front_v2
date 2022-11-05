import axios from "axios";
const HEADER = 'application/json';
// const HEADER = {"Content-type" : "application/json; charset-UTF-8"};
const BASE_URL = "http://localhost:8090/developerKirby/";

const api = {
  userLogin: async function(nickname, pwd) {
    const loginObj = {
      nickname: nickname,
      pwd: pwd
    }
    return await axios.post(BASE_URL+ "LoginServlet", loginObj, HEADER);
  },
  //회원정보 조회
  memberInfo: async function() {
    const regCmd = {
      cmd : "MemberInfo", //조회는 이름만 날려주면됨
      target : localStorage.getItem("memberNum") //조회할 대상의 회원번호 날려줌
    }
    return await axios.post(BASE_URL + "MemberSelectServlet", regCmd, HEADER);
  },
  //회원탈퇴
  memberDelete: async function() {
    const regCheck = {
      target : localStorage.getItem("memberNum")
    }
    return await axios.post(BASE_URL + "MemberDeleteServlet", regCheck, HEADER);
  },
  //회원정보수정
  memberUpdate: async function(value, type, nickname) {
    const updateObj = {
      value : value,
      type : type, 
      nickname : nickname
    }
    return await axios.post(BASE_URL + "MemberUpdateServlet", updateObj, HEADER);
  },
  memberNameDup: async function(nickname) {
    const regCmd = {
      nickname : nickname
    }
    return await axios.post(BASE_URL + "MemberNameDupServlet", regCmd, HEADER);
  },
  memberPhoneReg : async function(phone) {
    const regCheck = {
      phone : phone
    }
    return await axios.post(BASE_URL + "MemberPhoneRegServlet", regCheck, HEADER);
  },
  // memberPhoneRegChk : async function(phone, regNum) {
  //   const regCheck = {
  //     phone : phone,
  //     regNum : regNum
  //   }
  //   return await axios.post(BASE_URL + "", regCheck, HEADER);
  // },
  //회원가입
  memberInsert: async function(nickname, pwd, phone, email) {
    const regCheck = {
      nickname : nickname,
      pwd : pwd,
      phone : phone,
      email : email,
      adOk : localStorage.getItem("adOk")
    }
    return await axios.post(BASE_URL + "MemberInsertServlet", regCheck, HEADER);
  },
};
export default api;