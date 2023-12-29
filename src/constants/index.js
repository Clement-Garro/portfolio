import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    tailwindcss,
    twitter,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "FullStack",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Template",
        company_name: "Moi.Feurquoi",
        icon: twitter,
        iconBg: "#accbe1",
        date: "Novembre 2023 - Decembre 2023",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Clement-Garro',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/clement-garro-2b58ba263/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Truc bidule',
        description: 'Developper truc bidule pour aider les trucs a faire bidule',
        link: 'https://github.com/Suyano/TrucBidule',
    }
];