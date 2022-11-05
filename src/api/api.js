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
  profileSelect: async function() {
    const regCmd = {
      target : localStorage.getItem("memberNum") //조회할 대상의 회원번호 날려줌
    }
    return await axios.post(BASE_URL + "ProfileSelectServlet", regCmd, HEADER);
  },
  //회원정보 조회

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
  
};
export default api;