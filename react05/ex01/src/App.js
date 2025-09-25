import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipLink from "./components/SkipLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";
import ErrorBoundary from "./ErrorBoundary";
export default function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <Header />
      <main id="main">
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={
                <ArticlePage
                  title="홈"
                  desc="React 웹 표준 프로젝트 메인 페이지"
                  ogImage="/og-image.jpg"
                />
              }
            />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </BrowserRouter>
  );
}