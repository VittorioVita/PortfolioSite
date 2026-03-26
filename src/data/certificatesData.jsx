import { FaHtml5, FaReact, FaLaravel, FaAward, FaPalette, FaCertificate, FaMobileAlt } from 'react-icons/fa';

import certAulab from '../assets/Aulab.jpg';
import certReact from '../assets/ReactEdHooks.jpg';
import certAgile from '../assets/ResponsiveWebDesign.jpg';
import certHtml from '../assets/UIeWebDes.jpg'; 

export const certificatesData = [
  {
    id: 1,
    title: "Full Stack Developer",
    issuer: "Aulab Hackademy",
    date: "2024",
    desc: "Bootcamp intensivo di 6 mesi su tecnologie moderne.",
    fullDescription: "Un percorso intensivo di oltre 400 ore. Partendo dalle basi della programmazione fino al deploy di applicazioni complesse. Il corso ha coperto sia il Frontend che il Backend, culminando in un progetto finale di gruppo.",
    topics: ["PHP & Laravel", "JavaScript ES6", "Database SQL", "Metodologie Agili", "Pair Programming"],
    img: certAulab,
    color: "neon-cyan",
    icon: <FaCertificate />, 
    link: "#"
  },
    {
    id: 2,
    title: "Web Design & UI Fundamentals",
    issuer: "Accademia Web Basics",
    date: "2020",
    desc: "Basi di design, teoria del colore e tipografia per il web.",
    fullDescription: "Un corso focalizzato sull'estetica del web. Ho imparato a trasformare wireframe in interfacce utente gradevoli, comprendendo l'importanza della gerarchia visiva e dell'accessibilità.",
    topics: ["Teoria del Colore", "Typography", "Figma Basics", "User Experience (UX)", "Wireframing"],
    img: certHtml, 
    color: "neon-yellow",
    icon: <FaPalette />, 
    link: "#"
  },
  {
    id: 3,
    title: "React & Modern UI",
    issuer: "Udemy / Coursera",
    date: "2024",
    desc: "Specializzazione in React, Hooks, Redux e Framer Motion.",
    fullDescription: "Approfondimento verticale sulla libreria React. Ho imparato a gestire lo stato globale, a creare custom hooks e a ottimizzare le performance delle applicazioni Single Page.",
    topics: ["React Hooks", "Redux Toolkit", "React Router", "Performance Optimization", "Context API"],
    img: certReact,
    color: "neon-pink",
    icon: <FaReact />, 
    link: "#"
  },
  {
    id: 4,
    title: "Responsive Web Design & CSS",
    issuer: "FreeCodeCamp / W3C",
    date: "2024",
    desc: "Mastery del CSS moderno, Flexbox, Grid e Mobile First.",
    fullDescription: "Certificazione dedicata alla creazione di layout fluidi che si adattano a qualsiasi dispositivo. Focus massiccio su CSS3 avanzato, animazioni e best practices per il mobile-first.",
    topics: ["CSS Grid & Flexbox", "Media Queries", "Sass/SCSS", "Mobile First Approach", "CSS Animations"],
    img: certAgile,
    color: "neon-orange",
    icon: <FaMobileAlt />, 
    link: "#"
  }
];