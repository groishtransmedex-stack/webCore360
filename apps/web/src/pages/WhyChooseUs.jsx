import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, animate } from 'framer-motion';
import {
  Cloud,
  Compass,
  Cpu,
  DollarSign,
  Headphones,
  LayoutGrid,
  Megaphone,
  Repeat,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Globe2,
  Eye,
  HeartPulse,
  Timer,
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];


const reveal = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.95,
    filter: 'blur(7px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease },
  },
};
const revealLeft = {
  hidden: { opacity: 0, x: -65, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 65, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease },
  },
};


const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stats = [
  { label: 'Projects', value: 25, suffix: '+', icon: LayoutGrid, accent: 'from-foreground to-fuchsia-500' },
  { label: 'Happy Clients', value: 20, suffix: '+', icon: Users, accent: 'from-violet-400 to-fuchsia-500' },
  { label: 'Satisfaction', value: 98, suffix: '%', icon: HeartPulse, accent: 'from-emerald-400 to-teal-400' },
  { label: 'Years Experience', value: 2, suffix: '+', icon: Timer, accent: 'from-slate-400 to-slate-600' },
  { label: 'Experts', value: 20, suffix: '+', icon: Sparkles, accent: 'from-foreground to-violet-400' },
  { label: 'Support', value: 24, suffix: '/7', icon: Headphones, accent: 'from-fuchsia-400 to-violet-400' },
  { label: 'Countries', value: 15, suffix: '+', icon: Globe2, accent: 'from-amber-400 to-orange-500' },
  { label: 'Transparency', value: 100, suffix: '%', icon: Eye, accent: 'from-slate-400 to-foreground' },
];

const highlights = [
  {
    title: 'Product Velocity',
    description: '30+ launches delivered with fast iteration and polished execution.',
    icon: Sparkles,
    accent: 'from-fuchsia-400 to-foreground',
  },
  {
    title: 'Growth Experiments',
    description: '75+ live experiments driving measurable conversion improvements.',
    icon: TrendingUp,
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'Automated Systems',
    description: '250+ workflows and automations powering efficiency and scale.',
    icon: Cloud,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'Insight Reports',
    description: '540+ custom reports turning data into premium decision support.',
    icon: Eye,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Secure Foundations',
    description: 'Enterprise-grade security baked into every release and integration.',
    icon: ShieldCheck,
    accent: 'from-slate-400 to-foreground',
  },
  {
    title: 'Cloud-First Strategy',
    description: 'Infrastructure built for availability, performance, and scale.',
    icon: Cloud,
    accent: 'from-fuchsia-400 to-violet-400',
  },
];

function AnimatedCounter({ value, suffix, delay = 0 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      delay,
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value, delay]);

  return (
    <span className="block text-5xl font-semibold tracking-[-0.05em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl">
      {display}
      <span className="text-2xl font-medium text-foreground dark:text-foreground">{suffix}</span>
    </span>
  );
}

const features = [
  {
    title: 'Fast Delivery',
    description: 'Launch faster with premium delivery systems built for speed and precision.',
    icon: Rocket,
    accent: 'from-foreground to-fuchsia-500',
  },
  {
    title: 'Modern Design',
    description: 'Polished, contemporary interfaces that feel premium from every angle.',
    icon: LayoutGrid,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'SEO Optimized',
    description: 'Search-ready foundations, fast load performance, and better organic visibility.',
    icon: Eye,
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Scalable Architecture',
    description: 'Flexible systems that grow with traffic, products, and enterprise demand.',
    icon: Server,
    accent: 'from-slate-400 to-slate-600',
  },
  {
    title: 'Dedicated Team',
    description: 'Senior-minded talent aligned to your business goals and long-term success.',
    icon: Users,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent investment with premium impact and measurable ROI.',
    icon: DollarSign,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: '24/7 Support',
    description: 'Always-on collaboration and fast response when momentum matters most.',
    icon: Headphones,
    accent: 'from-fuchsia-400 to-violet-400',
  },
  {
    title: 'Transparent Workflow',
    description: 'Clear milestones, status visibility, and no mystery in delivery.',
    icon: Repeat,
    accent: 'from-slate-400 to-foreground',
  },
  {
    title: 'Latest Technologies',
    description: 'Modern stacks and tools that keep your product ahead of the market.',
    icon: Cpu,
    accent: 'from-fuchsia-400 to-indigo-500',
  },
  {
    title: 'Business Strategy',
    description: 'Growth-minded planning that bridges product, marketing, and design.',
    icon: Compass,
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'Marketing Experts',
    description: 'Campaign thinking and conversion expertise woven into every experience.',
    icon: Megaphone,
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Security',
    description: 'Hardened infrastructure, secure delivery, and trusted systems practices.',
    icon: ShieldCheck,
    accent: 'from-foreground to-slate-500',
  },
  {
    title: 'Performance',
    description: 'Speed and stability engineered for real-world conversion outcomes.',
    icon: Zap,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud-first foundations for availability, scale, and global reach.',
    icon: Cloud,
    accent: 'from-fuchsia-400 to-foreground',
  },
  {
    title: 'Future Proof Solutions',
    description: 'Adaptable systems built to stay relevant as your business evolves.',
    icon: Globe2,
    accent: 'from-violet-400 to-violet-300',
  },
];

