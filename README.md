# 📰 NewsAdmin - Proyecto en ReactJS

NewsAdmin es una aplicación desarrollada en **ReactJS** utilizando **Vite** y **Bootstrap**, que consume las últimas 10 noticias desde una API de WordPress del sitio [fernandafamiliar.soy](https://fernandafamiliar.soy).

## 🚀 Características Principales

- 🔗 **Consumo de API WordPress:**  
  La aplicación obtiene y muestra las 10 noticias más recientes desde el endpoint:  
  `https://fernandafamiliar.soy/api/wp-json/wp/v2/posts?category=noticias&per_page=10`

- ⚙️ **Manejo de Estado y Efectos Secundarios:**  
  Uso de `useState` y `useEffect` para gestionar el estado de la aplicación y efectos de actualización.

- 💾 **Persistencia de Datos:**  
  Integración con `localStorage` para permitir que los usuarios marquen noticias como *leídas* y que esta información se mantenga entre sesiones.

- 💻 **Interfaz de Usuario Responsiva:**  
  Diseñada con **Bootstrap**, la interfaz es clara, moderna y adaptable a distintos dispositivos.

- 🔐 **Autenticación de Usuario (demo):**  
  Acceso rápido con las siguientes credenciales:  
  - Usuario: `adminx`  
  - Contraseña: `adminx`

- 📦 **Requisitos del Sistema:**  
  - Node.js versión **16**
  - No se requieren variables de entorno personalizadas

---

## ⚙️ Instalación y Uso Local

Sigue estos pasos para levantar el proyecto en tu entorno local:

# Clona el repositorio
git clone https://github.com/MarioBecerril/newsadmin.git
cd newsadmin

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
