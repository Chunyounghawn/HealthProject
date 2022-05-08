import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

import styled from "styled-components"

const Container = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
`

const Message = styled.div`
  position: absolute;
  top: 15%;
  left: 42%;
  font-size: 40px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

const Questions = styled.div`
  width: 400px;
  height: 100px;
  background-color: gray;
  position: absolute;
  top: 25%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  font-family: serif;
`

const Answer = styled.div`
  width: 400px;
  height: 200px;
  background-color: orange;
  position: absolute;
  top: 40%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 60px;
  font-family: serif;
`

const Inquiry = styled.div`
  width: 1400px;
  height: 200px;
  background-color: gray;
  color: #fff;
  position: absolute;
  bottom: 10%;
  left: 10%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const btn = styled.div`
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &:hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`

const Inquiry_btn = styled(btn)`
  position: absolute;
  bottom: 12%;
  left: 45%;
`
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

function QuestionSection() {
  return (
    <div className="section">
      <Container>
        <Message>자주 묻는 질문</Message>

        <Swiper
          style={{
            width: "1700px",
            height: "600px",
            position: "absolute",
            top: "15%",
            left: "1%",
          }}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <Questions>로그인은 어디서 하나요?</Questions>
            <Answer>오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.</Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>내 정보는 어디서 확인할 수 있나요?</Questions>
            <Answer>오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.</Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>캘린더 수정은 어떻게 하나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.
            </Answer>
          </SwiperSlide>

          <SwiperSlide>
            <Questions>공지사항은 어디에 있나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 공지사항 확인 가능 합니다.
            </Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>챌린지 참여는 어떻게 하나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 챌린지 참여 가능 합니다.
            </Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>이 웹 사이트에서는 무엇을 제공하나요?</Questions>
            <Answer>
              저희 웹 사이트에서는 건강 및 헬스 관련 정보들을 제공 합니다.
            </Answer>
          </SwiperSlide>
        </Swiper>

        <Inquiry>
          자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을 클릭하여
          관리자에게 직접 문의 해주세요.
        </Inquiry>
        <Inquiry_btn>관리자에게 문의</Inquiry_btn>
      </Container>
    </div>
  )
}

export default QuestionSection