function WhyChooseUs() {
  return (
    <div className="dark relative overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[30rem] w-[30rem] rounded-full bg-foreground/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_25%)]" />
        <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />
      </div>

      <main className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
        <Helmet>
          <title>Why Choose WebCore 360 | Premium digital growth partner</title>
          <meta
            name="description"
            content="Discover why WebCore 360 is the premium growth partner for ambitious brands with fast delivery, modern design, secure architecture, and measurable results."
          />
        </Helmet>

        
<div className="mx-auto max-w-[1400px]">

  {/* WHY CHOOSE WEBCORE 360 */}
 <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.25 }}
  className="relative mx-auto max-w-4xl px-4 text-center"
>
  {/* Background glow */}
  <motion.div
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]"
  />

  <motion.div
    variants={reveal}
    className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/10 backdrop-blur-md"
  >
    <motion.span
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-2 w-2 rounded-full bg-blue-500"
    />
    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
      Why Choose WebCore 360
    </span>
    <span className="text-sm text-violet-500">✦</span>
  </motion.div>

  <motion.h1
    variants={reveal}
    className="text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl xl:text-6xl"
  >
    Built for
    <motion.span
      className="block bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(59,130,246,0.2)]"
    >
      Premium Performance.
    </motion.span>
    Designed for Growth.
  </motion.h1>

  <motion.p
    variants={reveal}
    className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-muted-foreground sm:text-lg"
  >
    We combine intelligent strategy, modern technology, and exceptional execution
    to help ambitious businesses build, scale, and move forward.
  </motion.p>

  {/* Decorative gradient line */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: '100px', opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1, ease }}
    className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-lg shadow-blue-500/30"
  />
