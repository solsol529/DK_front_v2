import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
const Left = (props) =>{
  return(
    <div className={props.position + "left"}>
      <ProfileCard/>
    </div>
  );
};
export default Left;