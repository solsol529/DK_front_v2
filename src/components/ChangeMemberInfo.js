import { useState } from "react";
import { storage } from "../api/firebase"

const ChangeMemberInfo = () =>{
  const [changeProfileImg, setChangeProfileImg] = useState(false);
  const [changePwd, setChangePwd] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
    console.log(image);
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (image === "") {
      console.log("파일이 선택되지 않았습니다");
      setError("파일이 선택되지 않았습니다");
      return;
    }
    // 업로드 처리
    console.log("업로드 처리");
    const storageRef = storage.ref("images/test/"); //어떤 폴더 아래에 넣을지 설정
    const imagesRef = storageRef.child(image.name); //파일명

    console.log("파일을 업로드하는 행위");
    const upLoadTask = imagesRef.put(image);
    console.log("태스크 실행 전");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err", error);
        setError("파일 업로드에 실패했습니다." + error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl(downloadURL);
        });
      }
    );
  };

  // const [file, setFile] = useState();
  // const onFileChange = (event) => {
  //   // Updating the state
  //   setFile({ file: event.target.files[0] });
  // };
  // const onFileUpload = async () => {
  //   // Client ID
  //   const clientId = "75f78fe4bfe22bb",
  //     auth = "Client-ID " + clientId;
  
  //   // Creating an object of formData
  //   const formData = new FormData();
  
  //   // Adding our image to formData
  //   formData.append("file", file);
  
  //   // Making the post request
  //   await fetch("https://api.imgur.com/3/image", {
  //     // API Endpoint
  //     method: "POST", // HTTP Method
  //     body: formData, // Data to be sent
  //     headers: {
  //       // Setting header
  //       Authorization: auth,
  //       Accept: "application/json",
  //     },
  //   })
  //     // Handling success
  //     .then((res) => {
  //       alert("image uploaded") && console.log(res)
  //     }) 
  //     .catch((err) => alert("Failed") && console.log(err)); 
  // };

  return(
    <div className="changememberinfo">
      <p>회원정보 수정</p>
      <p onClick={()=>{setChangeProfileImg(true)}}>프로필 사진 변경</p>
      {changeProfileImg && 
        <div>
          {error && {error}}
        <form onSubmit={onSubmit}>
          <input type="file" onChange={handleImage} />
          <button onClick={onSubmit}>업로드</button>
        </form>
        {imageUrl && (
          <div>
            <img width="400px" src={imageUrl} alt="uploaded" />
          </div>
        )}
        </div>
      }
      <p>비밀번호 변경</p>
      {changePwd && <div></div>}
      <p>이메일 변경</p>
      {changeEmail && <div></div>}
    </div>
  );
};

export default ChangeMemberInfo;