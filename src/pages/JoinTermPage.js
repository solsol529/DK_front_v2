import { Link } from "react-router-dom";
import JoinTerm from "../components/JoinTerm";
import Footer from "../components/Footer";
const JoinTermPage = () =>{
  return(
    <div className="joinwrapper">
      <JoinTerm/>
      <Footer/>
    </div>
  );
};
export default JoinTermPage;