</motion.div>

  {/* PREMIUM ADVANTAGES */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.12 }}
    className="mt-12 grid gap-6 lg:grid-cols-3"
  >
    {[
      {
        label: 'Elite Design & Product',
        text: 'Turn every touchpoint into a premium experience with polished design systems and brand-led product strategy.',
        icon: LayoutGrid,
        accent: 'from-violet-400 to-fuchsia-500',
      },
      {
        label: 'Business-led Growth',
        text: 'Align your digital roadmap to real business goals, revenue channels, and growth momentum.',
        icon: TrendingUp,
        accent: 'from-emerald-400 to-foreground',
      },
      {
        label: 'Trusted Execution',
        text: 'Clear communication, dependable delivery, and a senior team that owns quality end-to-end.',
        icon: Sparkles,
        accent: 'from-fuchsia-400 to-indigo-500',
      },
    ].map((item, index) => (
      <motion.div
        key={item.label}
        variants={reveal}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -12, scale: 1.025 }}
        className="group relative overflow-hidden rounded-[24px] border border-border bg-card/90 p-7 shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/20 shadow-lg shadow-blue-500/10">
            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [0, 5, -5, 0],
              }}
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}
            >
              <item.icon className="h-7 w-7" />
            </motion.div>
          </div>

          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-foreground">
            {item.label}
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {item.text}
          </p>

          <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-24" />
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* QUICK METRICS */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    className="mt-14 rounded-[2.5rem] border border-blue-500/10 bg-foreground/[0.04] p-5 shadow-lg sm:p-8"
  >
    <div className="grid gap-5 lg:grid-cols-3">
      {[
        { value: '48h', label: 'Average kickoff turnaround' },
        { value: '12x', label: 'Higher velocity launches' },
        { value: '98%', label: 'Client satisfaction rate' },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          variants={reveal}
          whileHover={{ y: -8, scale: 1.03 }}
          className="rounded-[22px] border border-border bg-card p-6 text-center text-foreground shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
        >
          <p className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            {item.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* FEATURES */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1 }}
    className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
  >
    {features.map((feature, index) => (
      <motion.article
        key={feature.title}
        variants={reveal}
        whileHover={{ y: -12, scale: 1.025 }}
        className="group relative overflow-hidden rounded-[24px] border border-border bg-card/95 p-6 shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-7"
      >
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-8 top-5 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 7, -7, 0],
            }}
            whileHover={{ scale: 1.15, rotate: 12 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}
          >
            <feature.icon className="h-7 w-7" />
          </motion.div>

          <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
            Premium
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <h2 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
            {feature.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {feature.description}
          </p>
        </div>

        <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"
          />
          Floating micro interaction included
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
      </motion.article>
    ))}
  </motion.div>

  {/* SPEED / CLARITY / SCALE */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.15 }}
    className="mt-16 rounded-[2.5rem] border border-blue-500/10 bg-muted/70 p-5 shadow-lg sm:p-8"
  >
    <div className="grid gap-5 lg:grid-cols-3">
      {[
        { label: 'Speed', value: 'Rapid delivery and launch-ready execution' },
        { label: 'Clarity', value: 'Transparent workflow and milestone-based progress' },
        { label: 'Scale', value: 'Systems designed for growth, traffic, and new initiatives' },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          variants={reveal}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group rounded-[22px] border border-border bg-card p-6 shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10"
        >
          <p className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-sm font-extrabold uppercase tracking-[0.25em] text-transparent">
            {item.label}
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {item.value}
          </p>
          <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-20" />
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* PREMIUM PARTNER EXPERIENCE */}
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.15 }}
    variants={staggerContainer}
    className="relative mt-16 overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 p-6 shadow-xl sm:p-10 lg:p-12"
  >
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 7, repeat: Infinity }}
      className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
    />

    <motion.div
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.4, 0.15] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
    />

    <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
      <div>
        <motion.p
          variants={revealLeft}
          className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500"
        >
          Premium partner experience
        </motion.p>

        <motion.h2
          variants={revealLeft}
          className="mt-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl lg:text-5xl"
        >
          More than a vendor — a long-term growth engine.
        </motion.h2>

        <motion.p
          variants={revealLeft}
          className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
        >
          From launch planning to ongoing optimization, we deliver systems that keep your brand relevant, memorable, and profitable.
        </motion.p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            'Executive-grade planning',
            'Cross-functional delivery',
            'Performance monitoring',
            'Growth-ready roadmaps',
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease }}
              whileHover={{ x: 6, scale: 1.02 }}
              className="rounded-2xl border border-border bg-card/80 p-4 text-sm font-semibold text-muted-foreground shadow-sm transition-all hover:border-blue-400/50 hover:shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={revealRight}
        whileHover={{ y: -8, scale: 1.015 }}
        className="relative overflow-hidden rounded-[24px] border border-blue-400/20 bg-card/90 p-6 shadow-xl sm:p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10" />

        <div className="relative z-10 rounded-3xl bg-secondary/80 p-6 shadow-md sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-500">
            Ready to accelerate
          </p>

          <p className="mt-4 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:text-3xl">
            Let’s build a premium digital platform that scales.
          </p>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Speak with our senior growth team and get a custom roadmap for your next launch.
          </p>

          <motion.button
            type="button"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
          >
            Book a strategy session
          </motion.button>
        </div>
      </motion.div>
    </div>
  </motion.section>

  {/* BUSINESS METRICS */}
  <div className="mt-28 border-t border-border pt-16 sm:pt-20">

    <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.25 }}
  className="relative mx-auto max-w-4xl px-4 text-center"
>
  {/* Animated background glow */}
  <motion.div
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.12, 0.3, 0.12],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]"
  />

  {/* Section badge */}
  <motion.div
    variants={reveal}
    className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/10 backdrop-blur-md"
  >
    <motion.span
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
    />

    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-500">
      State of the Business
    </span>

    <span className="text-sm text-violet-500">✦</span>
  </motion.div>

  {/* Main heading */}
  <motion.h2
    variants={reveal}
    className="text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-5xl"
  >
    Numbers That Reflect
    <motion.span
      className="mt-2 block bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(59,130,246,0.2)]"
    >
      Performance & Progress.
    </motion.span>
  </motion.h2>

  {/* Description */}
  <motion.p
    variants={reveal}
    className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-muted-foreground sm:text-lg"
  >
    Explore the impact behind our work through measurable results, consistent
    performance, and the momentum driving businesses forward.
  </motion.p>

  {/* Animated underline */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: '110px', opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1, ease }}
    className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-lg shadow-blue-500/30"
  />
