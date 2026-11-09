import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy.jsx';
import { featuredCaseStudies } from '@/data/featuredCaseStudies.js';
import { Play, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    const categories = useMemo(
        () => ['All', 'SaaS & Technology', 'E-Commerce', 'Real Estate', 'Finance', 'Startups', 'AI & Automation', 'Education', 'Fashion', 'Construction', 'Law Firms'],
        []
    );

    const projects = useMemo(() => featuredCaseStudies, []);

    const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

    useEffect(() => {
        const powerEase = gsap.parseEase('power3.out');
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.gsap-reveal').forEach((element) => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 32 },
                    { opacity: 1, y: 0, duration: 0.8, ease: powerEase, scrollTrigger: { trigger: element, start: 'top 90%' } }
                );
            });
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Portfolio | Webcore360</title>
                <meta
                    name="description"
                    content="Browse Webcore360 portfolio case studies with premium interactive showcases, before & after comparisons, and measurable business results."
                />
            </Helmet>

            <div className="relative overflow-x-hidden text-foreground">

                <main className="relative z-10">
        
<section className="dark text-foreground relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-36">

    {/* Animated Background Glows */}
    <motion.div
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35],
            x: [0, 25, 0],
            y: [0, 20, 0],
        }}
        transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-8%] top-0 h-[16rem] w-[16rem] rounded-full bg-blue-500/20 blur-[100px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
    />

    <motion.div
        animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -20, 0],
            y: [0, -25, 0],
        }}
        transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-10%] top-[16rem] h-[14rem] w-[14rem] rounded-full bg-violet-500/20 blur-[100px] sm:h-[24rem] sm:w-[24rem] sm:blur-[140px]"
    />

    <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10"
            >

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-4 py-2 text-xs font-bold tracking-[0.12em] text-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.2)] sm:mb-7 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                    </span>

                    <Sparkles className="h-4 w-4 text-blue-300" />
                    Interactive portfolio experience
                </motion.div>

                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 55, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-3xl font-['Manrope'] text-3xl font-extrabold leading-[1.15] tracking-[-0.045em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl"
                >
                    Portfolio case studies built to feel premium and{" "}
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="inline-block bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(59,130,246,0.2)]"
                    >
                        performance-driven.
                    </motion.span>
                </motion.h1>

                {/* Animated Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                        duration: 0.85,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl"
                >
                    Discover project showcases with large previews, before & after comparisons, device mockups, and business metrics that tell the story of real growth.
                </motion.p>

                {/* Animated Button */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
                >
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full rounded-full border-blue-400/30 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-8 text-white shadow-[0_0_22px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] sm:w-auto"
                    >
                        <Link to="/contact-us">Contact Us</Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
                initial={{ opacity: 0, x: 45, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    duration: 1,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto w-full max-w-2xl lg:max-w-none"
            >

                {/* Floating Glows */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl"
                />

                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-10 top-28 h-28 w-28 rounded-full bg-violet-400/20 blur-3xl"
                />

                {/* Main Card */}
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-[1.25rem] border border-blue-400/20 bg-card p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:rounded-[22px] sm:p-6"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_45%)]" />

                    <div className="relative grid gap-4">

                        {/* Featured Result */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="rounded-[1.25rem] border border-border bg-muted p-4 shadow-lg sm:rounded-[1.75rem] sm:p-5"
                        >
                            <p className="text-xs font-semibold text-foreground sm:text-sm">
                                Featured result
                            </p>

                            <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:mt-3 sm:text-3xl">
                                +150% organic growth
                            </p>

                            <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                                from targeted SEO strategies.
                            </p>
                        </motion.div>

                        {/* Project Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="overflow-hidden rounded-[1.25rem] border border-border bg-muted p-4 sm:rounded-[1.75rem] sm:p-5"
                        >
                            <p className="text-xs font-bold tracking-wide text-violet-700 dark:text-violet-300 sm:text-sm">
                                Project Highlights
                            </p>

                            <div className="mt-4 grid grid-cols-3 items-center gap-2 sm:flex sm:gap-3">

                                {/* Desktop Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.7, delay: 0.45 }}
                                    whileHover={{ scale: 1.06, y: -5 }}
                                    className="group relative h-20 w-full shrink-0 overflow-hidden rounded-3xl border border-border bg-secondary sm:w-28"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
                                        alt="Desktop preview"
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>

                                {/* Mobile Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                    whileHover={{ scale: 1.06, y: -5 }}
                                    className="group relative h-16 w-full shrink-0 overflow-hidden rounded-[22px] border border-border bg-secondary sm:h-20 sm:w-14"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=150&q=80"
                                        alt="Mobile preview"
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>

                                {/* Dashboard Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.7, delay: 0.75 }}
                                    whileHover={{ scale: 1.04, y: -5 }}
                                    className="group relative col-span-1 flex h-20 w-full shrink-0 flex-1 flex-col justify-between overflow-hidden rounded-[22px] border border-border bg-slate-950 p-2 sm:h-20 sm:p-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                                        alt="Dashboard preview"
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="relative z-10 flex h-full flex-col justify-between">
                                        <div className="h-1.5 w-12 rounded-full bg-white/30 sm:w-20" />

                                        <div className="mt-2 flex h-7 w-full items-center justify-center rounded-[14px] border border-border/50 bg-white/10 px-1 sm:h-10 sm:rounded-[22px] sm:px-3">
                                            <span className="truncate text-[9px] font-medium tracking-wide text-white/90 sm:text-[11px]">
                                                Dashboard
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    </div>
</section>


                   
<section
    id="portfolio"
    className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32"
>
    {/* Background Glow */}
    <motion.div
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]"
    />

    <motion.div
        animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]"
    />

    <div className="relative mx-auto max-w-[1400px]">

        {/* Heading & Categories */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <motion.div
                initial={{ opacity: 0, y: 55, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-3xl"
            >
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-sm font-extrabold uppercase tracking-[0.35em] text-blue-500"
                >
                    Portfolio
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-4 font-['Manrope'] text-3xl font-extrabold leading-[1.15] tracking-[-0.045em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    Case studies with premium previews and{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                        measurable results.
                    </span>
                </motion.h2>
            </motion.div>

            {/* Category Filters */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-nowrap gap-2 overflow-x-auto pb-3 lg:flex-wrap lg:justify-end lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        type="button"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.04,
                        }}
                        whileHover={{
                            y: -3,
                            scale: 1.04,
                        }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setActiveCategory(category)}
                        className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:px-5 sm:text-sm ${
                            activeCategory === category
                                ? 'border-blue-500/40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_5px_22px_rgba(59,130,246,0.3)]'
                                : 'border-border bg-muted text-muted-foreground hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-foreground'
                        }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>
        </div>

        {/* Case Studies */}
        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14">

            {filteredProjects.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: '-80px' }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[22px] border border-border bg-muted p-8 text-center text-muted-foreground shadow-lg sm:p-12"
                >
                    No case studies match this category yet.
                </motion.div>
            ) : (
                filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{
                            opacity: 0,
                            y: 65,
                            scale: 0.96,
                            filter: "blur(6px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        viewport={{
                            once: false,
                            amount: 0.12,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <FeaturedCaseStudy
                            study={project}
                            reverse={index % 2 === 1}
                        />
                    </motion.div>
                ))
            )}

        </div>
    </div>
</section>

                </main>

            </div>
        </>
    );
}

export default PortfolioPage;
