import { AlarmClockCheckIcon, NotebookPenIcon, TimerIcon, Wallet } from "lucide-react";
import {
    // benefitIcon1,
    // benefitIcon2,
    // benefitIcon3,
    // benefitIcon4,
    // benefitImage2,
    // chromecast,
    // disc02,
    // discord,
    discordBlack,
    facebook,
    homeSmile,
    // figma,
    // file02,
    // framer,
    // homeSmile,
    instagram,
    // notification2,
    // notification3,
    // notification4,
    // notion,
    // photoshop,
    // plusSquare,
    // protopie,
    // raindrop,
    // recording01,
    // recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    // searchMd,
    // slack,
    // sliders04,
    telegram,
    twitter,
    // yourlogo,
} from "../assets";
import { SunIcon } from "@heroicons/react/24/solid";

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

export const services = [
    {
        id: "0",
        title: "Alarm",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Stopdown Timer",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Countdown Timer",
        text: "A timer or minute counter is a device, often programmable, for measuring time.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Weather note",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const sidebarLinks = [
    {
        imgURL: homeSmile,
        route: "/dashboard",
        // label: "Home",
    },
    {
        imgURL: homeSmile,
        route: "/explore",
        // label: "Explore",
    },
    {
        imgURL: homeSmile,
        route: "/all-users",
        // label: "note",
    },
    {
        imgURL: homeSmile,
        route: "/alarm",
        // label: "Alarm",
    },
    {
        imgURL: homeSmile,
        route: "/timerdown",
        // label: "Timer",
    },
];