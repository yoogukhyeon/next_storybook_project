import React, { useState, useCallback } from 'react';

const useInput = (initialValues: any) => {
  const [values, setValues] = useState<any>(initialValues);

  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onReset = useCallback(() => setValues(initialValues), [initialValues]);

  return { values, onChange, onReset, setValues };
};

export default useInput;
