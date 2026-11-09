import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeaturedCaseStudy({ study, reverse }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[0_20px_70px_rgba(0,0,0,0.18)] sm:rounded-[2.5rem] lg:rounded-[3rem]"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

            {/* FULL WIDTH HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mx-auto max-w-4xl px-5 pb-8 pt-10 text-center sm:px-8 sm:pb-10 sm:pt-14 lg:px-12 lg:pb-12"
            >
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-foreground shadow-md sm:text-xs">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    Featured case study
                </div>

                <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.045em] text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                    {study.client} — {study.role}
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {study.overview}
                </p>
            </motion.div>

            {/* IMAGE + MAIN CONTENT */}
            <div className="relative grid items-stretch gap-0 lg:grid-cols-2">

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 45 : -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex min-h-full flex-col overflow-hidden p-4 sm:p-6 lg:p-8 ${
                        reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_40%)]" />

                    {/* Image now stretches with the content column */}
                    <div className="relative min-h-[380px] flex-1 overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_25px_60px_rgba(0,0,0,0.25)] sm:min-h-[480px] lg:min-h-full lg:rounded-[2.5rem]">

                        <img
                            src={study.image}
                            alt={study.client}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        {/* Client badge */}
                        <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:px-5">
                            <p className="font-bold">{study.client}</p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-blue-200 sm:text-xs">
                                {study.industry}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* MAIN CONTENT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -45 : 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex flex-col justify-center border-border bg-secondary p-5 sm:p-7 lg:p-9 xl:p-10 ${
                        reverse
                            ? 'lg:order-1 lg:border-r'
                            : 'lg:order-2 lg:border-l'
                    }`}
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_40%)]" />

                    <div className="relative space-y-7 sm:space-y-9">

                        {/* CHALLENGE & SOLUTION */}
                        <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">

                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
                                    The challenge
                                </p>

                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    {study.challenge}
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-500/10 sm:p-6"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-500 sm:text-sm">
                                    Our solution
                                </p>

                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    {study.solution}
                                </p>
                            </motion.div>

                        </div>

                        {/* FOUR INFORMATION CARDS */}
                        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 xl:grid-cols-4">

                            {/* Services */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="h-full rounded-[1.25rem] border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                                    Services
                                </p>

                                <div className="mt-4 space-y-2">
                                    {study.services.map((service) => (
                                        <p key={service} className="text-xs leading-5 text-muted-foreground sm:text-sm">
                                            • {service}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tech stack */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="h-full rounded-[1.25rem] border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                                    Tech stack
                                </p>

                                <div className="mt-4 flex flex-wrap justify-center gap-2">
                                    {study.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground sm:text-xs"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Duration */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="h-full rounded-[1.25rem] border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                                    Duration
                                </p>

                                <p className="mt-4 text-base font-extrabold text-foreground sm:text-lg">
                                    {study.timeline}
                                </p>
                            </motion.div>

                            {/* Team size */}
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="h-full rounded-[1.25rem] border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
                                    Team size
                                </p>

                                <p className="mt-4 text-base font-extrabold leading-7 text-foreground sm:text-lg">
                                    {study.team}
                                </p>
                            </motion.div>

                        </div>

                    </div>
                </motion.div>

            </div>

            {/* SEPARATE FULL-WIDTH RESULTS & TESTIMONIAL SECTION */}
            <div className="relative border-t border-border bg-secondary/70 p-5 sm:p-7 lg:p-9">

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_40%)]" />

                <div className="relative grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">

                    {/* RESULTS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="h-full rounded-[1.5rem] border border-border bg-card p-5 shadow-sm sm:rounded-[1.75rem] sm:p-7 lg:p-8"
                    >
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
                                Results & impact
                            </p>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Measurable outcomes delivered through this project.
                            </p>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {study.metrics.map((metric, index) => (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl border border-border bg-secondary p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 sm:p-5"
                                >
                                    <p className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                                        {metric.value}
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                                        {metric.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CLIENT TESTIMONIAL */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="flex h-full flex-col justify-center rounded-[1.5rem] border border-border bg-card p-5 text-center shadow-sm sm:rounded-[1.75rem] sm:p-7 lg:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
                            Client testimonial
                        </p>

                        <p className="mt-5 text-lg font-semibold leading-8 text-foreground sm:text-xl sm:leading-9">
                            “{study.quote}”
                        </p>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
                            — {study.quoteAuthor}
                        </p>
                    </motion.div>

                </div>
            </div>

        </motion.article>
    );
}

export default FeaturedCaseStudy;