import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Close, SignupImg } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import SignupModal from "react-modal"

import { LoginTrue } from "../../../navigation.jsx"

import ServiceCheckForm from "./ServiceCheckForm.js"
import { useDispatch, useSelector } from "react-redux"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup" //*
import { useForm } from "react-hook-form"
import axios from "axios"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 620px;
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
`

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`

const LabelStyle = styled.label`
  position: absolute;
  top: 0%;
  left: 5%;
  font-size: 22px;
`

const InputStyle = styled.input`
  position: absolute;
  top: 18%;
  left: 5%;

  outline: none;
  padding: 10px 0px;
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  font-size: 35px;
`

const InputStyle2 = styled.input`
  position: absolute;
  top: 40%;
  left: 10%;
  font-size: 20px;
`

const RadioStyle = styled.input`
  position: absolute;
  top: 50%;
`

const IDArea = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 700px;
  height: 120px;
  background-color: white;
`

const DoubleCheckBtn = styled.button`
  position: absolute;
  top: 40%;
  right: 8%;
  width: 90px;
  height: 60px;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  /*색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
    opacity: 70%;
  }
  &:active {
    background: #1c7ed6;
  }
`

const EmailCheckBtn = styled.button`
  position: absolute;
  top: 40%;
  right: 8%;
  width: 90px;
  height: 60px;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  /*색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
    opacity: 70%;
  }
  &:active {
    background: #1c7ed6;
  }
`

const NickNameArea = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  width: 700px;
  height: 120px;
  background-color: white;
`

const PWArea = styled.div`
  position: absolute;
  top: 5%;
  left: 60%;
  width: 500px;
  height: 120px;
  background-color: white;
`

const PWCheckArea = styled.div`
  position: absolute;
  top: 30%;
  left: 60%;
  width: 500px;
  height: 120px;
  background-color: white;
`

const BirthArea = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 300px;
  height: 70px;
  background-color: white;
`

const SexArea = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  width: 200px;
  height: 70px;
  background-color: white;
  span {
    position: absolute;
    width: 200px;
    left: 60%;
    top: 50%;
    color: red;
  }
`

const EmailArea = styled.div`
  position: absolute;
  top: 63%;
  left: 5%;
  width: 700px;
  height: 110px;
  background-color: white;
`

const EmailCheckArea = styled.div`
  position: absolute;
  top: 83%;
  left: 5%;
  width: 700px;
  height: 110px;
  background-color: white;
`

const ErrMsgStyle = styled.span`
  position: absolute;
  top: 85%;
  right: 24%;
  color: red;
`

const SubmitBtn = styled.button`
  position: absolute;
  top: 104%;
  left: 41%;
  border-radius: 10px;
  background-color: #efdad7;
  width: 250px;
  height: 80px;
  transition-duration: 0.3s;
  :hover {
    transition-duration: 0.3s;
    background-color: #886f6f;
    cursor: pointer;
  }
`

const SignupText = styled.p`
  color: white;
  font-size: 50px;
  font-weight: bold;
`

const Signup = ({ isModal, setModal }) => {
  const modalTFselector = useSelector((state) => state.modalTFselector)
  const dispatch = useDispatch()

  const [email, setEmail] = useState()

  const ImageFile = `${SignupImg}`
  const setImageFile = React.useState("")

  const test = () => {
    console.log("Asdfasdf")
  }

  /*
  // 파일 저장
  const saveFileImage = (e) => {
    //    setImageFile(URL.createObjectURL(e.target.ImageFile))
  }
  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(ImageFile)
    //    setImageFile("")
  }
  const onImageChange = (e) => {
    setImageFile(e.target.ImageFile)
  }
*/

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    id: yup
      .string()
      .required()
      .max(10),
    nickname: yup
      .string()
      .required()
      .max(10),
    pw: yup
      .string()
      .min(7)
      .max(15)
      .required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref("pw"), null])
      .required(),
    birth: yup.string().required(),
    sex: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = (data) => {
    console.log(data)
  } //*

  const form = new FormData()
  form.append("name", "veneas")
  form.append("food", "cake")

  return (
    <SignupModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          borderRadius: "30px",
          backgroundColor: "#FBF8F1",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        {modalTFselector.signup ? (
          <>
            <ModalHead>
              <label htmlFor="UserImg">
                <UserIcon src={ImageFile} />
              </label>
              <input
                type="file"
                accept="image/*"
                id="UserImg"
                style={{
                  display: "none",
                }}
              />
            </ModalHead>

            <ModalBody>
              <form onSubmit={handleSubmit(submitForm)}>
                <IDArea>
                  <LabelStyle htmlFor="id">아이디</LabelStyle>
                  <InputStyle type="text" {...register("id")} />
                  <ErrMsgStyle>
                    {errors.id && "아이디 형식이 맞지 않습니다."}
                  </ErrMsgStyle>
                  <DoubleCheckBtn type="button" onClick={test}>
                    중복체크
                  </DoubleCheckBtn>
                </IDArea>

                <NickNameArea>
                  <LabelStyle htmlFor="nickname">닉네임</LabelStyle>
                  <InputStyle type="text" {...register("nickname")} />
                  <ErrMsgStyle>
                    {errors.nickname && "닉네임 형식이 맞지 않습니다."}
                  </ErrMsgStyle>
                  <DoubleCheckBtn type="button" onClick={test}>
                    중복체크
                  </DoubleCheckBtn>
                </NickNameArea>

                <PWArea>
                  <LabelStyle htmlFor="pw">비밀번호</LabelStyle>
                  <InputStyle
                    style={{ width: "450px" }}
                    type="password"
                    {...register("pw")}
                  />
                  <ErrMsgStyle style={{ right: "6%" }}>
                    {errors.pw && "비밀번호 형식이 맞지 않습니다."}
                  </ErrMsgStyle>
                </PWArea>

                <PWCheckArea>
                  <LabelStyle htmlFor="checkPw">비밀번호 확인</LabelStyle>
                  <InputStyle
                    style={{ width: "450px" }}
                    type="password"
                    {...register("checkPw")}
                  />
                  <ErrMsgStyle style={{ right: "6%" }}>
                    {errors.checkPw && "비밀번호가 맞지 않습니다."}
                  </ErrMsgStyle>
                </PWCheckArea>

                <BirthArea>
                  <LabelStyle style={{ left: "10%" }} htmlFor="birth">
                    생년월일
                  </LabelStyle>
                  <InputStyle2 type="date" {...register("birth")} />
                  <LabelStyle style={{ left: "10%", color: "red" }}>
                    {errors.birth && "생년월일"}
                  </LabelStyle>
                </BirthArea>

                <SexArea>
                  <LabelStyle style={{ left: "5%" }} htmlFor="sex">
                    남
                  </LabelStyle>
                  <RadioStyle
                    style={{ left: "5%" }}
                    type="radio"
                    name="sex"
                    value="male"
                    {...register("sex")}
                  />
                  <LabelStyle style={{ left: "30%" }} htmlFor="sex">
                    여
                  </LabelStyle>
                  <RadioStyle
                    style={{ left: "30%" }}
                    type="radio"
                    name="sex"
                    value="female"
                    {...register("sex")}
                  />
                  <span>{errors.sex && "성별을 체크해주세요."}</span>
                </SexArea>

                <EmailArea>
                  <LabelStyle htmlFor="email">이메일</LabelStyle>
                  <InputStyle
                    onKeyUp={(e) => setEmail(e.target.value)}
                    type="text"
                    {...register("email")}
                  />
                  <ErrMsgStyle>
                    {errors.email && "이메일 형식이 맞지 않습니다."}
                  </ErrMsgStyle>
                  <DoubleCheckBtn type="button" onClick={test}>
                    인증번호 전송
                  </DoubleCheckBtn>
                </EmailArea>

                <EmailCheckArea>
                  <LabelStyle htmlFor="emailCheck">이메일 확인</LabelStyle>
                  <InputStyle type="text" />
                  <ErrMsgStyle>
                    {errors.email && "인증번호가 맞지 않습니다."}
                  </ErrMsgStyle>
                  <EmailCheckBtn type="button" onClick={test}>
                    인증확인
                  </EmailCheckBtn>
                </EmailCheckArea>

                <SubmitBtn type="submit">
                  <SignupText>가입하기</SignupText>
                </SubmitBtn>
              </form>
            </ModalBody>
          </>
        ) : (
          <ServiceCheckForm />
        )}
      </ModalContainer>
    </SignupModal>
  )
}

export default Signup
