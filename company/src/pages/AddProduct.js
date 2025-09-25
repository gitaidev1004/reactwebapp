// src/pages/AddProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api';
import './sub.css';

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    discountRate: '',
    originalPrice: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('discount_rate', form.discountRate);
    formData.append('original_price', form.originalPrice);
    formData.append('category', form.category);
    if (form.image) formData.append('image', form.image);

    try {
      const result = await createProduct(formData);
      alert("✅ 상품 등록 완료");
      navigate(`/products/${result.id}`);
    } catch (err) {
      console.error("❌ 상품 등록 실패:", err);
      alert("상품 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="form-container" style={{paddingTop:120, boxShadow:'none'}}>
      <h2 style={{fontWeight:'bold', fontSize:56, marginBottom:50}}>상품 등록</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>카테고리</label>
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">카테고리를 선택하세요</option>
            <option value="침실">침실</option>
            <option value="거실">거실</option>
            <option value="다이닝">다이닝</option>
            <option value="옷장·드레스룸">옷장·드레스룸</option>
            <option value="키즈방">키즈방</option>
            <option value="학생방">학생방</option>
            <option value="홈오피스">홈오피스</option>
            <option value="홈&데코">홈&데코</option>
          </select>
        </div>
        <div className="form-group">
          <label>상품명</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>설명</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>가격</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>정가</label>
          <input type="number" name="originalPrice" value={form.originalPrice} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>할인율 (%)</label>
          <input type="number" name="discountRate" value={form.discountRate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>이미지</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-dark">등록</button>
      </form>
    </div>
  );
}