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
        "Mi rol en este proyecto fue como Desarrollador Full Stack. Fui responsable, junto con un colega, de construir la REST API. Más tarde, trabajé con los desarrolladores de frontend para maquetar la aplicación web. Seguimos la metodología Agile Scrum, que incluía fechas límite de entrega, reuniones diarias, historias de usuarios, sprints y otras buenas prácticas de este marco de trabajo.",
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
      description: "Aunque mi perfil está enfocado en el desarrollo web, no tengo miedo de aceptar desafíos, como las prácticas de NoCountry que te conectan con un equipo interdisciplinario para mejorar las habilidades blandas y el trabajo en equipo a través de la metodología Scrum. En esta ocasión, fui responsable de crear algunas vistas con Dart y Flutter, siendo este último un marco de desarrollo móvil. Además, ayudé a mis compañeros de equipo a conectar todas las vistas con la base de datos Firebase utilizada.",
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
        "Creación de un sitio web que consume una API con información sobre razas de perros. Implementé individualmente HTML, React con Javascript, utilizando Sass para estilos, y en el backend implementé Node.js, Express, Sequelize y PostgreSQL como base de datos.",
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
        "My role in this project was as a Full Stack Developer. I was responsible, along with a colleague, for building the REST API. Later on, I worked with the frontend developers to complete the web app's layout. We followed the Agile Scrum methodology, which included delivery deadlines, daily meetings, user stories, sprints, and other good practices of this framework.",
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
      description: "Although my profile is focused on web development, I am not afraid to take on challenges, such as the NoCountry practices that connect you with an interdisciplinary team to improve soft skills and teamwork through the Scrum methodology. On this occasion, I was responsible for creating some views with Dart and Flutter, the latter being a mobile development framework. Additionally, I helped my teammates connect all the views with the Firebase database used.",
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
        "Creation of a website consuming an API with information about dog breeds. Individually implemented HTML, React with Javascript, using Sass for styling, and on the backend implemented Node.js, Express, Sequelize and PostgreSQL as the database.",
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
