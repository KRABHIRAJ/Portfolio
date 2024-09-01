import confirmtkt from '../assets/confirmtkt.png';
import swiggy from '../assets/swiggy.png';
import netflix from '../assets/netflix.png';


export const TechStack = ['Javascript', 'React', 'React-Native', 'Redux', 'Vue', 'Tailwind']
export const experienceDetail = [
    {
        duration: 'Oct 2023 - Present',
        position:'Software Engineer',
        company: 'Vince Software India Pvt. Ltd.',
        description: 'I lead & developed contract-management app from scratch. I did R&D and found the way to host their existing applications to their own cloud application. I also documented the changes required in the existing application to achieve the same.',
        techStack: TechStack
    },
    {
        duration: 'Nov 2022 - SEP 2023',
        position:'Junior Software Engineer',
        company: 'Vince Software India Pvt. Ltd.',
        description: 'I was responsible for cleaning the code & adding new features for their web apps. I also redesigned one of their web app and make it live. Integrated the draggable feature(to drag item from one table to another) in one of their web app.',
        techStack: TechStack
    }
]


export const projectDetail = [
    {
        title: 'ConfirmTkt clone',
        githubUrl:'https://github.com/KRABHIRAJ/Train-Ticket-Booking-App',
        deployedUrl: 'https://confirmtkt.netlify.app',
        description: "I developed a food ordering web app that displays a list of restaurants, enables users to view menus, add items to a cart, and view them on the cart page. The app fetches real-time data from Swiggy's live API, uses Redux for the shopping cart, incorporates react-skeleton for shimmer effects during loading, employs lazy loading and code splitting for performance, and handles CORS issues with a Cloudflare Workers proxy",
        techStack: ["React", "Redux", "Javascript", "HTML", "CSS", "Cloudflare"],
        imageUrl: confirmtkt
    },
    {
        title: 'Foodies: A swiggy clone',
        githubUrl:'https://github.com/KRABHIRAJ/Reactify/tree/main/Codes/foodie',
        deployedUrl: 'https://suiggy.netlify.app/',
        description: "I developed a food ordering web app that displays a list of restaurants, enables users to view menus, add items to a cart, and view them on the cart page. The app fetches real-time data from Swiggy's live API, uses Redux for the shopping cart, incorporates react-skeleton for shimmer effects during loading, employs lazy loading and code splitting for performance, and handles CORS issues with a Cloudflare Workers proxy",
        techStack: ["React", "Redux", "Javascript", "HTML", "CSS", "Cloudflare"],
        imageUrl: swiggy
    },
    {
        title: 'Ripale: A netflix clone',
        githubUrl:'https://github.com/KRABHIRAJ/The-movie-app',
        deployedUrl: 'https://natefleex.netlify.app/',
        description: "I developed a food ordering web app that displays a list of restaurants, enables users to view menus, add items to a cart, and view them on the cart page. The app fetches real-time data from Swiggy's live API, uses Redux for the shopping cart, incorporates react-skeleton for shimmer effects during loading, employs lazy loading and code splitting for performance, and handles CORS issues with a Cloudflare Workers proxy",
        techStack: ["React", "Redux", "Javascript", "HTML", "CSS", "Appwrite"],
        imageUrl: netflix
    },
]