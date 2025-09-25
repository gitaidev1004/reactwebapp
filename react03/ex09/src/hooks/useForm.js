import { useState } from 'react';
export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };
  const resetForm = () => setValues(initialValues);
  return { values, bind: { value: values.text, name: 'text', onChange: handleChange }, reset: resetForm };
}