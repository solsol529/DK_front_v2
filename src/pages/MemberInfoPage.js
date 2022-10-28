import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MemberInfo from "../components/MemberInfo";
import Header from "../components/Header";
import "../style/login.scss"

const MemberInfoPage = () =>{
  return(
    <div className="memberinfowrapper">
      <div className="headerwrapper">
        <Header/>
      </div>
      <MemberInfo/>
      <Footer/>
    </div>
  );
  
};
export default MemberInfoPage;