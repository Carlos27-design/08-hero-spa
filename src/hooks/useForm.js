import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [user, setUser] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setUser(initialForm);
  };

  return {
    ...user,
    user,
    onInputChange,
    onResetForm,
  };
};
