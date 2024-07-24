import {
    frontend,
    backend,
    ux,
    prototyping,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    postgresql,
    rubyrails,
    graphql,
    komikult,
    leaderboard,
    math,
    movie,
    nyeusi,
    space,
    coverhunt,
    dcc,
    kelhel,
    microverse,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
];

const services = [
    {
        title: "Cloud Storage",
        icon: frontend,
    },
    {
        title: "Crypto Currency Integration",
        icon: backend,
    },
    {
        title: "Upload",
        icon: ux,
    },
    {
        title: "Downloading",
        icon: prototyping,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
];

const experiences = [
    {
        title: "Building our Utilities",
        company_name: "Dapp and Telegram BOT",
        icon: coverhunt,
        iconBg: "#333333",
        date: "March 2024 - April 2024",
    },
    {
        title: "Token Launch",
        company_name: "Token Launch at Uniswap",
        icon: microverse,
        iconBg: "#333333",
        date: "May 2024",
    },
    {
        title: "Marketing",
        company_name: "Soft marketing after Launch",
        icon: kelhel,
        iconBg: "#333333",
        date: "May 2024",
    },
    {
        title: "CMC Listing/CG Listing",
        company_name: "Applying for the Listing of CMC and CG",
        icon: dcc,
        iconBg: "#333333",
        date: "May 2024",
    },
];

const projects = [
    {
        id: "project-1",
        name: "TELEGRAM",
        description: "Connect with us on TELEGRAM",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: reactjs,
        demo: "https://t.me/etherfiles",
    },
    {
        id: "project-3",
        name: "Discord",
        description: "Connect with us on Discord",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: math,
        repo: "",
        demo: "",
    },
    {
        id: "project-2",
        name: "Dapp",
        description: "Our own dapp cloud storage integrated on telegram bot",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: leaderboard,

        demo: "https://dapp.etherfile-ai.com/",
    },

    {
        id: "project-4",
        name: "Uniswap",
        description: `Trade our ETHERFI TOKEN on Uniswap`,
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: movie,

        demo: "",
    },
    {
        id: "project-5",
        name: "ETHERSCAN",
        description: "Check our own contract on and monitor it on ETHERSCAN",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: nyeusi,
        repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
        demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
    },
];

export { services, technologies, experiences, projects };
