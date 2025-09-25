import React, { useState } from 'react';
import axios from 'axios';

export default function FileUploader() {
  const [progress, setProgress] = useState(0);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    try {
      await axios.post('/api/upload', fd, {
        onUploadProgress: (p) =>
          setProgress(Math.round((p.loaded / p.total) * 100)),
      });
      alert('업로드 완료');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <label htmlFor="file">파일 업로드</label>
      <input
        id="file"
        type="file"
        onChange={handleChange}
        aria-describedby="file-help"
      />
      <div id="file-help">업로드 진행: {progress}%</div>
    </div>
  );
}
