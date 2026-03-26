import { FaShoppingCart, FaUsers, FaMusic, FaHeartbeat, FaGamepad, FaRobot } from 'react-icons/fa';
import wikiDrink from "../assets/wikiDrink.png";
import toDoList from "../assets/toDoList.png";
import foodDel from "../assets/anteprima foodDEl.png";
import vape from "../assets/vape.png";
// Metti i progetti dal PIÙ RECENTE al MENO RECENTE
// La logica prenderà automaticamente i primi 4 di questa lista
export const projectsData = [
  {
    id: 1,
    title: "DRINKING PEDIA",
    desc: " un database internazionale che mette a tua disposizione, in maniera Gratuita, le ricette dei più importanti e diffusi cocktail al mondo.",
    challenge: "Mi serviva un progetto per dimostrare competenze nella ricerca di prodotti, nel fetching delle API,  nel corretto utilizzo degli Hooks e mostrare come gestisco gli errori e caricamenti.",
    solution: "Ho optato per un sito di ricerca cocktails perchè lo vedevo più adatto a coprire tutti i campi della challenge. Ho installato axios per la gestione di funzioni asincorone con conseguente useEffect per il Fetching, Utilizzato lo useState per la corretta gestione dello stato, useReducer per una maggiore legibilità e chiarezza del codice, ottimizzandone la gestione e separando le concerns ",
    tech: ["REACT", "STYLED COMPONENTS", "TAILWIND", "AXIOS", "API"],
      features: ["Error and Loading Handling", " Filtri di ricerca"],
    img: wikiDrink,
    color: "neon-cyan",
    icon: <FaShoppingCart />,
    linkLive: "https://drinkingpedia.netlify.app/",
    linkCode: "#"
  },
  {
    id: 2,
    title: "TO DO LIST",
    desc: "Lista di cose da fare avanzata",
    challenge: "dimostrare pattern moderni per gestione dello stato, side effects e performance, pronta per essere integrata con testing e CI.",
    solution: "  useState per stati locali e controlli dell interfaccia, useReducer per centralizzare le operazioni sui todo (add, toggle, remove, clear) e facilitare i test useContext per condividere lista e dispatch senza prop-drilling useEffect per sincronizzare i dati con localStorage e gestire side effects non bloccanti useCallback per memoizzare handler e ridurre render non necessari nei figli useMemo per derivare dati (filtri, summary) senza ricalcoli inutili useLayoutEffect per misurazioni DOM pre-paint (es. altezza della lista) quando serve evitare flicker",
    tech: ["REACT", "HOOKS"],
    features: ["Gestione dello stato", "side effects"],
    img: toDoList,
    color: "neon-pink",
    icon: <FaUsers />,
    linkLive: " https://vittoriovita.github.io/To-Do-List-utilizzo-react-Hooks-True/",
    linkCode: "https://github.com/VittorioVita/To-Do-List-utilizzo-react-Hooks-True"
  },
  {
    id: 3,
    title: "TOMATO FOOD DEL.",
    desc: "Tomato  – Un'applicazione web completa per la consegna di cibo a domicilio!",
    tech: ["REACT", " React Router DOM "," CSS3"],
    challenge: "L'obiettivo era creare un'applicazione frontend robusta, manutenibile e basata sulle best practice moderne.",
    solution:"Gestione dello Stato Globale con React Context: Ho centralizzato tutta la logica del carrello (aggiunta/rimozione articoli, calcolo del totale) usando la Context API. Questo ha permesso a componenti diversi, anche distanti tra loro, di comunicare e rimanere sincronizzati in modo pulito ed efficiente, senza props drilling Sistema di Filtraggio Dinamico: L'interfaccia permette agli utenti di filtrare i piatti per categoria. Ho implementato questo sistema usando il pattern Lifting State Up: lo stato del filtro vive nel componente genitore (Home) e viene condiviso tra i componenti figli (ExploreMenu per l'input e FoodDisplay per l'output), creando un flusso di dati unidirezionale e prevedibile. UI Reattiva e Rendering Condizionale: Ho fatto largo uso di rendering condizionale per creare componenti versatili, come il popup di autenticazione che gestisce sia il Login che la Registrazione in un'unica interfaccia, adattando dinamicamente i campi e i testi mostrati all'utente.",
    img: foodDel,
     features: ["Gestione dello stato", "side effects","filtri di ricerca"],
    color: "neon-yellow",
    icon: "🍅",
    linkLive: "https://vittoriovita.github.io/Tomato-Food-Del/",
    linkCode: "https://github.com/VittorioVita/Tomato-Food-Del"
  },
  {
    id: 4,
    title: "V-CLOUD",
    desc: "Gestione di un ecommerce lato frontend.",
    tech: ["REACT", "CHARTS", "HOOKS", "Tailwind CSS (Design atomico e responsive).","GitHub Pages (CI/CD automatizzata)."],
    challenge:"Creare un'esperienza d'acquisto fluida (SPA) per un catalogo hardware e liquidi complesso.",
    solution:"Dynamic & Nested Routing con React Router per percorsi SEO-friendly e navigazione gerarchica logica.Context API + useReducer per una gestione centralizzata dello stato e LocalStorage per evitare la perdita dei dati al refresh.Master Product Page (componente dinamico unico) e Asset Optimization tramite Vite per caricamenti istantanei.Implementazione di un sistema di Scroll Management per resettare la vista ad ogni cambio rotta.",

    img: vape,
    color: "neon-orange",
    icon: <FaHeartbeat />,
   linkLive: "https://vittoriovita.github.io/vape/",
    linkCode: "https://github.com/VittorioVita/vape"
  },


];