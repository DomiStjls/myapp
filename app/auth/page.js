'use client'
import Styles from './Auth.module.css';
import { useState } from "react";
import { authorize, isResponseOk } from "@/app/api/api-utils"
import { endpoints } from "@/app/api/config"
import { useStore } from "@/app/store/app-store";

export default function AuthForm() {
  const authContext = useStore()
  const [authData, setAuthData] = useState({ identifier: "", password: "", name: '' });
  const [message, setMessage] = useState({ status: null, text: null });
  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = await authorize(endpoints.reg, authData);
    if (isResponseOk(userData)) {
      authContext.login(userData.user, userData.jwt)
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Что-то пошло не так!" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Создание аккаунта</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Имя</span>
          <input className={Styles['form__field-input']} name="name" onInput={handleInput} type="text" placeholder='Ivan' />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            name="identifier"
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input className={Styles['form__field-input']} name="password" onInput={handleInput} type="password" placeholder='***********' />
        </label>

      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Создать</button>
      </div>
    </form>
  )
};
