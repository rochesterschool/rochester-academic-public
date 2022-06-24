# Aspectos importantes de este proyecto
## Objetivo
El objetivo de esta aplicación es exponer la información de Catalogo de Asignaturas en la web, basado en el documento de Course Catalogue_2021-22. Esta aplicación esta construida usando tecnología Nextjs/Reactjs Framework.

## Estructura
La arquitectura de esta applicación Nextjs, es basada en Componentes. Pueder ver la estructura visitando el siguiente enlace:

## Stack de tecnologías
-   Reactjs (v. [16.14](https://es.reactjs.org/blog/2017/09/26/react-v16.0.html))
-   [Redux (v. ^4.1.0](https://www.npmjs.com/package/redux)) / [React-Redux (^7.2.4)](https://react-redux.js.org/)
-   HTML5 / CSS3
-   [ECMAScript](https://www.w3schools.com/js/js_es6.asp) 6 aka (JavaScript)
-   Ant Design ([v. 3.2](https://3x.ant.design/)) - Framework UI/UX
-   Axios - HTTP - API Client / Promise based HTTP client for the browser and node.js (v. 0.19.2) ([Github](https://github.com/axios/axios) / [NPM](https://www.npmjs.com/package/axios))
-   react-google-maps - Google Map Component
-   [moment.js - Date time manipulation library (v. 2.24)](https://momentjs.com/)
-   Nodejs [v.12](https://nodejs.org/es/download/releases/) ([descargar aquí](https://nodejs.org/es/download/releases/))

### Conozca más tecnologías implementada visitando el siguiente enlace
[https://github.com/rochesterschool/webapp-enrollment-app/blob/master/package.json](https://github.com/rochesterschool/webapp-enrollment-app/blob/master/package.json)

<aside> 🚨 Importante:

-   Si usted esta leyendo este documento técnico, el autor asume, que usted es una persona que cuenta con los conocimientos y competencias técnicas necesarias para replicar, desplegar, o probar este proyecto en su entorno de desarrollo controlado.
-   Para ejecutar, probar o desarrollar nuevas caracteristicas de esta app, debe usar la versión de la tecnología que a continuación se refiere:
</aside>

**Notal final del autor**: En mi experiencia como desarrollador de diferentes apps, experimenté con diferentes versiones de Node. Ví útil usar un gestor de versiones como **NVM** (**Node Versión Manager**) que permite cambiar entre las versiones requerida por el proyecto. ([aquí puedes encontrar los pasos para instalar](https://help.dreamhost.com/hc/es/articles/360029083351-Instalar-una-versi%C3%B3n-personalizada-de-NVM-y-Node-js)).

## Acceso al .env VAULT 
Cada proyecto para ser ejecutado necesitará el archivo `.env` el cual contiene las credenciales necesarias. En este enlace podrá ver el Repositorio Privado : .ENV VAULT el cual contiene explicativamente la información necesaria.
https://github.com/rochesterschool/env_vault#readme

# Clonar y modificar este proyecto
Use el [link](https://github.com/rochesterschool/webapp-enrollment-app.git) de este proyecto para clonar en su computadora para visualizar la estructura de archivos y acceder a los directorios. Para esto, si esta familiarizado con el uso de terminal de comandos, considere el uso de [GIT CLI](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), o [GITHUB Desktop](https://docs.github.com/es/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop) (también puede usar el cliente GIT de su preferencia).


# Información técnica sobre el proyecto # 
Este proyecto fue creado usando la estrucutra. Visite el siguiente link para más información [Create React App](https://github.com/facebook/create-react-app).

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

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
