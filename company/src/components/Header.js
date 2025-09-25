import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAccess, clearTokens, getUserInfo } from "../auth";
import Logo from "./Logo";
import "./common.css";

export default function Header() {
  const access = getAccess();
  const user = getUserInfo();
  const nav = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isLoggedIn, setIsLoggedIn] = useState(!!access);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "침실",
    "거실",
    "다이닝",
    "옷장·드레스룸",
    "키즈방",
    "학생방",
    "홈오피스",
    "홈&데코",
  ];

  const logout = () => {
    clearTokens();
    setIsLoggedIn(false);
    nav("/login");
  };

  useEffect(() => {
    setIsLoggedIn(!!getAccess());
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${isHome ? "header-overlay" : "logogo"} fixed-header`}>
      <div className="container header-container d-flex justify-content-between align-items-center py-2">
        <h4 className="mb-0 d-flex align-items-center" style={{ height: "60px" }}>
          <Link to="/" className="text-white text-decoration-none">
            <Logo
              fill="white"
              width={isHome ? 0 : 240}
              height={isHome ? 0 : 50}
              style={{
                transform: isHome ? "scale(1.2)" : "scale(1)",
                transformOrigin: "left center",
              }}
            />
          </Link>
        </h4>

        <nav className="d-flex align-items-center">
          <Link to="/notice" className="me-3 text-decoration-none text-white">공지사항</Link>
          <Link to="/dataroom" className="me-3 text-decoration-none text-white">자료실</Link>

          {/* ✅ 홈퍼니싱 드롭다운: hover 시 열림 */}
          <div className="dropdown-hover me-3">
            <Link
              to="/products"
              className="text-white text-decoration-none"
              style={{ fontSize: "1rem" }}
            >
              홈퍼니싱
            </Link>

            <ul className="dropdown-menu-hover">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat)}`}
                    className="dropdown-item"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>

          </div>


          <Link to="/questions/create" className="me-3 text-decoration-none text-white">
            1:1문의
          </Link>

          {access ? (
            <>
              {!user?.is_staff && (
                <Link to="/mypage" className="me-3 text-decoration-none text-white">
                  마이페이지
                </Link>
              )}
              {user?.is_staff && (
                <Link to="/adminusers" className="me-3 text-decoration-none text-white">
                  관리자
                </Link>
              )}
              <button className="btn btn-sm btn-outline-light" onClick={logout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="me-3 text-decoration-none text-white">로그인</Link>
              <Link to="/register" className="text-decoration-none text-white">회원가입</Link>
            </>
          )}
        </nav>
      </div>

      {/* 홈에서 로고 크게 보여줄 때 */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: isHome ? 1000 : 0,
            height: isHome ? 300 : 0,
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <Logo
            fill="white"
            width="100%"
            height="100%"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>
      </div>
    </header>
  );
}
