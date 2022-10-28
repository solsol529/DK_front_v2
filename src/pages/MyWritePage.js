import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberInfoMyWrite from "../components/MemberInfoMyWrite";

const MyWritePage = () =>{
  return(
    <div className="memberinfowrapper">
      <div className="headerwrapper">
        <Header/>
      </div>
      <MemberInfoMyWrite/>
      <Footer/>
    </div>
  );
};
export default MyWritePage;