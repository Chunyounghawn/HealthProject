import React, { useState, useCallback, useEffect } from "react"
import styled from "styled-components"
import { Close, DefaultImage } from "../../../../image/index.js"
import { Button } from "@mui/material"
import BoardModal from "react-modal"
import Menubar from "../Menubar.js"
import Header from "./Header.js"
import ImageUploader from "./ImageUploader.js"
import TextArea from "./TextArea.js"
import axios from "axios"

// import { jwtUtils } from "../../utils/jwtUtils"
import { toast } from "react-toastify"
// import api from "../../utils/api"
import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 790px;
  position: absolute;
  top: 100px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const AddBoardWrapper = styled.div`
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

const AddBoard = ({ isModal, setModal }) => {
  //  const token = useSelector((state) => state.Auth.token)
  //  const navigate = useNavigate()

  // ????????? ??????, ??????, ??????
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  })

  const canSubmit = useCallback(() => {
    return image.image_file !== "" && content !== "" && title !== ""
  }, [image, title, content])

  const JsonData = {
    title: `${title}`,
    content: `${content}`,
    file: `${image.image_file}`,
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
          console.log("???????????? ????????????:", response)
        })
        .catch(function(error) {
          console.log("????????????:", error)
        })

      window.alert("????????????? ?????????????????????????")
    } catch (e) {
      // ???????????? ?????? ?????? ????????? ??????
      toast.error(
        "????????????! ???????????? ???????????? ????????? ????????? ??? ????????????" + "????",
        {
          position: "top-center",
        }
      )
    }
  }, [canSubmit])

  return (
    <BoardModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Header />

          <AddBoardWrapper>
            <div className="addBoard-header">????????? ???????????? ???????</div>

            <div className="submitButton">
              {canSubmit() ? (
                <Button
                  onClick={handleSubmit}
                  className="success-button"
                  variant="outlined"
                >
                  ????????????????
                </Button>
              ) : (
                <Button
                  className="disable-button"
                  variant="outlined"
                  size="large"
                >
                  ????????? ????????? ?????? ???????????????????
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
        </ModalBody>
      </ModalContainer>
    </BoardModal>
  )
}

export default AddBoard
