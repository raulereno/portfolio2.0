import { tecnologies } from "./tecnologies";

const defaultImg = "./assets/capturasProyectos/coming_soon.jpg";


export let projects = {
  es: [
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
      id: 6,
      name: "SpeakEasy",
      type:"appmobile",
      link: "https://drive.google.com/file/d/15Ylc4zan_U9Eowa9kYtmCyU-WMm9tGbF/view",
      linkGithub: "https://github.com/No-Country/c9-49-m-flutter",
      image: "./assets/capturasProyectos/speakeasy/logo-speakeasy.png",
      description: "¿Quieres practicar un idioma? ¿Interactuar con personas de todo el mundo y aprender sobre su cultura? SpeakEasy es una aplicación móvil donde los usuarios pueden conectarse con hablantes nativos de otros países con el propósito de aprender y practicar un nuevo idioma.",
      tecnologies: "Dart,Flutter y Firebase",
      tecnologiesImg: tecnologies,
      captures: [
        {
          img: "./assets/capturasProyectos/speakeasy/landing.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding1.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding2.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding3.png",
          title: "",
          description: "",
        },
        {
          img:"./assets/capturasProyectos/speakeasy/connect.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/chat.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/one_chat.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/profile.png",
          title: "",
          description: "",
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
      id: 5,
      name: "Ecommerce - Python/Django ",
      link: "https://raulereno.pythonanywhere.com/",
      linkGithub:
        "https://github.com/raulereno/cs50w_projects/tree/master/commerce",
      image: "./assets/capturasProyectos/ecommercePy.png",
      description:
        "Segundo proyecto realizado para el curso CS50w dado por la Universidad de Harvard. En esta app puedes hacer registrarte/login, crear una subasta, hacer bids, agregar comentarios y hasta tener subastas en la lista de favoritos! Una vez cerrada la subasta se mostrara el ganador y la subasta dejara de estar en la lista de activas.Puedes filtrar por categorias todas las subastas.",
      tecnologies: "Python,Django",
      tecnologiesImg: tecnologies,
      captures: [
        {
          img: "./assets/capturasProyectos/capsEcommercePy/details.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/capsEcommercePy/closedListing.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/capsEcommercePy/createListing.png",
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
      id: 7,
      name: "En progreso",
      link: "",
      image: defaultImg,
      description: "",
      tecnologies: "",
    },
  ],
  en: [
    {
      id: 1,
      name: "Rentten - Places",
      link: "https://rent-ten.vercel.app/home",
      linkGithub: "https://github.com/raulereno/rent-ten",
      image: "./assets/capturasProyectos/logo_rentten-white.png",
      description:
        "Final group project of the soyHenry bootcamp where together with 5 other classmates we developed a project dedicated to those looking to rent and/or publish temporary accommodations.",
      tecnologies:
        "Angular,Typescript,NGRX,Node.js,Express,PostgreSQL        Sequelize,MercadoPago, Nodemailer,Auth0",
      tecnologiesImg: tecnologies,

      captures: [
        {
          img: "./assets/capturasProyectos/capsRent/cap_home.png",
          title: "Home",
          description: "Initial view of the project",
        },
        {
          img: "./assets/capturasProyectos/capsRent/cap_login.png",
          title: "Login",
          description: "Login with Auth0",
        },
        {
          img: "./assets/capturasProyectos/capsRent/cap_detail.png",
          title: "Detail",
          description: "Detail of a place",
        },
        {
          img: "./assets/capturasProyectos/capsRent/cap_create.png",
          title: "Create",
          description: "Creating a place",
        },
        {
          img: "./assets/capturasProyectos/capsRent/cap_perfil.png",
          title: "Perfil",
          description: "View of a user's profile",
        },
        {
          img: "./assets/capturasProyectos/capsRent/cap_payment.png",
          title: "Pago",
          description: "Booking of a place",
        },
      ],
    },
    {
      id: 6,
      name: "SpeakEasy",
      type:"appmobile",
      link: "https://drive.google.com/file/d/15Ylc4zan_U9Eowa9kYtmCyU-WMm9tGbF/view",
      image: "./assets/capturasProyectos/speakeasy/logo-speakeasy.png",
      description: "Do you want to practice a language? Interact with people from all over the world and learn about their culture? SpeakEasy is a mobile app where users can connect with native speakers from other countries for the purpose of learning and practicing a new language.",
      tecnologies: "Dart, Flutter y Firebase",
      tecnologiesImg: tecnologies,
      captures: [
        {
          img: "./assets/capturasProyectos/speakeasy/landing.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding1.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding2.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/onboarding3.png",
          title: "",
          description: "",
        },
        {
          img:"./assets/capturasProyectos/speakeasy/connect.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/chat.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/one_chat.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/speakeasy/profile.png",
          title: "",
          description: "",
        },
        
      ],

    },
    {
      id: 2,
      name: "Individual Bootcamp project.",
      link: "https://pi-dogs-henry.netlify.app/",
      image: "./assets/capturasProyectos/pi-dogs.png",

      linkGithub: "https://github.com/raulereno/app-henry-deploy",
      description:
        "Individual project completed in the SoyHenry bootcamp where I learned to create a website from the frontend to the backend, where we made our own database with SQL.",
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
        "Page created to bring together all FrontendMentor challenges in one place.",
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
      id: 5,
      name: "Ecommerce - Python/Django ",
      link: "https://raulereno.pythonanywhere.com/",
      linkGithub:
        "https://github.com/raulereno/cs50w_projects/tree/master/commerce",
      image: "./assets/capturasProyectos/ecommercePy.png",
      description:
        "Second project done for the CS50w course given by Harvard University. In this app you can register/login, create an auction, make bids, add comments and even have auctions in the favorites list! Once the auction is closed, the winner will be shown and the auction will no longer be on the active list.You can filter by categories all the auctions.",
      tecnologies: "Python,Django",
      tecnologiesImg: tecnologies,
      captures: [
        {
          img: "./assets/capturasProyectos/capsEcommercePy/details.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/capsEcommercePy/closedListing.png",
          title: "",
          description: "",
        },
        {
          img: "./assets/capturasProyectos/capsEcommercePy/createListing.png",
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
        "Final project of the React course at CoderHouse where I used React as the frontend technology and firebase as the database for querying.",
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
      id: 7,
      name: "En progreso",
      link: "",
      image: defaultImg,
      description: "",
      tecnologies: "",
    },
  ],
};
