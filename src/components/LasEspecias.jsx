/* eslint-disable no-unused-vars */
import React from "react";
import ImagenE from "../assets/especias.jpg";
import "../styles/App.css"; // Archivo de CSS para los estilos

const LasEspecias = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Columna pequeña para el texto */}
        <div className="col-md-4">
          <div className="card card-body">
            <h1 className="titulo">Las Especias</h1>
            <mark>¿Quiénes Somos?</mark>
            <p>
              Bienvenidos a Las Especias, un conjunto residencial diseñado para
              ofrecer comodidad y calidad de vida. Somos una comunidad vibrante
              y acogedora, comprometida con proporcionar un entorno seguro y
              agradable para todos nuestros residentes. En Las Especias,
              valoramos la tranquilidad y el bienestar. Nuestras instalaciones
              modernas y bien mantenidas, junto con áreas verdes y espacios
              recreativos, están pensadas para crear un ambiente donde puedas
              disfrutar de cada día. Únete a nosotros y descubre el hogar
              perfecto en Las Especias, donde cada detalle está cuidado para que
              vivas de manera plena y confortable.
            </p>
          </div>
        </div>
        {/* Columna grande para Imagen */}
        <div className="col-md-8">
          <img
            src={ImagenE}
            className="tamaño-imagen"
            alt="Imagen del conjunto residencial Las Especias"
          />
        </div>
      </div>
    </div>
  );
};

export default LasEspecias;