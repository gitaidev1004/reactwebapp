import React, { useState } from 'react';
import styles from '../styles/DynamicClass.module.css';
import classNames from 'classnames';
export default function DynamicClass() {
  const [active, setActive] = useState(false);
  const buttonClass = classNames(styles.btn, {
    [styles.active]: active
  });
  return (
    <button className={buttonClass} onClick={() => setActive(!active)}>
      동적 클래스 적용
    </button>
  );
}