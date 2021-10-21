import React from "react";
import "./css/footer.css";
import logo from "./images/logo.png";
const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"site-map-div"}></div>
      <div className={"introduce-div"}>
        <div className={"items-div"}>
          <div>
            <img src={logo} alt={"logo"} />
          </div>
          <div className={"footer-menu"}>
            <div>이용약관</div>
            <div>개인정보취급방침</div>
          </div>
        </div>
        <div>
          <p>
            법무법인 동주 대표 변호사: 이세환 사업자 등록번호: 128-88-01756 TEL:
            1522-3394 광고책임변호사: 이세진
          </p>
          <p>
            서울사무소 : 서울시 서초구 서초중앙로 123, 13층(서초동, 삼남빌딩)
          </p>
          <p>
            수원사무소 : 수원시 영통구 광교중앙로248번길 7-2, B동
            902-903호(하동, 원희캐슬광교)
          </p>
          <p>인천사무소 : 인천 미추홀구 학익소로 66 403-404호</p>
          <p>Copyright (c) 2017 법무법인 동주. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
