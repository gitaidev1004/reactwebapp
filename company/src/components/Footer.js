import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const Footer = () => (
  <footer className="bg-light border-top py-4 mt-5">
    <div className="container footer-main d-flex flex-wrap justify-content-between align-items-start gap-4">

      {/* 좌측: 로고 + 고객센터 이용안내 */}
      <div className="footer-left" style={{ minWidth: "280px" }}>
        <svg
          viewBox="0 0 356 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="189"
          height="18"
        >
          <g clipPath="url(#clip0_1989_46680)">
            <path d="M322.95 1.20651L316.65 7.50684L331.329 22.1864L337.63 15.886L322.95 1.20651Z" fill="#FC8300"></path>
            <path d="M261.43 11.7197H241.64V20.5597H261.43V11.7197Z" fill="#FC8300"></path>
            <path d="M355.28 1.21973H345.99V32.5897H355.28V1.21973Z" fill="#CC0D0D"></path>
            <path d="M315.64 1.21973H306.35V32.5897H315.64V1.21973Z" fill="#0C27C1"></path>
            <path d="M276 1.21973H266.71V32.5897H276V1.21973Z" fill="#0C27C1"></path>
            <path d="M236.35 1.21973H227.06V32.5897H236.35V1.21973Z" fill="#CC0D0D"></path>
            <path d="M295.82 1.21973H286.53V32.5897H295.82V1.21973Z" fill="#CC0D0D"></path>
            <path d="M8.75 1.21973H0V32.5897H8.75V1.21973Z" fill="black"></path>
            <path d="M113.83 10.2898C113.71 8.37977 112.09 7.14977 110.01 7.14977C108.12 7.14977 106.28 7.88977 106.28 9.74977C106.26 12.1898 109.09 12.8998 110.4 13.2898C116.41 15.0798 123.01 16.5098 123.01 23.7198C123.01 30.3798 117.39 33.7998 110.49 33.7998C103.59 33.7998 96.97 30.0498 97.22 22.6798H105.42C105.59 24.9298 107.69 26.8098 110.36 26.8098C112.33 26.8098 114.38 25.9198 114.38 23.9598C114.38 20.7198 107.93 20.8598 103.44 18.4898C99.76 16.5498 97.93 13.3898 97.97 9.71977C97.97 3.62977 103.65 0.00976562 110.12 0.00976562C117.01 0.00976562 122.19 3.92977 122.14 10.2998H113.81L113.83 10.2898Z" fill="black"></path>
            <path d="M140.84 10.2898C140.72 8.37977 139.1 7.14977 137.02 7.14977C135.13 7.14977 133.29 7.88977 133.29 9.74977C133.27 12.1898 136.1 12.8998 137.41 13.2898C143.42 15.0798 150.02 16.5098 150.02 23.7198C150.02 30.3798 144.4 33.7998 137.5 33.7998C130.6 33.7998 123.98 30.0498 124.23 22.6798H132.43C132.6 24.9298 134.7 26.8098 137.37 26.8098C139.34 26.8098 141.39 25.9198 141.39 23.9598C141.39 20.7198 134.94 20.8598 130.45 18.4898C126.77 16.5498 124.94 13.3898 124.98 9.71977C124.98 3.62977 130.66 0.00976562 137.13 0.00976562C144.02 0.00976562 149.2 3.92977 149.15 10.2998H140.82L140.84 10.2898Z" fill="black"></path>
            <path d="M160.72 26.0497V19.7197H172.69V13.4097H160.72V7.72973H176.17V1.21973H152.36V32.5797H176.57V26.0497H160.72Z" fill="black"></path>
            <path d="M95.07 1.21973H86.77V17.6997H86.3L74.21 1.21973H66.37V32.5797H74.66V15.0497H75.08L87.61 32.5797H95.07V1.21973Z" fill="black"></path>
            <path d="M12.62 20.1897H22.7V32.5797H31.3V1.21973H22.7V12.9197H12.62V20.1897Z" fill="black"></path>
            <path d="M56.75 32.5797H65.1L53.99 1.21973H43.73L32.61 32.5897H40.82L43.15 25.3197H54.43L56.75 32.5897V32.5797ZM48.62 8.77973H48.99L52.25 18.6797H45.35L48.62 8.77973Z" fill="black"></path>
            <path d="M216.53 1.21973H207.8V32.5897H216.53V1.21973Z" fill="black"></path>
            <path d="M188.54 1.21973H179.44V32.5797H187.95V13.1097H188.26L197.29 21.8297L203.32 15.5997L188.54 1.21973Z" fill="black"></path>
          </g>
          <defs>
            <clipPath id="clip0_1989_46680"><rect width="356" height="34" fill="white" /></clipPath>
          </defs>
        </svg>
        <p className="footer-title" style={{lineHeight: "5"}}>고객센터 이용안내</p>
        <p className="footer-subtitle"style={{lineHeight: "0"}}>평일 09:00 ~ 18:00, 토요일 09:00 ~ 13:00</p>
        <p className="footer-note"style={{lineHeight: "2"}}>(일요일, 공휴일 휴무)</p>
        <p className="footer-small-text" style={{lineHeight: "1.6"}}>
          ㈜한샘 대표자: 김우진 &nbsp;|&nbsp; 경기도 안산시 성곡동 665<br />
          사업자등록번호: 133-81-22865 &nbsp;|&nbsp;
          통신판매업신고: 2010-경기안산-0512<br />
          <Link to="#" className="footer-link">사업자정보확인</Link>
        </p>
      </div>

      <div className="footer-center" style={{ minWidth: "480px" }}>
        <div className="mall-inquiry mb-3">
          <p className="footer-title">
            한샘몰 문의 <span className="text-muted">&gt;</span>
          </p>
          <p className="footer-subtitle">상품, 배송, 사이트 이용문의 (1688-4945)</p>
          <Link to="/questions/create">
            <button className="btn btn-dark btn-sm mb-2">💬 1:1문의</button>
          </Link>
        </div>

        <div className="business-info mb-2">
          <span>사업자등록번호: 133-81-22865</span> &nbsp;|&nbsp; 
          <span>통신판매업신고: 2010-경기안산-0512</span> &nbsp;|&nbsp; 
          <Link to="#" className="footer-link">사업자정보확인</Link> &nbsp;|&nbsp; 
          <Link to="#" className="footer-link">개인정보보호 최고 책임자: 전무권</Link> &nbsp;|&nbsp; 
          <Link to="#" className="footer-link">한샘 매장</Link> &nbsp;|&nbsp; 
          <Link to="#" className="footer-link">위치보기</Link>
        </div>

        <p className="footer-small-text mb-2">
          KEB하나은행 구매안전서비스(채무지급보증) 서비스 가입사실 확인<br />
          고객님은 안전거래를 위해 현금결제 시 저희 쇼핑몰에서 가입한 KEB하나은행으로 구매안전서비스(채무지급보증)를 이용하실 수 있습니다.
        </p>

        <p className="footer-copy">&copy; Hanssem Co., Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
