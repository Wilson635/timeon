import { AlarmClockCheckIcon, NotebookPenIcon, TimerIcon, Wallet } from "lucide-react";
import {
    alarmSolar,
    cloudSun,
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
    notes,
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
        url: "wilson635",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "@ngahemeniw",
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
        url: "@SSIIServices",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "Wil Ly",
    },
];

export const services = [
    {
        id: "0",
        title: "Alarm",
        text: "An alarm clock is a system that emits a sound at a predetermined time. It is usually used to wake up in the morning, hence the name.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "countdown Timer",
        text: "A timer or minute counter is a device, often programmable, that measures time.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Stopwatch Timer",
        text: "Use Online Stopwatch for any timing needs, from counting down to counting up. You can also access other fun and useful timers, such as race timers, classroom timers, holiday …",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Weather note",
        text: "Hourly weather forecast from your position. Check current conditions about your position with radar, hourly, and more.",
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
        imgURL: notes,
        route: "/dashboard/notes",
        // label: "note",
    },
    {
        imgURL: alarmSolar,
        route: "/dashboard/alarm",
        // label: "Alarm",
    },
    {
        imgURL: cloudSun,
        route: "/dashboard/Weather",
        // label: "Timer",
    },
];


export const bottombarLinks = [
    {
        imgURL: homeSmile,
        route: "/dashboard",
        // label: "Home",
    },
    {
        imgURL: notes,
        route: "/dashboard/notes",
        // label: "note",
    },
    {
        imgURL: alarmSolar,
        route: "/dashboard/alarm",
        // label: "Alarm",
    },
    {
        imgURL: cloudSun,
        route: "/dashboard/Weather",
        // label: "Timer",
    },
  ];