import React, { useEffect, useState, useCallback, useId } from "react"
import styled from "styled-components"
import { useTodoDispatch, useTodoNextId } from "../List/BaordContext.js"
import { Button } from "@mui/material"
import ImageUploader from "./ImageUploader.js"
import TextArea from "./TextArea.js"
import { db } from "../../../../../service/firebase.js"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { UserName } from "../../Login/Login.js"

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: #ffbec3;
  border-radius: 30px;
`

const AddBoardWrapper = styled.div`
  position: relative;
  top: 0px;
  z-index: 1;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  .addBoard-header {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 50px 0;
  }
  .submitButton {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    }
    .disable-button {
      font-size: 1.1rem;
      cursor: not-allowed;
    }
    .success-button {
      font-size: 1.1rem;
    }
  }
  .addBoard-body {
    display: flex;
    margin: 20px 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const Btn = styled.button`
  border-radius: 30px;
  position: absolute;
  top: -146px;
  right: 130px;
  color: #333;
  background-color: #fff;
  p {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration-line: none;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
    flex-shrink: 0;
    margin: 0 1rem;
  }
  :hover {
    color: #333;
    background-color: pink;
    cursor: pointer;
  }
`

// export let CardCount = 0

function BoardCreate() {
  const [open, setOpen] = useState(false)
  const [boardId, setboardId] = useState(1)
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  })
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [username, setUserName] = useState("")
  const [date, setDate] = useState("")

  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  // console.log(boardId, image.preview_URL, title, content, UserName, date)

  // 현재 시간 값을 반환하는 함수
  const TodayTime = () => {
    let now = new Date() // 현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1 // 월
    let todayDate = now.getDate() // 일
    const week = ["일", "월", "화", "수", "목", "금", "토"]
    let dayOfWeek = week[now.getDay()] // 요일
    let hours = now.getHours() // 시간
    let minutes = now.getMinutes() // 분

    return (
      todayMonth +
      "월" +
      todayDate +
      "일 " +
      dayOfWeek +
      "요일 " +
      hours +
      "시" +
      minutes +
      "분"
    )
  }

  const onToggle = () => setOpen(!open)
  const onDateChange = () => setDate(TodayTime())
  const onNameChange = () => setUserName(UserName)

  const onSubmit = (e) => {
    onDateChange()
    onNameChange()
    // console.log(username)
    // console.log(date)
    dispatch({
      type: "CREATE",
      todo: {
        id: boardId,
        done: false,
        img_url: image.preview_URL,
        title: title,
        content: content,
        username: UserName,
        date: TodayTime(),
      },
    })
    setOpen(false)
    setboardId((nextId.current += 1))
    window.alert("😎등록이 완료되었습니다😎")
  }

  const canSubmit = useCallback(() => {
    return image.image_file !== "" && content !== "" && title !== ""
  }, [image, title, content])

  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([])
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "Board")

  // 유니크 id를 만들기 위한 useId(); - react 18 기능으로, 이 훅을 이렇게 사용하는게 맞고 틀린지는 모른다.
  const uniqueId = useId()
  //console.log(uniqueId)

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef)
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  const createUsers = async () => {
    onSubmit()
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(usersCollectionRef, {
      id: boardId,
      Image: image.preview_URL,
      title: title,
      content: content,
      username: username,
      date: date,
    })
  }

  /*
   const JsonData = {
     title: `${title}`,
     content: `${content}`,
     file: `${image.preview_URL}`,
   }

  const handleSubmit = useCallback(async () => {
    try {
       console.log(JSON.stringify(JsonData))
       axios({
         url: "/api/posts",
         method: "post",
          data: JsonData,
       })
         .then(function a(response) {
           console.log("서버에서 내려온값:", response)
         })
         .catch(function(error) {
           console.log("에러내용:", error)
         })

       window.alert("😎등록이 완료되었습니다😎")()
    } catch (e) {
       서버에서 받은 에러 메시지 출력
       toast.error(
         "오류발생! 이모지를 사용하면 오류가 발생할 수 있습니다" + "😭",
         {
           position: "top-center",
         }
       )
    }
  }, [canSubmit])
*/

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <AddBoardWrapper>
            <div className="addBoard-header">게시물 등록하기 🖊️</div>

            <div className="submitButton">
              {canSubmit() ? (
                <Button
                  onClick={() => {
                    createUsers()
                  }}
                  className="success-button"
                  variant="outlined"
                >
                  등록하기😃
                </Button>
              ) : (
                <Button
                  className="disable-button"
                  variant="outlined"
                  size="large"
                >
                  사진과 내용을 모두 입력하세요😭
                </Button>
              )}
            </div>

            <div className="addBoard-body">
              <ImageUploader
                setImage={setImage}
                preview_URL={image.preview_URL}
              />
              <TextArea
                setTitle={setTitle}
                setContent={setContent}
                title={title}
                content={content}
              />
            </div>
          </AddBoardWrapper>
        </InsertFormPositioner>
      )}
      <Btn onClick={onToggle} open={open}>
        <p>글쓰기</p>
      </Btn>
    </>
  )
}

export default React.memo(BoardCreate)
