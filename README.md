# Aspectos importantes de este proyecto
## Objetivo
El objetivo de esta aplicación es exponer la información de Catalogo de Asignaturas en la web, basado en el documento de **[Course Catalogue_2021-22](https://docs.google.com/document/d/1PenRBM-khI1Jnk3OxL0bpJAawAFY2TPqbHExOYDMBIE/edit#heading=h.4vpp2swag09f)**. Esta aplicación esta construida usando tecnología Nextjs Framework (V.17.0.2).

## Estructura
La arquitectura de esta aplicación esta basada en Componentes. Pueden ver la estructura visitando el siguiente enlace:

## Stack de tecnologías
-   Nextjs (v. [17.0.2](https://nextjs.org/docs/getting-started))
-   HTML5 / CSS3
-   [ECMAScript](https://www.w3schools.com/js/js_es6.asp) 6 aka (JavaScript)
-   NextUI ([v. 3.2](https://nextui.org/docs/guide/getting-started)) - Framework UI/UX
-   Axios - HTTP - API Client / Promise based HTTP client for the browser and node.js (v. 0.19.2) ([Github](https://github.com/axios/axios) / [NPM](https://www.npmjs.com/package/axios))
- Nodejs [v.12](https://nodejs.org/es/download/releases/) ([descargar aquí](https://nodejs.org/es/download/releases/))
- scrape-it NPM dependency for Web Scrapping [v.5.3.2](https://www.npmjs.com/package/scrape-it)

### Conozca más tecnologías implementada visitando el siguiente enlace
[https://github.com/rochesterschool/rochester-academic-public/blob/main/package.json](https://github.com/rochesterschool/rochester-academic-public/blob/main/package.json)

<aside> 🚨 Importante:

-   Si usted esta leyendo este documento técnico, el autor asume, que usted es una persona que cuenta con los conocimientos y competencias técnicas necesarias para replicar, desplegar, o probar este proyecto en su entorno de desarrollo controlado.
-   Para ejecutar, probar o desarrollar nuevas características de esta app, debe usar la versión de la tecnología que a continuación se refiere:
</aside>

**Notal final del autor**: En mi experiencia como desarrollador de diferentes apps, experimenté con diferentes versiones de Node. Ví útil usar un gestor de versiones como **NVM** (**Node Versión Manager**) que permite cambiar entre las versiones requerida por el proyecto. ([aquí puedes encontrar los pasos para instalar](https://help.dreamhost.com/hc/es/articles/360029083351-Instalar-una-versi%C3%B3n-personalizada-de-NVM-y-Node-js)).

## Acceso al .env VAULT 
Cada proyecto para ser ejecutado necesitará el archivo `.env` el cual contiene las credenciales necesarias. En este enlace podrá ver el Repositorio Privado : .ENV VAULT el cual contiene explicativamente la información necesaria.
https://github.com/rochesterschool/env_vault#readme

# Clonar y modificar este proyecto
Use el [link](https://github.com/rochesterschool/rochester-academic-public.git) de este proyecto para clonar en su computadora para visualizar la estructura de archivos y acceder a los directorios. Para esto, si esta familiarizado con el uso de terminal de comandos, considere el uso de [GIT CLI](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), o [GITHUB Desktop](https://docs.github.com/es/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) (también puede usar el cliente GIT de su preferencia).


# Información técnica sobre el proyecto # 
Este proyecto fue creado usando la estructura. Visite el siguiente link para más información [Create React App](https://github.com/facebook/create-react-app).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
