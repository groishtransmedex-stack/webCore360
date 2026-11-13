
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "Webcore360 completely transformed our digital presence. Their strategic approach to our brand narrative resulted in a 41% increase in qualified leads within the first quarter.",
        author: "Sarah Jenkins",
        role: "CMO, Lumen Commerce",
        rating: 5,
    },
    {
        id: 2,
        content: "The level of premium craft they brought to our product launch was unmatched. From the interactive hero to the backend optimization, every detail was flawless.",
        author: "David Chen",
        role: "Founder, Northstar Labs",
        rating: 5,
    },
    {
        id: 3,
        content: "We partnered with Webcore360 to overhaul our acquisition engine. The automation systems they built accelerated our sales cycle by 2.3x.",
        author: "Marcus Thorne",
        role: "VP Growth, Harbor Capital",
        rating: 5,
    },
];

export default function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
        }),
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (idx) => {
        if (idx === currentIndex) return;

        setIsAutoPlaying(false);
        setDirection(idx > currentIndex ? 1 : -1);
        setCurrentIndex(idx);
    };

    return (
        <section className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 35, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[5%] top-[10%] h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
                />

                <motion.div
                    animate={{
                        x: [0, -35, 25, 0],
                        y: [0, 30, -20, 0],
                        scale: [1, 0.9, 1.15, 1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[5%] right-[5%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]"
                />
            </div>

            <div className="mx-auto w-full max-w-5xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
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
                            Client Testimonials
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Trusted by teams.
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            Proven by results.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                        Real experiences from ambitious businesses growing with Webcore360.
                    </motion.p>
                </motion.div>

                {/* Slider */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Animated Border */}
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute -inset-[1px] rounded-[2rem] bg-[linear-gradient(120deg,rgba(59,130,246,0.5),rgba(139,92,246,0.15),rgba(59,130,246,0.5))] bg-[length:200%_200%] opacity-70 blur-[1px]"
                    />

                    <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 shadow-[0_25px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl">

                        {/* Top Accent */}
                        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

                        <div className="relative min-h-[410px] overflow-hidden sm:min-h-[360px] lg:min-h-[340px]">

                            <AnimatePresence initial={false} custom={direction} mode="sync">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 28,
                                        },
                                        opacity: { duration: 0.35 },
                                        scale: { duration: 0.45 },
                                        filter: { duration: 0.35 },
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = Math.abs(offset.x) * velocity.x;

                                        if (swipe < -10000) {
                                            handleNext();
                                        } else if (swipe > 10000) {
                                            handlePrev();
                                        }
                                    }}
                                    className="absolute inset-0 flex cursor-grab items-center justify-center px-5 py-10 active:cursor-grabbing sm:px-10 sm:py-12 lg:px-16"
                                >
                                    <div className="w-full text-center">

                                        {/* Quote Icon */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.6, delay: 0.15 }}
                                            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 shadow-lg shadow-blue-500/10 sm:h-16 sm:w-16"
                                        >
                                            <Quote className="h-7 w-7 fill-blue-500/10 text-blue-500 sm:h-8 sm:w-8" />
                                        </motion.div>

                                        {/* Stars */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.25 }}
                                            className="mb-6 flex justify-center gap-1.5"
                                        >
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        delay: 0.3 + i * 0.08,
                                                        duration: 0.35,
                                                    }}
                                                >
                                                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Testimonial Content */}
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.65, delay: 0.35 }}
                                            className="mx-auto mb-8 max-w-3xl font-['Manrope'] text-base font-semibold leading-relaxed tracking-[-0.02em] text-foreground sm:text-xl sm:leading-[1.8] md:text-2xl"
                                        >
                                            “{testimonials[currentIndex].content}”
                                        </motion.p>

                                        {/* Author */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.55, delay: 0.45 }}
                                        >
                                            <div className="mx-auto mb-4 h-px w-16 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                                            <p className="font-['Manrope'] text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                                                {testimonials[currentIndex].author}
                                            </p>

                                            <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:mt-10"
                >
                    {/* Previous */}
                    <motion.button
                        type="button"
                        onClick={handlePrev}
                        whileHover={{ scale: 1.1, x: -3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous testimonial"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/5 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </motion.button>

                    {/* Dots */}
                    <div className="flex items-center gap-2.5">
                        {testimonials.map((_, idx) => (
                            <motion.button
                                key={idx}
                                type="button"
                                onClick={() => handleDotClick(idx)}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                aria-current={idx === currentIndex ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-500 ${
                                    idx === currentIndex
                                        ? "w-9 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                                        : "w-2.5 bg-border hover:bg-blue-400"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Next */}
                    <motion.button
                        type="button"
                        onClick={handleNext}
                        whileHover={{ scale: 1.1, x: 3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next testimonial"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/5 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </motion.button>
                </motion.div>

                {/* Auto-play Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="mt-5 flex items-center justify-center gap-2"
                >
                    <motion.span
                        animate={{
                            opacity: isAutoPlaying ? [0.4, 1, 0.4] : 0.4,
                            scale: isAutoPlaying ? [0.9, 1.15, 0.9] : 1,
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: isAutoPlaying ? Infinity : 0,
                        }}
                        className={`h-2 w-2 rounded-full ${
                            isAutoPlaying ? "bg-blue-500" : "bg-muted-foreground"
                        }`}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {isAutoPlaying ? "Auto playing" : "Paused"}
                    </span>
                </motion.div>

            </div>
        </section>
    );
}
