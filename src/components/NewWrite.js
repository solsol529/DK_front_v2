import { useState } from "react";
import { Link } from "react-router-dom";
import writeIcon from "../resource/kirby_icon8.png";
import WriteBox from "./WriteBox";
const NewWrite = () =>{
  const [writeAction, setWriteAction] = useState(false);
  const onClickWrite = () =>{
    setWriteAction(true);
  }
  const onDoubleClickWrite = () =>{
    setWriteAction(false);
  }
  return(
    <div className="newwrite">
      <Link href="#" className="newwriteheader" onClick={onClickWrite} onDoubleClick={onDoubleClickWrite}>
        <p>새 글을 작성해주세요!</p>
        <img src={writeIcon} alt="글쓰기아이콘"/>
      </Link>
      {writeAction && <WriteBox/>}
    </div>
  );
  
};
export default NewWrite;