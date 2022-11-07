import commentProfileImg from "../resource/kriby_study2.png";
import { useState, useEffect } from "react";
import api from "../api/api";

const Comment = ()=>{
  const getWriteNum = window.localStorage.getItem("Detail");
  console.log(getWriteNum);
  const [comments, setComments] = useState("");

  useEffect(() => {
    const commentsData = async () => {
      try {
        const response = await api.commentsWriteDetail(getWriteNum);
        setComments(response.data);
        console.log(response.data);
      } catch(e) {
        console.log(e);
      }
    };
    commentsData();
  },[]);

  return(
    <>
    {comments && comments.map(comment => (
      <li className="commentLi">
        <p className="commentP">
          {comment.pfImg? <img className="commentPfImg" src={comment.pfImg} alt="댓글 프로필 이미지"/>:
          <img className="commentPfImg" src={commentProfileImg} alt="기본 댓글 프로필 이미지"/>}
          <span className="commentnickname">{comment.nickname}</span>
          {comment.nickname == localStorage.getItem("userNickname") &&
          <span className="commentdelete">삭제</span>}
        </p>
        <p>{comment.commentContent}</p>
        <time>{comment.writeDate}</time>
    </li>
          ))}

    </>
    
  );
};

export default Comment;