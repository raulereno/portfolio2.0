const defaultImg = "./assets/capturasProyectos/coming_soon.jpg";

export let tecnologies = [
  {
    name: "Javascript",
    img: "https://i0.wp.com/www.datadeckdev.com/wp-content/uploads/2021/12/javascript.png?fit=1080%2C1080&ssl=1",
  },
  {
    name: "Typescript",
    img: "https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png",
  },
  {
    name: "Angular",
    img: "https://angular.io/assets/images/logos/angular/angular.png",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    name: "NGRX",
    img: "https://ngrx.io/assets/images/badge.svg",
  },
  {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
  {
    name: "Express",
    img: "./assets/express-logo1.png",
  },
  {
    name: "Sequelize",
    img: "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
  },
  {
    name: "PostgreSQL",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
  },
  {
    name: "Mercado Pago",
    img: "https://http2.mlstatic.com/resources/frontend/landings-mp/images/mercadopago-og.jpg",
  },
  {
    name: "Nodemailer",
    img: "https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1",
  },
  {
    name: "Auth0",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Logo_de_Auth0.svg/2560px-Logo_de_Auth0.svg.png",
  },
  {
    name: "Bootstrap",
    img: "https://w7.pngwing.com/pngs/628/224/png-transparent-bootstrap-plain-wordmark-logo-icon.png",
  },
  {
    name: "Redux",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    name: "Firebase",
    img: "https://mlsb5edd0ks1.i.optimole.com/w7nRKTw-QybKXTRc/w:auto/h:auto/q:mauto/f:avif/https://keytotech.com/wp-content/uploads/2019/05/firebase.png",
  },
];

export let projects = [
  {
    id: 1,
    name: "Rentten - Alojamientos",
    link: "https://rent-ten.vercel.app/home",
    linkGithub: "https://github.com/raulereno/rent-ten",
    image: "./assets/capturasProyectos/logo_rentten-white.png",
    description:
      "Proyecto grupal final del bootcamp soyHenry en donde junto a otros 5 compañeros realizamos un proyecto dedicado a aquellas personas que buscan alquilar y/o publicar alojamientos temporarios.",
    tecnologies:
      "Angular,Typescript,NGRX,Node.js,Express,PostgreSQL        Sequelize,MercadoPago, Nodemailer,Auth0",
    tecnologiesImg: tecnologies,

    captures: [
      {
        img: "./assets/capturasProyectos/capsRent/cap_home.png",
        title: "Home",
        description: "Vista inicial del proyecto",
      },
      {
        img: "./assets/capturasProyectos/capsRent/cap_login.png",
        title: "Login",
        description: "Logueo con Auth0",
      },
      {
        img: "./assets/capturasProyectos/capsRent/cap_detail.png",
        title: "Detail",
        description: "Detalle de un alojamiento",
      },
      {
        img: "./assets/capturasProyectos/capsRent/cap_create.png",
        title: "Create",
        description: "Creación de un alojamiento",
      },
      {
        img: "./assets/capturasProyectos/capsRent/cap_perfil.png",
        title: "Perfil",
        description: "Vista del perfil de un usuario",
      },
      {
        img: "./assets/capturasProyectos/capsRent/cap_payment.png",
        title: "Pago",
        description: "Reserva de un alojamiento",
      },
    ],
  },
  {
    id: 2,
    name: "Proyecto individual Bootcamp",
    link: "https://pi-dogs-henry.netlify.app/",
    image: "./assets/capturasProyectos/pi-dogs.png",

    linkGithub: "https://github.com/raulereno/app-henry-deploy",
    description:
      "Proyecto individual realizado en el bootcamp SoyHenry donde aprendi a hacer un sitio web desde el frontend del mismo hasta el backend, donde hicimos nuesta propia base de datos con SQL",
    tecnologies: "Javascript,React,Redux,NodeJs,Express,Sequelize,PostgreSQL",
    tecnologiesImg: tecnologies,
    captures: [
      {
        img: "./assets/capturasProyectos/capsPI/cap_cards.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsPI/cap_loader.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsPI/cap_creacion.png",
        title: "",
        description: "",
      },
    ],
  },
  {
    id: 4,
    name: "Frontend Mentor Challenges",
    link: "https://frontendmentor-challenges-raul.netlify.app/",
    linkGithub: "https://github.com/raulereno/frontendmentor-challenges",
    image: "./assets/capturasProyectos/capsFrontendMentor/landing.png",
    description:
      "Página realizada para unir en un solo lugar todos los desafíos de FrontendMentor",
    tecnologies: "Javascript,React,Redux",
    tecnologiesImg: tecnologies,
    captures: [
      {
        img: "./assets/capturasProyectos/capsFrontendMentor/newbie_projects.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsFrontendMentor/junior_projects.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsFrontendMentor/cardDetail.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsFrontendMentor/tipCalculator.png",
        title: "",
        description: "",
      },
    ],
  },
  {
    id: 3,
    name: "Not Fungible Token Ecommerce",
    link: "https://nft-ecommerce-react.netlify.app/",
    image: "./assets/capturasProyectos/nft.png",
    linkGithub: "https://github.com/raulereno/cursoReact-desafios",
    description:
      "Proyecto final del curso de React en CoderHouse donde utilice React como tecnologia del frontend y firebase como base de datos para consultar",
    tecnologies: "Javascript,React y Firebase",
    tecnologiesImg: tecnologies,
    captures: [
      {
        img: "./assets/capturasProyectos/capsNFT/cap_nft.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsNFT/cap_nftDetail.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsNFT/cap_nftCart.png",
        title: "",
        description: "",
      },
      {
        img: "./assets/capturasProyectos/capsNFT/cap_nftPayment.png",
        title: "",
        description: "",
      },
    ],
  },

  {
    id: 5,
    name: "En progreso",
    link: "",
    image: defaultImg,
    description: "",
    tecnologies: "",
  },
];
