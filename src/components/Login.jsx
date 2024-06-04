/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/App.css';
import loginImage from '../assets/usuario.png'; 

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center custom-bg">
      <div className="bg-white login-container fixed-size">
        <img src={loginImage} alt="Login" className="login-image" />
        <div className="login-form">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" placeholder="Ingresar Email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" placeholder="Ingresar Contraseña" className="form-control" />
            </div>
            <button className="btn btn-success w-100">
              {registrando ? "Registrate" : "Inicia Sesion"}
            </button>
          </form>
          <h4>
            {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} 
            <button 
              onClick={() => setRegistrando(!registrando)} 
              className="btn btn-link toggle-btn"
            >
              {registrando ? "Inicia Sesion" : "Registrate"}
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;