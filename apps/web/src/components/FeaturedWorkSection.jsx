
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
                    className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl space-y-4">
                        <motion.p
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400 sm:text-sm sm:tracking-[0.35em]"
                        >
                            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                            Featured work
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.85, delay: 0.2 }}
                            className="text-3xl font-extrabold leading-[1.12] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl xl:text-[3.6rem]"
                        >
                            One cinematic project at a time, designed for{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                premium growth.
                            </span>
                        </motion.h2>
                    </div>

                    {/* Project Progress */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="w-full max-w-[220px] space-y-3 lg:pb-2"
                    >
                        <div className="flex items-center justify-between gap-4 text-sm">
                            <span className="font-medium text-gray-400">
                                Project progress
                            </span>

                            <span className="font-bold tabular-nums text-white">
                                {activeIndex + 1} / {featuredProjects.length}
                            </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                            <motion.div
                                initial={false}
                                animate={{
                                    width: `${((activeIndex + 1) / featuredProjects.length) * 100}%`,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeInOut',
                                }}
                                className={`h-full rounded-full bg-gradient-to-r ${activeProject.accent} shadow-[0_0_15px_rgba(139,92,246,0.45)]`}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Project Layout */}
                <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1fr] xl:gap-8">

                    {/* LEFT: Project Visual Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.96 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex min-w-0 flex-col self-stretch mt-40"
                    >
                        <div className="pointer-events-none absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-blue-500/10 blur-3xl lg:block" />

                        <div className="pointer-events-none absolute -right-8 top-20 hidden h-40 w-40 rounded-full bg-violet-500/10 blur-3xl lg:block" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.title}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                    scale: 0.97,
                                    filter: 'blur(8px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    filter: 'blur(0px)',
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -25,
                                    scale: 0.98,
                                    filter: 'blur(6px)',
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.095] p-4 shadow-2xl shadow-blue-950/20 ring-1 ring-white/5 sm:rounded-[2.5rem] sm:p-6 lg:p-6 xl:p-7"
                            >
                                {/* Top Accent */}
                                <div
                                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${activeProject.accent}`}
                                />

                                <div className="grid items-center gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-5">

                                    {/* Laptop Preview */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.12,
                                        }}
                                        className="relative min-w-0 rounded-[22px] border border-white/10 bg-white/[0.035] p-3 shadow-xl sm:p-5"
                                    >
                                        <div
                                            className={`absolute inset-x-0 top-0 h-1 rounded-t-full bg-gradient-to-r ${activeProject.accent}`}
                                        />

                                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl sm:p-4">
                                            <div
                                                className={`relative h-[300px] overflow-hidden rounded-[18px] border ${activeProject.laptopAccent} shadow-2xl sm:h-[360px] lg:h-[400px]`}
                                            >
                                                <div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">

                                                    {/* Browser Bar */}
                                                    <div className="flex shrink-0 items-center gap-2 border-b border-slate-800 bg-slate-900/80 p-3">
                                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                                                        <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                                                    </div>

                                                    <div className="flex flex-1 flex-col justify-between overflow-hidden p-4 sm:p-5">
                                                        <div className="space-y-4">
                                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-xs">
                                                                {activeProject.industry}
                                                            </p>

                                                            <div className="space-y-2">
                                                                <p className="text-base font-bold text-white sm:text-xl">
                                                                    {activeProject.title}
                                                                </p>

                                                                <p className="line-clamp-2 text-xs leading-6 text-slate-400 sm:text-sm">
                                                                    {activeProject.overview}
                                                                </p>
                                                            </div>

                                                            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                                                                <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-3 sm:rounded-2xl sm:p-4">
                                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">
                                                                        {activeProject.results[0].label}
                                                                    </p>

                                                                    <p className="mt-2 text-base font-bold text-white sm:text-lg">
                                                                        {activeProject.results[0].value}
                                                                    </p>
                                                                </div>

                                                                <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-3 sm:rounded-2xl sm:p-4">
                                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">
                                                                        {activeProject.results[1].label}
                                                                    </p>

                                                                    <p className="mt-2 text-base font-bold text-white sm:text-lg">
                                                                        {activeProject.results[1].value}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-2 pt-4">
                                                            {activeProject.technology
                                                                .slice(0, 3)
                                                                .map((tech) => (
                                                                    <div
                                                                        key={tech}
                                                                        className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-2 text-center text-[10px] text-slate-300 sm:text-xs"
                                                                    >
                                                                        {tech}
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Mobile & Tablet Previews */}
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">

                                        {/* Mobile Preview */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 35 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.2,
                                            }}
                                            className={`relative overflow-hidden rounded-[22px] border border-white/10 ${activeProject.phoneAccent} p-4 shadow-xl sm:p-5`}
                                        >
                                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

                                            <div className="relative h-[230px] rounded-[18px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.025] to-transparent p-4 sm:h-[300px] lg:h-[18rem]">
                                                <div className="mb-5 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-xs">
                                                    <span>Mobile</span>
                                                    <Sparkles className="h-4 w-4 text-blue-300" />
                                                </div>

                                                <div className="space-y-3">
                                                    <p className="text-sm font-bold text-white">
                                                        {activeProject.client}
                                                    </p>

                                                    <p className="line-clamp-5 text-xs leading-6 text-gray-300">
                                                        {activeProject.problem}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Tablet Preview */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 35 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.3,
                                            }}
                                            className={`relative overflow-hidden rounded-[22px] border border-white/10 ${activeProject.tabletAccent} p-4 shadow-xl sm:p-5`}
                                        >
                                            <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />

                                            <div className="relative h-[230px] rounded-[18px] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.025] to-transparent p-4 sm:h-[300px] lg:h-[14rem]">
                                                <div className="mb-5 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-xs">
                                                    <span>Tablet</span>
                                                    <Target className="h-4 w-4 text-violet-300" />
                                                </div>

                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
                                                        Solution
                                                    </p>

                                                    <p className="line-clamp-4 text-xs leading-6 text-gray-300">
                                                        {activeProject.solution}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* RIGHT: Project Details */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                            filter: 'blur(6px)',
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: 'blur(0px)',
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="min-w-0 self-stretch space-y-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-blue-500/[0.035] p-5 shadow-2xl shadow-blue-950/20 ring-1 ring-white/5 sm:rounded-[2.5rem] sm:p-7 lg:space-y-7 lg:p-9"
                    >

                        {/* Project Overview */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/15 to-violet-500/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 shadow-lg shadow-blue-500/5 sm:text-xs sm:tracking-[0.3em]"
                            >
                                <BarChart3 className="h-4 w-4 shrink-0 text-blue-300" />
                                {activeProject.industry}
                            </motion.div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.client}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-3xl lg:text-4xl">
                                        {activeProject.client}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                                        {activeProject.overview}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Problem & Solution */}
                        <div className="grid gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1,
                                }}
                                className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.055] sm:p-6"
                            >
                                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                                    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                                    Problem
                                </p>

                                <p className="mt-4 text-sm leading-7 text-gray-400">
                                    {activeProject.problem}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2,
                                }}
                                className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.055] sm:p-6"
                            >
                                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                                    <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                    Solution
                                </p>

                                <p className="mt-4 text-sm leading-7 text-gray-400">
                                    {activeProject.solution}
                                </p>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {activeProject.results.map((result) => (
                                <motion.div
                                    key={result.label}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 25,
                                            scale: 0.95,
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        },
                                    }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ y: -5 }}
                                    className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 shadow-sm transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.3em]">
                                        {result.label}
                                    </p>

                                    <p className="mt-3 break-words text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                        {result.value}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Technology & Timeline */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-violet-400/30"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                                    Technology
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {activeProject.technology.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -4 }}
                                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-blue-400/30"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                                    Timeline
                                </p>

                                <p className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
                                    {activeProject.timeline}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
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
                                className={`group relative overflow-hidden rounded-[22px] border p-5 text-left transition-all duration-500 ${
                                    index === activeIndex
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
                                        className={`h-3 w-3 shrink-0 rounded-full bg-gradient-to-r ${project.accent} ${
                                            index === activeIndex
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