</motion.div>

    {/* ANIMATED STATS */}
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1, ease }}
      className="relative mt-16 overflow-hidden rounded-[2.5rem] border border-border bg-card p-5 shadow-xl sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_35%)]" />

      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (index % 4),
              delay: index * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-2 w-2 rounded-full bg-blue-400 blur-[2px]"
            style={{
              top: `${(index * 37) % 100}%`,
              left: `${(index * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            variants={reveal}
            whileHover={{ y: -10, scale: 1.035 }}
            className="group relative overflow-hidden rounded-[22px] border border-border bg-card/95 p-6 shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
          >
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-700 group-hover:opacity-100" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <motion.div
                animate={{
                  rotate: [0, 12, -12, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} text-white shadow-lg`}
              >
                <stat.icon className="h-6 w-6" />
              </motion.div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-bold text-blue-500">
                {index + 1}
              </div>
            </div>

            <div className="relative z-10 mt-9">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                delay={index * 0.1}
              />

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {stat.label}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
          </motion.article>
        ))}
      </motion.div>
    </motion.div>

    {/* PERFORMANCE HIGHLIGHTS */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-12 rounded-[2.5rem] border border-border bg-card/80 p-5 shadow-lg sm:p-7"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            variants={reveal}
            whileHover={{ y: -10, scale: 1.025 }}
            className="group relative overflow-hidden rounded-[22px] border border-border bg-secondary p-6 text-foreground shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 shadow-sm">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], y: [0, -4, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.accent} text-white shadow-lg`}
              >
                <highlight.icon className="h-6 w-6" />
              </motion.div>
            </div>

            <h3 className="relative z-10 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-xl font-extrabold text-transparent">
              {highlight.title}
            </h3>

            <p className="relative z-10 mt-3 text-sm leading-7 text-muted-foreground">
              {highlight.description}
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* GROWTH ENGINE */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={staggerContainer}
      className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 p-6 shadow-xl sm:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        <div>
          <motion.p
            variants={revealLeft}
            className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500"
          >
            Growth engine
          </motion.p>

         <motion.h2
  variants={revealLeft}
  className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-4xl"
>
  Turning Premium Insights
  <motion.span
    className="mt-2 block bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(59,130,246,0.2)]"
  >
    Into Lasting Momentum
  </motion.span>
</motion.h2>

          <motion.p
            variants={revealLeft}
            className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
          >
            This section now shows not only scale, but the operational focus and intelligence behind every number.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Launch cadence', value: 'Weekly sprint cycles' },
              { title: 'Conversion lift', value: '+18% average uplift' },
              { title: 'Team focus', value: 'Dedicated account alignment' },
              { title: 'Future-proof', value: 'Modular systems for next-stage growth' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-border bg-card/80 p-5 text-sm shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-md"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-500">
                  {item.title}
                </p>
                <p className="mt-3 font-bold text-foreground">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={revealRight}
          whileHover={{ y: -7, scale: 1.015 }}
          className="relative overflow-hidden rounded-[24px] border border-border bg-card/90 p-6 shadow-xl sm:p-8"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_55%)]"
          />

          <div className="relative z-10 grid gap-4">
            {[
              {
                label: 'Data-driven decisions',
                detail: 'Integrated analytics for every campaign and product release.',
              },
              {
                label: 'Live optimization',
                detail: 'Continuous performance monitoring with fast iteration.',
              },
              {
                label: 'Executive signal',
                detail: 'Premium reporting designed for leadership-level visibility.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={reveal}
                whileHover={{ x: 5 }}
                className="rounded-2xl border border-border bg-secondary/90 p-5 transition-all duration-300 hover:border-blue-400/40"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-500">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>

    {/* ANIMATION FEATURE CARDS */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className="mt-14 grid gap-6 lg:grid-cols-3"
    >
      {[
        {
          label: 'Wave motion',
          title: 'Animated background waves',
          description: 'Soft wave layers flow behind the counters, creating movement and depth without overwhelming the content.',
        },
        {
          label: 'Glow highlights',
          title: 'Floating glowing circles',
          description: 'Glowing orbs and gradient lines hover in the layout to give the page a modern, premium data feel.',
        },
        {
          label: 'Gradient details',
          title: 'Particles and gradient lines',
          description: 'Particle fields and subtle gradient strokes add dimensional polish to the stat page.',
        },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          variants={reveal}
          whileHover={{ y: -10, scale: 1.025 }}
          className="group relative overflow-hidden rounded-[24px] border border-border bg-card/90 p-6 shadow-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-500">
              {item.label}
            </p>

            <h3 className="mt-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 group-hover:w-24" />
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</div>

      </main>
    </div>
  );
}

export default WhyChooseUs;
