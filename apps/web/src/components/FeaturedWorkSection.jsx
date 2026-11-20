
import { useMemo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    BarChart3,
    Code2,
    MonitorPlay,
    Sparkles,
    Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProjects = [
    {
        title: 'Nexus SaaS Growth Platform',
        client: 'Nexus Labs',
        industry: 'SaaS & Technology',
        overview:
            'A full-funnel digital growth system that drove qualified demo requests and established Nexus Labs as the authority in their market.',
        problem:
            'Nexus Labs needed a premium digital presence that communicated product value clearly while building a high-converting lead pipeline.',
        solution:
            'We rebuilt the brand system, redesigned the product site, and deployed an integrated SEO and paid media strategy with AI-assisted lead scoring.',
        results: [
            { label: 'Demo requests', value: '+127%' },
            { label: 'Organic traffic', value: '+84%' },
            { label: 'Trial-to-paid rate', value: '+41%' },
        ],
        technology: ['Next.js', 'HubSpot', 'Tailwind', 'Figma'],
        timeline: '16 weeks',
        accent: 'from-foreground via-fuchsia-500 to-violet-500',
        phoneAccent: 'bg-white/5 backdrop-blur-md',
        tabletAccent: 'bg-white/5 backdrop-blur-md',
        laptopAccent: 'bg-slate-950 border-slate-800',
    },
    {
        title: 'Apex Commerce Suite',
        client: 'Apex Commerce',
        industry: 'E-Commerce',
        overview:
            'A conversion-first storefront experience built for premium products, fast checkout, and higher average order value.',
        problem:
            'The brand needed a polished digital shopfront that reflected its premium positioning while optimizing checkout efficiency and paid media ROI.',
        solution:
            'We created a flexible commerce system with immersive product storytelling, smart cart recovery flows, and data-driven Google & Meta ad campaigns.',
        results: [
            { label: 'Revenue growth', value: '+89%' },
            { label: 'Paid ROAS', value: '+55%' },
            { label: 'Avg. order value', value: '+33%' },
        ],
        technology: ['Shopify', 'GSAP', 'Klaviyo', 'Contentful'],
        timeline: '10 weeks',
        accent: 'from-fuchsia-500 via-violet-500 to-fuchsia-500',
        phoneAccent: 'bg-white/5 backdrop-blur-md',
        tabletAccent: 'bg-white/5 backdrop-blur-md',
        laptopAccent: 'bg-slate-950 border-slate-800',
    },
    {
        title: 'Orion AI Automation System',
        client: 'Orion Digital',
        industry: 'AI & Automation',
        overview:
            'An AI-powered automation ecosystem connecting CRM, email, and analytics to eliminate manual work and accelerate revenue growth.',
        problem:
            'Orion Digital was losing deals to slow follow-up, disconnected tools, and manual data entry that consumed 14+ hours per rep each week.',
        solution:
            'We built an intelligent automation layer with AI lead routing, 24/7 nurture flows, and a real-time analytics dashboard that tracks the full pipeline.',
        results: [
            { label: 'Pipeline velocity', value: '+61%' },
            { label: 'Hours saved/week', value: '14hrs' },
            { label: 'Revenue pipeline', value: '+39%' },
        ],
        technology: ['HubSpot', 'Zapier', 'Vercel', 'Tailwind'],
        timeline: '12 weeks',
        accent: 'from-emerald-400 via-foreground to-slate-400',
        phoneAccent: 'bg-white/5 backdrop-blur-md',
        tabletAccent: 'bg-white/5 backdrop-blur-md',
        laptopAccent: 'bg-slate-950 border-slate-800',
    },
];

function FeaturedWorkSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeProject = useMemo(
        () => featuredProjects[activeIndex],
        [activeIndex]
    );

    const progress = `${Math.round(
        ((activeIndex + 1) / featuredProjects.length) * 100
    )}%`;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(
                (current) => (current + 1) % featuredProjects.length
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="featured-work"
            className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 45, 0],
                        y: [0, -35, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
                />

                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1400px]">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 55, filter: 'blur(10px)' }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-10 flex flex-col items-center gap-6 text-center sm:mb-14"
                >
                    <div className="mx-auto max-w-4xl space-y-4">
                        <motion.p
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400 sm:text-sm sm:tracking-[0.35em]"
                        >
                            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                            Featured work
                            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.85, delay: 0.2 }}
                            className="text-3xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl xl:text-[3.1rem]"
                        >
                            One cinematic project at a time designed for{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                premium growth
                            </span>
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Main Project Layout */}

                {/* PROJECT SHOWCASE HEADING */}
                <div className="flex flex-wrap items-end justify-between gap-5 ">


                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 mt-12">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                        <span className="text-xs font-semibold text-gray-300 ">
                            Scroll to Explore Projects
                        </span>
                    </div>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-2 xl:gap-12">

                    {/* LEFT: Project Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative min-w-0 lg:mt-8"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.45 }}
                                className="relative"
                            >
                                {/* Project Header */}
                                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                                            Project Preview
                                        </p>

                                        <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                                            {activeProject.title}
                                        </h3>
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-gray-300">
                                        {activeProject.industry}
                                    </span>
                                </div>

                                {/* PROJECT PROGRESS INDICATOR */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-center justify-between">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                            Project Progress
                                        </p>

                                        <p className="text-sm font-bold text-white">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-blue-600">
                                                    {String(activeIndex + 1).padStart(2, "0")}
                                                </span>

                                                <div className="flex flex-1 gap-1.5">
                                                    {featuredProjects.map((project, index) => (
                                                        <div
                                                            key={project.title}
                                                            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${index === activeIndex
                                                                ? "bg-blue-500"
                                                                : "bg-slate-200"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>

                                                <span className="text-sm font-semibold text-slate-400">
                                                    {String(featuredProjects.length).padStart(2, "0")}
                                                </span>
                                            </div>
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        {featuredProjects.map((project, index) => (
                                            <div
                                                key={project.title}
                                                className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                                            >
                                                <motion.div
                                                    className={`h-full rounded-full bg-gradient-to-r ${project.accent}`}
                                                    animate={{
                                                        width: activeIndex === index ? '100%' : '0%',
                                                    }}
                                                    transition={{ duration: 0.45 }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Laptop Preview */}
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/20">
                                    <div className={`h-[3px] w-full bg-gradient-to-r ${activeProject.accent}`} />

                                    {/* Browser Bar */}
                                    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                                        <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.06]" />
                                    </div>

                                    {/* Screen Content */}
                                    <div className="flex min-h-[350px] flex-col justify-between p-5 sm:min-h-[390px] sm:p-7">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                                                {activeProject.industry}
                                            </p>

                                            <h4 className="mt-4 max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                                                {activeProject.title}
                                            </h4>

                                            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
                                                {activeProject.overview}
                                            </p>

                                            {/* Key Results */}
                                            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-white/10 py-5">
                                                {activeProject.results.slice(0, 2).map((result) => (
                                                    <div key={result.label}>
                                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-xs">
                                                            {result.label}
                                                        </p>

                                                        <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                                                            {result.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technology */}
                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {activeProject.technology.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile & Tablet Information */}
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                                    {/* Mobile Experience */}
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-blue-300" />

                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                                                Mobile Experience
                                            </p>
                                        </div>

                                        <p className="text-sm font-semibold text-white">
                                            {activeProject.client}
                                        </p>

                                        <p className="mt-2 text-xs leading-6 text-gray-400">
                                            {activeProject.problem}
                                        </p>
                                    </div>

                                    {/* Tablet Experience */}
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Target className="h-4 w-4 text-violet-300" />

                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                                                Tablet Experience
                                            </p>
                                        </div>

                                        <p className="text-sm font-semibold text-white">
                                            Solution
                                        </p>

                                        <p className="mt-2 text-xs leading-6 text-gray-400">
                                            {activeProject.solution}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* RIGHT: Project Details */}
                    <div className="flex flex-col gap-6 lg:mt-8 bg-blue-900/10 backdrop-blur-md rounded-2xl border border-border shadow-lg p-8">
                        <motion.div
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="min-w-0 space-y-6"
                        >

                            {/* Project Overview */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                                    <BarChart3 className="h-4 w-4" />
                                    Project Overview
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject.client}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.35 }}
                                    >
                                        <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                                            {activeProject.client}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                                            {activeProject.overview}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Problem & Solution */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                {/* Challenge */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:bg-white/[0.055]">
                                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                                        The Challenge
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-gray-400">
                                        {activeProject.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:bg-white/[0.055]">
                                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                                        <span className="h-2 w-2 rounded-full bg-violet-400" />
                                        Our Solution
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-gray-400">
                                        {activeProject.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Project Results */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                    Project Results
                                </p>

                                <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                                    {activeProject.results.map((result) => (
                                        <div key={result.label}>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 sm:text-xs">
                                                {result.label}
                                            </p>

                                            <p className="mt-2 break-words text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                                {result.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technology & Timeline */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                {/* Technologies */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                        Technologies Used
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {activeProject.technology.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-blue-400/40 hover:text-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                        Project Timeline
                                    </p>

                                    <p className="mt-4 text-2xl font-extrabold text-white">
                                        {activeProject.timeline}
                                    </p>
                                </div>
                            </div>

                        </motion.div>


                    </div>
                </div>



                {/* Project Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-10 space-y-5 sm:mt-14"
                >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                            <span className="h-[2px] w-6 rounded-full bg-violet-400" />
                            Switch project
                        </p>

                        <p className="text-sm font-bold text-white">
                            Progress{' '}
                            <span className="text-blue-400">
                                {progress}
                            </span>
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <motion.button
                                key={project.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                whileHover={{
                                    y: -6,
                                    scale: 1.015,
                                }}
                                whileTap={{ scale: 0.97 }}
                                className={`group relative overflow-hidden rounded-[22px] border p-5 text-left transition-all duration-500 ${index === activeIndex
                                    ? 'border-blue-400/40 bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-white/[0.04] shadow-lg shadow-blue-500/10 ring-1 ring-blue-400/20'
                                    : 'border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.07]'
                                    }`}
                            >
                                {index === activeIndex && (
                                    <motion.div
                                        layoutId="active-project-indicator"
                                        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400"
                                        transition={{ duration: 0.35 }}
                                    />
                                )}

                                <div className="flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-white sm:text-base">
                                            {project.client}
                                        </p>

                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
                                            {project.industry}
                                        </p>
                                    </div>

                                    <motion.div
                                        animate={
                                            index === activeIndex
                                                ? { scale: [1, 1.25, 1] }
                                                : { scale: 1 }
                                        }
                                        transition={{
                                            duration: 1.5,
                                            repeat:
                                                index === activeIndex
                                                    ? Infinity
                                                    : 0,
                                        }}
                                        className={`h-3 w-3 shrink-0 rounded-full bg-gradient-to-r ${project.accent} ${index === activeIndex
                                            ? 'shadow-[0_0_14px_rgba(96,165,250,0.7)]'
                                            : ''
                                            }`}
                                    />
                                </div>

                                <p className="mt-4 line-clamp-2 text-xs leading-6 text-gray-400 sm:text-sm">
                                    {project.overview}
                                </p>

                                {/* <div className="mt-4 flex items-center justify-between">
                                    <span
                                        className={`text-xs font-bold transition-colors ${
                                            index === activeIndex
                                                ? 'text-blue-300'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {index === activeIndex
                                            ? 'Currently viewing'
                                            : 'View project'}
                                    </span>

                                    <span className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-300">
                                        →
                                    </span>
                                </div> */}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedWorkSection;