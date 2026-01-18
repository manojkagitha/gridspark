import React from 'react';
import {
    FaChartBar,
    FaUser,
    FaRobot,
    FaCloud,
    FaCogs,
    FaFolderOpen,
    FaBolt,
    FaBrain,
} from "react-icons/fa";

export const products = [
    {
        name: "TinyKola – Restaurant AI RMS",
        description:
            "Enterprise-grade restaurant management suite powered by predictive AI. Real-time inventory forecasting, automated GST compliance, and seamless POS integration.",
        url: "https://www.tinykola.com/",
        logo: "/tinykola-logo.svg",
        badge: "🍽️ TinyKola"
    },
    {
        name: "ChecKaro Home Inspection",
        description:
            "Advanced property audit platform. Utilizing thermal imaging analysis and standardized reporting protocols for comprehensive civil and electrical inspections.",
        url: "https://checkaro.in/",
        logo: "https://checkaro.in/favicon.ico",
        badge: "🏠 ChecKaro"
    },
];

export const stats = [
    {
        label: "Active Projects",
        value: "12",
        icon: <FaChartBar className="text-[var(--color-primary)]" />,
    },
    {
        label: "Enterprise Users",
        value: "140+",
        icon: <FaUser className="text-[var(--color-primary)]" />,
    },
    {
        label: "AI Models Deployed",
        value: "7",
        icon: <FaRobot className="text-[var(--color-primary)]" />,
    },
    {
        label: "Cloud Services Active",
        value: "5",
        icon: <FaCloud className="text-[var(--color-primary)]" />,
    },
];

export const recentActivities = [
    { id: 1, text: "✔️ TinyKola v2.0 Release (Jan 2026)" },
    { id: 2, text: "✔️ ChekKaro Infrastructure Migration (Dec 2025)" },
    { id: 3, text: "✔️ Internal AI Audit Completed (Nov 2025)" },
];

export const quickLinks = [
    {
        icon: <FaCogs className="text-4xl text-[var(--color-primary)]" />,
        title: "Services",
        desc: "End-to-end engineering, systems integration, and managed cloud services.",
        link: "/solutions/services",
    },
    {
        icon: <FaFolderOpen className="text-4xl text-[var(--color-primary)]" />,
        title: "Portfolio",
        desc: "Case studies: custom AI agents, data pipelines, and ML deployments.",
        link: "/solutions/portfolio",
    },
    {
        icon: <FaBolt className="text-4xl text-[var(--color-primary)]" />,
        title: "AI Demos",
        desc: "Interactive prototypes: computer vision, chatbots, and analytics.",
        link: "/solutions/ai-demos",
    },
    {
        icon: <FaBrain className="text-4xl text-[var(--color-primary)]" />,
        title: "AI Showcase",
        desc: "Research lab: emerging tech and experimental use cases.",
        link: "/solutions/ai-showcase",
    },
];
