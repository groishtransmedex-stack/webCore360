// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, TrendingUp } from 'lucide-react';

// export default function BeforeAfter() {
//     const metrics = [
//         { label: "Qualified Leads", before: "12/mo", after: "54/mo", increase: "+350%", delay: 0.1 },
//         { label: "Conversion Rate", before: "1.2%", after: "4.8%", increase: "+300%", delay: 0.2 },
//         { label: "Customer Acquisition Cost", before: "$120", after: "$45", increase: "-62%", delay: 0.3, inverse: true },
//     ];

//     return (
//         <div className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:px-8">
//             <div className="mb-16 text-center">
//                 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">The Impact</p>
//                 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
//                     Transforming metrics into momentum.
//                 </h2>
//             </div>

//             <div className="grid gap-8 lg:grid-cols-2">
//                 {/* Before Card */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="rounded-[2rem] border border-border bg-muted/30 p-8 sm:p-12"
//                 >
//                     <div className="mb-10">
//                         <h3 className="text-2xl font-semibold text-muted-foreground">The Baseline</h3>
//                         <p className="mt-2 text-sm text-muted-foreground">Standard metrics before our digital overhaul.</p>
//                     </div>

//                     <div className="space-y-8">
//                         {metrics.map((metric, idx) => (
//                             <div key={idx}>
//                                 <div className="mb-2 flex justify-between text-sm font-medium text-muted-foreground">
//                                     <span>{metric.label}</span>
//                                     <span>{metric.before}</span>
//                                 </div>
//                                 <div className="h-2 w-full overflow-hidden rounded-full bg-border">
//                                     <div className="h-full w-[25%] bg-muted-foreground/30" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* After Card */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//                     className="gradient-border luxury-surface rounded-[2rem] bg-card p-8 sm:p-12"
//                 >
//                     <div className="mb-10 flex items-center justify-between">
//                         <div>
//                             <h3 className="text-2xl font-semibold text-foreground dark:text-white">The Webcore Effect</h3>
//                             <p className="mt-2 text-sm text-foreground dark:text-foreground">Post-launch performance acceleration.</p>
//                         </div>
//                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground">
//                             <TrendingUp className="h-6 w-6" />
//                         </div>
//                     </div>

//                     <div className="space-y-8">
//                         {metrics.map((metric, idx) => (
//                             <div key={idx}>
//                                 <div className="mb-2 flex justify-between text-sm font-medium">
//                                     <span className="text-foreground dark:text-white">{metric.label}</span>
//                                     <span className="flex items-center gap-2 text-foreground dark:text-white">
//                                         {metric.after}
//                                         <span className={`flex items-center text-xs font-bold ${metric.inverse ? 'text-emerald-400' : 'text-foreground'}`}>
//                                             {metric.increase} <ArrowUpRight className="ml-0.5 h-3 w-3" />
//                                         </span>
//                                     </span>
//                                 </div>
//                                 <div className="h-2 w-full overflow-hidden rounded-full bg-border">
//                                     <motion.div
//                                         initial={{ width: "25%" }}
//                                         whileInView={{ width: metric.inverse ? "40%" : "85%" }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 1.2, delay: 0.4 + metric.delay, ease: "easeOut" }}
//                                         className="h-full bg-gradient-to-r from-foreground to-violet-500"
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
    const metrics = [
        { label: "Qualified Leads", before: "12/mo", after: "54/mo", increase: "+350%", delay: 0.1 },
        { label: "Conversion Rate", before: "1.2%", after: "4.8%", increase: "+300%", delay: 0.2 },
        { label: "Customer Acquisition Cost", before: "$120", after: "$45", increase: "-62%", delay: 0.3, inverse: true },
    ];

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -25, 20, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]"
                />

                <motion.div
                    animate={{
                        x: [0, -35, 25, 0],
                        y: [0, 30, -20, 0],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]"
                />
            </div>

            <div className="mx-auto max-w-[1200px]">

                {/* Section Heading */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 35 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 shadow-[0_0_25px_rgba(59,130,246,0.10)]"
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="text-blue-500"
                        >
                            ✦
                        </motion.span>

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                            The Impact
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Transforming metrics
                        <br className="hidden sm:block" />
                        into{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            momentum.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                        See the difference a smarter digital strategy can make to your business performance.
                    </motion.p>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">

                    {/* Before Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ y: -5 }}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-card/70 p-6 shadow-lg shadow-black/[0.03] backdrop-blur-xl transition-shadow duration-500 hover:shadow-xl sm:p-9 lg:p-10"
                    >
                        {/* Top Accent */}
                        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-slate-400/40 via-slate-500/20 to-transparent" />

                        <div className="mb-10">
                            <div className="mb-5 flex items-center justify-between">
                                <span className="rounded-full border border-border bg-muted/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    Before
                                </span>

                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/70"
                                >
                                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                                </motion.div>
                            </div>

                            <h3 className="font-['Manrope'] text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                The Baseline
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Standard metrics before our digital overhaul.
                            </p>
                        </div>

                        <div className="flex-1 space-y-9">
                            {metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + metric.delay,
                                    }}
                                >
                                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                                        <span className="font-semibold text-muted-foreground">
                                            {metric.label}
                                        </span>

                                        <span className="font-bold tabular-nums text-foreground">
                                            {metric.before}
                                        </span>
                                    </div>

                                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "25%" }}
                                            viewport={{ once: false }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.4 + metric.delay,
                                                ease: "easeOut",
                                            }}
                                            className="h-full rounded-full bg-gradient-to-r from-slate-400/50 to-slate-500/30"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 border-t border-border/70 pt-6">
                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                                Starting point
                            </p>
                        </div>
                    </motion.div>

                    {/* After Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        whileHover={{ y: -5 }}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-500/25 bg-card p-6 shadow-[0_20px_70px_rgba(59,130,246,0.09)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_85px_rgba(59,130,246,0.16)] sm:p-9 lg:p-10"
                    >
                        {/* Animated Gradient Border Accent */}
                        <motion.div
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6,#3b82f6)] bg-[length:200%_100%]"
                        />

                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

                        <div className="relative mb-10">
                            <div className="mb-5 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                    <motion.span
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                                    />
                                    After
                                </span>

                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-500"
                                >
                                    <TrendingUp className="h-5 w-5" />
                                </motion.div>
                            </div>

                            <h3 className="font-['Manrope'] text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                The Webcore Effect
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Post-launch performance acceleration.
                            </p>
                        </div>

                        <div className="relative flex-1 space-y-9">
                            {metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + metric.delay,
                                    }}
                                >
                                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                                        <span className="font-semibold text-foreground">
                                            {metric.label}
                                        </span>

                                        <span className="flex items-center gap-2 font-bold tabular-nums text-foreground">
                                            {metric.after}

                                            <motion.span
                                                initial={{ opacity: 0, scale: 0.7 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: false }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.6 + metric.delay,
                                                }}
                                                className="inline-flex items-center gap-0.5 text-xs font-extrabold text-emerald-500"
                                            >
                                                {metric.increase}
                                                <ArrowUpRight className="h-3.5 w-3.5" />
                                            </motion.span>
                                        </span>
                                    </div>

                                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{
                                                width: metric.inverse ? "40%" : "85%",
                                            }}
                                            viewport={{ once: false }}
                                            transition={{
                                                duration: 1.4,
                                                delay: 0.4 + metric.delay,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500"
                                        >
                                            <motion.div
                                                animate={{ x: ["-100%", "250%"] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: 1,
                                                }}
                                                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative mt-10 border-t border-blue-500/15 pt-6">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                                <Sparkles className="h-4 w-4" />
                                Performance transformed
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
