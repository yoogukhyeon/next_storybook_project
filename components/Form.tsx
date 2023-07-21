import React from 'react';
import Button from './Button';
import { styled } from 'styled-components';

interface IProps {
  primary: boolean;
  label: string;
  onClick: () => void;
}

const Form = ({ primary = true, label, onClick }: IProps) => {
  return (
    <FormWrap onSubmit={(e) => e.preventDefault()}>
      <div className="input_box">
        <label htmlFor="email">email</label>
        <input type="email" name={'email'} id="email" />
      </div>
      <div className="input_box">
        <label htmlFor="password">password</label>
        <input type="password" name={'password'} id="password" />
      </div>
      <div className="input_box">
        <Button primary={primary} label={label} onClick={onClick} />
      </div>
    </FormWrap>
  );
};

const FormWrap = styled.form`
  .input_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    label {
      text-align: left;
      display: inline-block;
      width: 100%;
    }
  }
  input {
    outline: none;
    width: 100%;
    height: 20px;
    padding: 10px;
    border: 1px solid skyblue;
    margin: 10px;
  }
`;

export default Form;
