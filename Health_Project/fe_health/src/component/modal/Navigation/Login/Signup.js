import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Close, SignupImg } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import SignupModal from "react-modal"

import { LoginTrue } from "../../../navigation.jsx"

import ServiceCheckForm from "./ServiceCheckForm.js"
import { useDispatch, useSelector } from "react-redux"

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; //*
import { useForm } from 'react-hook-form';

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

  background-color: blue;
`



const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`

const IDArea = styled.div`
  position: absolute;
  top:5%;
  left: 5%;
  width:700px;
  height:120px;
  background-color: purple;
`

const NickNameArea = styled.div`
  position: absolute;
  top:30%;
  left:5%;
  width:700px;
  height:120px;
  background-color: black;
`

const PWArea = styled.div`
  position: absolute;
  top: 5%;
  left: 60%;
  width: 500px;
  height: 120px;
  background-color: red;
`

const PWCheckArea = styled.div`
  position: absolute;
  top: 30%;
  left:60%;
  width: 500px;
  height: 120px;
  background-color: yellow;
`

const BirthArea = styled.div`
  position: absolute;
  top:50%;
  left:5%;
  width: 300px;
  height: 100px;
  background-color: white;
`





const SubmitBtn = styled.button`
  position: absolute;
  top: 90%;
  left: 41%;
  border-radius: 10px;
  background-color: #efdad7;

  width: 250px;
  height: 80px;
  transition-duration: 0.3s;
  :hover{
    transition-duration: 0.3s;
    background-color: #886f6f;
    cursor: pointer;
  }
`


const Signup = ({ isModal, setModal }) => {


  const modalTFselector = useSelector((state) => (state.modalTFselector))
  const dispatch = useDispatch();



  const ImageFile = `${SignupImg}`
  const setImageFile = React.useState("")

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
    email: yup.string().email().required(),
    id: yup.string().required(),
    nickname: yup.string().required(),
    pw: yup.string().min(7).max(10).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref('pw'), null])
      .required(),
    birth: yup.string().required(),
    sex: yup.string().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const submitForm = (data) => {
    console.log(data);
  }; //*


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
                  <label htmlFor="id">아이디</label>
                  <input type="text" {...register('id')} />
                  <span>{errors.id && '아이디 형식이 맞지 않습니다.'}</span>
                </IDArea>

                <NickNameArea>
                  <label htmlFor="nickname">닉네임</label>
                  <input type="text" {...register('nickname')} />
                  <span>{errors.nickname && '닉네임 형식이 맞지 않습니다.'}</span>
                </NickNameArea>

                <PWArea>
                  <label htmlFor="pw">비밀번호</label>
                  <input type="password" {...register('pw')} />
                  <span>{errors.pw && '비밀번호 형식이 맞지 않습니다.'}</span>
                </PWArea>

                <PWCheckArea>
                  <label htmlFor="checkPw">비밀번호 확인</label>
                  <input type="text" {...register('checkPw')} />
                  <span>{errors.checkPw && '비밀번호가 맞지 않습니다.'}</span>
                </PWCheckArea>

                <BirthArea>
                  <label htmlFor="birth">생년월일</label>
                  <input type="date" {...register('birth')} />
                  <span>{errors.birth && '생년월일을 입력해주세요.'}</span>
                </BirthArea>

                <label htmlFor="sex">남</label>
                <input type="radio" name="sex" value="male" {...register('sex')} />
                <label htmlFor="sex">여</label>
                <input type="radio" name="sex" value="female" {...register('sex')} />
                <span>{errors.sex && '성별을 체크해주세요.'}</span>

                <label htmlFor="email">이메일</label>
                <input type="email" {...register('email')} />
                <span>{errors.email && '이메일 형식이 맞지 않습니다.'}</span>


                <button type="submit">회원가입</button>
              </form>
            </ModalBody>

            <SubmitBtn >가입</SubmitBtn>
          </>

        ) : <ServiceCheckForm />
        }
      </ModalContainer>
    </SignupModal >
  )
}

export default Signup
