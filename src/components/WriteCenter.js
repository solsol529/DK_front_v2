import BoardName from "./BoardName";
import WriteDetail from "./WriteDetail";
const WriteCenter = () =>{
  return(
    <div className="writecenter">
      <BoardName name="자유게시판"/>
      <WriteDetail/>
    </div>
  );
};
export default WriteCenter;