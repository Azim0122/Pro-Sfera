import React, { useState } from 'react'
import './Login.css'
function Login() {
    const [phone, setPhone] = useState('');

    const handleInputChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Обработчик логики входа/регистрации
      alert(`Submitted phone number: ${phone  }`);
    };
  return (
    <div className="login">
          <div className="auth-container">
    <div className="auth-header">
      <img src="https://id.in-pro.net/images/logo/pro_id_logo.svg" alt="PRO ID" className="logo" />
      <a href="#" className="what-is-pro-id">Что такое PRO ID ?</a>
    </div>
    
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>

<h3>
  <span>Вход с помощью </span>
  <div class="message">
    <div class="word1"> <img src="https://id.in-pro.net/images/logo/pro_id_logo_mini.svg" alt="ID" /></div>
 
  </div>
</h3>

</h2>
      <div className="input-wrapper">
        <img src="https://id.in-pro.net/images/logo/pro_id_logo_mini.svg" alt="PRO ID Icon" className="icon" />
        <input 
        
          value={phone} 
          onChange={handleInputChange} 
          placeholder="+998 (--) --- -- --" 
          required 
          className="phone-input" 
          pattern="[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
          
        />
      </div>
      <button type="submit" className="auth-button">Войти или создать PRO ID</button>
      <a href="#" className="restore-link">Восстановить PRO ID</a>
    </form><br />
    
    <div className="auth-footer">
      <p>Продолжая использовать PRO ID, <br /> я принимаю <a href="#">условия оферты</a>.</p><br />
      <p>PRO ID - ключ от всех сервисов</p>
    </div>
  </div>
    </div>
  )
}

export default Login