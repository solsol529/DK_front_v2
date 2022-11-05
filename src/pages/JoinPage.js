import Footer from "../components/Footer";
import Join from "../components/Join";
import { isLogin } from "../util/common";
import { Link } from "react-router-dom";

const joinPage = () =>{
  if(isLogin){
    window.location.replace("/main");
  }
  if(!!localStorage.getItem("adOk")){
    return(
      <div className="joinwrapper">
        <Join/>
        <Footer/>
      </div>
    );
  } else{
    window.location.replace("/jointerm");
    // return(
    //   <div className="joinwrapper">
    //     <div>
    //       <p>
    //       <p>유효하지 않은 접근입니다!</p>
    //       <button className="regchkbtnt">
    //         <Link to="/jointerm">회원가입 처음으로 돌아가기</Link>
    //       </button>
    //       </p>
    //     </div>
    //   <Footer/>
    // </div>
    // );
  }
};
export default joinPage;