const isLogin = !!localStorage.getItem("memberNum");

const logout = () =>{
  localStorage.removeItem("memberNum");
  window.location.replace("/");
}
export {isLogin, logout};