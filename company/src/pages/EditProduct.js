// src/pages/EditProduct.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../api';
import './sub.css';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    discountRate: '',
    originalPrice: '',
    category: '',
    image: null,
  });

  const [preview, setPreview] = useState('');
  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
    getProduct(id)
      .then(res => {
        const product = res.data;
        setForm({
          name: product.name,
          description: product.description || '',
          price: product.price,
          discountRate: product.discount_rate || '',
          originalPrice: product.original_price || '',
          category: product.category || '',
          image: null,
        });
        setExistingImage(product.image);
      })
      .catch(err => {
        console.error("❌ 상품 정보 불러오기 실패:", err);
        alert("상품 정보를 불러올 수 없습니다.");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setForm(prev => ({ ...prev, [name]: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
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
      const res = await fetch(`http://localhost:8003/api/products/${id}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("❌ 서버 응답:", errorData);
        throw new Error("수정 실패");
      }

      alert("✅ 수정 완료");
      navigate("/adminproducts");
    } catch (error) {
      console.error("❌ 수정 실패:", error);
      alert("수정 실패: " + error.message);
    }
  };

  return (
    <div className="form-container" style={{boxShadow:'none', paddingTop: 120 }}>
      <h2 style={{ fontWeight: 'bold', fontSize: 56, marginBottom: 50 }}>상품 수정</h2>
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
          <label>기존 이미지</label><br />
          {existingImage && !preview && <img src={existingImage} alt="기존" width={200} />}
          {preview && <img src={preview} alt="미리보기" width={200} />}
        </div>
        <div className="form-group">
          <label>이미지 변경</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-dark">수정하기</button>
      </form>
    </div>
  );
}
