import React, { useState, useEffect } from 'react';
import ServiceCheckText from './ServiceCheckText';
import styled from "styled-components"

const Title = styled.p`
  position: absolute;
  top: 6%;
  left: 40%;
  
  width: 500px;
  height: 300px;
  font-size: 70px;


`

const ContextContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 6%;

  width: 1200px;
  height: 200px;

  //background-color: blue;

  font-size: 20px;
  p{
    font-weight: bold;
    span{
      color: red;
    }
  }

`

const Context1 = styled.textarea`
  position: absolute;
  top: 15%;


  width: 1195px;
  height: 130px;

  white-space: pre;

  resize:none;
`

const ServiceCheckContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 90%;

  

`

const MarketingCheckContainer = styled.div`
position: absolute;
  top: 73%;
  left: 84.5%;
`

const PPP = styled.div`
  position: absolute;
  top: 55%;
  left: 10%;

  width: 1100px;
  height: 156px;

  border: 1px solid black;
  background-color: white;

  table {
    width: 100%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border-bottom: 1px solid #444444;
    padding: 10px;
  }
  th{
    font-weight: bold;
    background-color: white;
  }
  td{
    background-color: #ecdebd;
  }
  th:first-child{
    width: 20%;
  }
  th:last-child{
    width: 50%;
  }
  
`

const SubmitBtn = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;

  width: 30px;
  height: 20px;

`


function ServiceCheckForm() {

  const [serviceCheck, setServiceCheck] = useState(false)
  const [marketingCheck, setMarketingCheck] = useState(false)

  const serviceBtnEvent = () => {
    setServiceCheck(!serviceCheck)
  }

  const marketingBtnEvent = () => {
    setMarketingCheck(!marketingCheck)
  }

  return (
    <>
      <Title>이용약관</Title>

      <ContextContainer >
        <p>이용약관 동의 <span>(필수)</span></p>
        <Context1 type="text" value={ServiceCheckText} readOnly={true} />

        <ServiceCheckContainer >
          <input type="checkbox"
            id="serviceCheck"
            checked={serviceCheck}
            onChange={serviceBtnEvent}
          />
          <label htmlFor="serviceCheck">동의합니다</label>
        </ServiceCheckContainer>
      </ContextContainer>


      {/* <Context1 type="text" value={ServiceCheckText} readOnly={true} /> */}



      <MarketingCheckContainer>
        <input type="checkbox"
          id="marketingCheck"
          checked={marketingCheck}
          onChange={marketingBtnEvent}
        />
        <label htmlFor="marketingCheck">동의합니다</label>
      </MarketingCheckContainer>




      <PPP>
        <br />
        마케팅 정보 수신 여부 및 마케팅을 위한 개인정보 수집이용을 거부하실 수 있으며,
        거부 시에도 똑닥 서비스를 이용하실 수 있으나,
        동의를 거부한 경우 각종 소식 및 이벤트 참여에 제한이 있을 수 있습니다.<br /><br />
        <table>
          <thead>
            <tr>
              <th>개인정보 수집 항목</th>
              <th>개인정보 수집 이용 목적</th>
              <th>보유 및 이용기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>이름, 휴대폰번호, 이메일, 주소</td>
              <td>- 이벤트 운영 및 광고성 정보 전송<br />- 서비스 관련 정보 전송</td>
              <td>이용자가 동의를 철회하거나, 탈퇴시까지 보유•이용</td>
            </tr>
          </tbody>
        </table>

      </PPP>


      <SubmitBtn />

    </>
  )


}



export default ServiceCheckForm;