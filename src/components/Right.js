import Hot from "./Hot";
const Right = (props) =>{
  return(
    <div className={props.position + "right"}>
      <Hot/>
      <Hot/>
    </div>
  );
};
export default Right;