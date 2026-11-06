// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { CheckCircle2, Sparkles, Zap, ShieldCheck, HelpCircle, Target, Search, MousePointerClick, PenTool, Share2, Palette, ImageIcon, Video, Code, Bot } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';

// const pricingPlans = [
//   {
//     name: 'Marketing & Growth',
//     monthly: 199,
//     yearly: 149,
//     tagline: 'Comprehensive marketing, SEO, and social media management.',
//     features: [
//       'Strategic Marketing',
//       'SEO Optimization',
//       'Google Ads Management',
//       'Content Writing',
//       'Social Media Management',
//     ],
//     popular: false,
//     color: 'from-blue-400 to-indigo-500',
//     icon: Zap,
//   },
//   {
//     name: 'Design & Creative',
//     monthly: 249,
//     yearly: 189,
//     tagline: 'Stunning graphic design, video editing, and creative assets.',
//     features: [
//       'Creative Design',
//       'Graphic Design',
//       'Video Editing',
//       'Brand Identity Assets',
//       'UI/UX Enhancements',
//     ],
//     popular: true,
//     color: 'from-fuchsia-500 via-violet-500 to-indigo-500',
//     icon: Sparkles,
//   },
//   {
//     name: 'Tech & Automation',
//     monthly: 299,
//     yearly: 229,
//     tagline: 'Technical solutions and workflow automation for your business.',
//     features: [
//       'Technical Solutions',
//       'Automation Services',
//       'Custom API Integrations',
//       'Workflow Optimization',
//       'Dedicated Tech Support',
//     ],
//     popular: false,
//     color: 'from-amber-400 via-orange-500 to-rose-500',
//     icon: ShieldCheck,
//   },
// ];

// const faqs = [
//   {
//     question: 'How do the lower pricing plans work?',
//     answer: 'We have optimized our delivery framework using smart AI tools and automated pipelines to lower operational costs, passing 100% of those savings directly onto our clients without sacrificing premium quality.',
//   },
//   {
//     question: 'Are there any hidden setup fees or contracts?',
//     answer: 'No. All our plans operate on a simple month-to-month subscription basis. You can upgrade, downgrade, or cancel at any time with no penalties.',
//   },
//   {
//     question: 'What is included in the "Unlimited website updates"?',
//     answer: 'This includes copy changes, new landing page creations, blog formatting, technical bug fixes, performance optimizations, and layout tweaks on your existing platform.',
//   },
//   {
//     question: 'Can I swap services between different packages?',
//     answer: 'Yes! We are extremely flexible. During our onboarding strategy call, we will calibrate the exact scope of your chosen plan to align with your immediate growth milestones.',
//   },
// ];

// const individualServices = [
//   { name: 'Strategic Marketing', price: 99 },
//   { name: 'SEO Optimization', price: 79 },
//   { name: 'Google Ads Management', price: 89 },
//   { name: 'Content Writing', price: 49 },
//   { name: 'Social Media Management', price: 69 },
//   { name: 'Creative Design', price: 89 },
//   { name: 'Graphic Design', price: 59 },
//   { name: 'Video Editing', price: 129 },
//   { name: 'Technical Solutions', price: 149 },
//   { name: 'Automation Services', price: 99 },
// ];

// function PricingPage() {
//   const [isYearly, setIsYearly] = useState(true);

//   return (
//     <>
//       <Helmet>
//         <title>Pricing & Plans | Webcore360</title>
//         <meta
//           name="description"
//           content="Premium full-stack marketing, design, and automation services at highly competitive prices. Transparent subscription plans for every growth stage."
//         />
//       </Helmet>

//       <div className="relative min-h-screen overflow-x-hidden pt-28 pb-20 text-foreground">
//         {/* Glow Effects */}
//         <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
//         <div className="pointer-events-none absolute right-[-10%] top-[40%] h-[35rem] w-[35rem] rounded-full bg-fuchsia-500/10 blur-[130px]" />

//         <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">

//           {/* Header */}
//           <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
//             <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-500 shadow-sm">
//               <Sparkles className="h-4 w-4" />
//               Transparent Pricing
//             </div>
//             <h1 className="text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-6xl">
//               Flexible support for every growth stage.
//             </h1>
//             <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
//               Get the power of a full-scale marketing agency, design studio, and dev shop combined into one simple, predictable monthly subscription.
//             </p>

//             {/* Toggle */}
//             <div className="mt-8 inline-flex items-center justify-center rounded-full border border-border bg-card p-1 text-sm shadow-md">
//               <button
//                 type="button"
//                 onClick={() => setIsYearly(true)}
//                 className={`rounded-full px-5 py-2.5 transition-all duration-300 font-medium ${
//                   isYearly ? 'bg-foreground text-background dark:bg-white dark:text-black shadow' : 'text-muted-foreground'
//                 }`}
//               >
//                 Yearly (Save ~25%)
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsYearly(false)}
//                 className={`rounded-full px-5 py-2.5 transition-all duration-300 font-medium ${
//                   !isYearly ? 'bg-foreground text-background dark:bg-white dark:text-black shadow' : 'text-muted-foreground'
//                 }`}
//               >
//                 Monthly
//               </button>
//             </div>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid gap-8 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
//             {pricingPlans.map((plan) => {
//               const Icon = plan.icon;
//               return (
//                 <motion.article
//                   key={plan.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                   className={`relative flex flex-col justify-between rounded-[2.5rem] p-8 border bg-card transition-all duration-500 hover:-translate-y-2 shadow-lg ${
//                     plan.popular
//                       ? 'border-violet-500/50 shadow-violet-500/5 dark:shadow-violet-950/20 ring-1 ring-violet-500/30'
//                       : 'border-border hover:border-foreground/10'
//                   }`}
//                 >
//                   <div>
//                     {plan.popular && (
//                       <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider shadow">
//                         Most Popular
//                       </span>
//                     )}

//                     <div className="flex items-center justify-between gap-4 mb-6">
//                       <h3 className="text-2xl font-bold text-foreground dark:text-white">
//                         {plan.name}
//                       </h3>
//                       <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.color} text-white`}>
//                         <Icon className="h-5 w-5" />
//                       </div>
//                     </div>

//                     <p className="text-sm leading-relaxed text-muted-foreground mb-8">
//                       {plan.tagline}
//                     </p>

//                     <div className="mb-8">
//                       <div className="flex items-baseline gap-1.5">
//                         <span className="text-5xl font-extrabold tracking-tight text-foreground dark:text-white">
//                           ${isYearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}
//                         </span>
//                         <span className="text-sm font-medium text-muted-foreground">/month</span>
//                       </div>
//                       <div className="mt-2 min-h-[24px]">
//                         {isYearly ? (
//                           <div className="flex flex-wrap items-center gap-2">
//                             <span className="text-xs text-muted-foreground">
//                               Billed annually (${(plan.yearly * 12).toLocaleString()}/yr)
//                             </span>
//                             <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
//                               Save ${( (plan.monthly - plan.yearly) * 12 ).toLocaleString()}/yr
//                             </span>
//                           </div>
//                         ) : (
//                           <span className="text-xs text-muted-foreground">
//                             Billed monthly, cancel anytime
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="border-t border-border/80 my-6" />

//                     <ul className="space-y-4 mb-8">
//                       {plan.features.map((feature) => (
//                         <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
//                           <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-500 mt-0.5" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Button
//                     asChild
//                     className={`w-full rounded-full py-6 text-base font-semibold shadow transition-all duration-300 ${
//                       plan.popular
//                         ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-white border-0 hover:opacity-95'
//                         : 'bg-secondary text-foreground border border-border hover:bg-muted'
//                     }`}
//                   >
//                     <Link to="/contact-us">Start with {plan.name}</Link>
//                   </Button>
//                 </motion.article>
//               );
//             })}
//           </div>

//           {/* Animated Marquee for Individual Services */}
//           <div className="mt-32 max-w-[100vw] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
//             <div className="text-center mb-10 space-y-3">
//               <h2 className="text-3xl font-semibold text-foreground dark:text-white">Individual Service Pricing</h2>
//               <p className="text-muted-foreground max-w-xl mx-auto">Need something specific? Build your own package with our standalone services.</p>
//             </div>

//             <div className="relative flex max-w-full overflow-hidden py-5">
//               <motion.div
//                 className="flex w-max space-x-6 px-6"
//                 animate={{ x: ["-50%", "0%"] }}
//                 transition={{
//                   duration: 30,
//                   ease: "linear",
//                   repeat: Infinity,
//                 }}
//               >
//                 {[...individualServices, ...individualServices, ...individualServices].map((service, index) => {
//                   // Fallback to Sparkles if the specific icon wasn't found in this version of lucide-react
//                   const Icon = service.icon || Sparkles; 
//                   return (
//                     <div
//                       key={`${service.name}-${index}`}
//                       className="group relative w-[320px] flex-shrink-0 flex flex-col justify-between rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.3)] hover:border-violet-500/30 overflow-hidden"
//                     >
//                       {/* Subtle hover gradient background */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                       <div className="relative z-10">
//                         <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.bg} ${service.color} transition-transform duration-300 group-hover:scale-110`}>
//                           <Icon className="h-6 w-6" />
//                         </div>
//                         <h4 className="font-bold text-xl text-foreground dark:text-white mb-2">{service.name}</h4>
//                         <p className="text-sm text-muted-foreground mb-8 line-clamp-2">Premium {service.name.toLowerCase()} execution delivered seamlessly to accelerate your growth.</p>
//                       </div>

//                       <div className="relative z-10 flex items-baseline gap-1 mt-auto pt-6 border-t border-border/50 group-hover:border-violet-500/20 transition-colors duration-300">
//                         <span className="text-4xl font-extrabold tracking-tight text-foreground dark:text-white group-hover:text-violet-500 transition-colors duration-300">${service.price}</span>
//                         <span className="text-sm font-semibold text-muted-foreground">/mo</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* Fade Gradients for smooth edges */}
//               <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
//               <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
//             </div>
//           </div>

//           {/* Sexy Extra Callout / Trust Banner */}
//           <div className="mt-32 max-w-4xl mx-auto text-center rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
//             <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
//             <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

//             <div className="relative z-10 space-y-4">
//               <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
//                 Need a completely bespoke partnership?
//               </h2>
//               <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
//                 If you have specific campaign goals, complex tech requirements, or want to hire a dedicated full-time strategist, let's craft a custom plan together.
//               </p>
//               <div className="pt-4">
//                 <Button asChild className="rounded-full bg-white text-black hover:bg-slate-100 font-semibold px-8 py-5">
//                   <Link to="/contact-us">Request custom scope</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* FAQs */}
//           <section className="mt-28 max-w-4xl mx-auto">
//             <div className="text-center mb-12 space-y-3">
//               <p className="text-xs uppercase tracking-[0.35em] text-violet-500 font-semibold">FAQ</p>
//               <h2 className="text-3xl font-semibold text-foreground dark:text-white">Pricing & FAQ</h2>
//             </div>
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <Accordion key={faq.question} type="single" collapsible>
//                   <AccordionItem value={`item-${index}`} className="rounded-3xl border border-border bg-card px-6 shadow-sm">
//                     <AccordionTrigger className="text-left text-base font-semibold text-foreground dark:text-white hover:no-underline py-5">
//                       {faq.question}
//                     </AccordionTrigger>
//                     <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
//                       {faq.answer}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Accordion>
//               ))}
//             </div>
//           </section>

//         </div>
//       </div>
//     </>
//   );
// }

// export default PricingPage;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ================= ANIMATION SETTINGS ================= */

const ease = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 75,
    scale: 0.94,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -85,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 85,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.9,
    rotateX: 8,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

const headingReveal = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.88,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const paragraphReveal = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================= PRICING DATA ================= */

const pricingPlans = [
  {
    name: 'Marketing & Growth',
    monthly: 199,
    yearly: 149,
    tagline: 'Comprehensive marketing, SEO, and social media management.',
    features: [
      'Strategic Marketing',
      'SEO Optimization',
      'Google Ads Management',
      'Content Writing',
      'Social Media Management',
    ],
    popular: false,
    color: 'from-blue-400 to-indigo-500',
    icon: Zap,
  },
  {
    name: 'Design & Creative',
    monthly: 249,
    yearly: 189,
    tagline: 'Stunning graphic design, video editing, and creative assets.',
    features: [
      'Creative Design',
      'Graphic Design',
      'Video Editing',
      'Brand Identity Assets',
      'UI/UX Enhancements',
    ],
    popular: true,
    color: 'from-fuchsia-500 via-violet-500 to-indigo-500',
    icon: Sparkles,
  },
  {
    name: 'Tech & Automation',
    monthly: 299,
    yearly: 229,
    tagline: 'Technical solutions and workflow automation for your business.',
    features: [
      'Technical Solutions',
      'Automation Services',
      'Custom API Integrations',
      'Workflow Optimization',
      'Dedicated Tech Support',
    ],
    popular: false,
    color: 'from-amber-400 via-orange-500 to-rose-500',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'How do the lower pricing plans work?',
    answer:
      'We have optimized our delivery framework using smart AI tools and automated pipelines to lower operational costs, passing 100% of those savings directly onto our clients without sacrificing premium quality.',
  },
  {
    question: 'Are there any hidden setup fees or contracts?',
    answer:
      'No. All our plans operate on a simple month-to-month subscription basis. You can upgrade, downgrade, or cancel at any time with no penalties.',
  },
  {
    question: 'What is included in the "Unlimited website updates"?',
    answer:
      'This includes copy changes, new landing page creations, blog formatting, technical bug fixes, performance optimizations, and layout tweaks on your existing platform.',
  },
  {
    question: 'Can I swap services between different packages?',
    answer:
      'Yes! We are extremely flexible. During our onboarding strategy call, we will calibrate the exact scope of your chosen plan to align with your immediate growth milestones.',
  },
];

const individualServices = [
  { name: 'Strategic Marketing', price: 99 },
  { name: 'SEO Optimization', price: 79 },
  { name: 'Google Ads Management', price: 89 },
  { name: 'Content Writing', price: 49 },
  { name: 'Social Media Management', price: 69 },
  { name: 'Creative Design', price: 89 },
  { name: 'Graphic Design', price: 59 },
  { name: 'Video Editing', price: 129 },
  { name: 'Technical Solutions', price: 149 },
  { name: 'Automation Services', price: 99 },
];

/* ================= REUSABLE SECTION BADGE ================= */

function SectionBadge({ children }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ scale: 1.05, y: -3 }}
      className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 px-4 py-2.5 shadow-lg shadow-blue-500/10 backdrop-blur-xl sm:px-5"
    >
      <motion.span
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Sparkles className="h-4 w-4 shrink-0 text-blue-500" />
      </motion.span>

      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-500 sm:text-xs sm:tracking-[0.22em]">
        {children}
      </span>

      <span className="text-sm text-violet-500">✦</span>
    </motion.div>
  );
}

/* ================= PRICING PAGE ================= */

function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | Webcore360</title>
        <meta
          name="description"
          content="Premium full-stack marketing, design, and automation services at highly competitive prices. Transparent subscription plans for every growth stage."
        />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden pt-24 pb-20 text-foreground sm:pt-28 lg:pt-32">

        {/* ================= BACKGROUND EFFECTS ================= */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.1, 0.22, 0.1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[110px] sm:h-[30rem] sm:w-[30rem]"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.2, 0.08],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-40 top-[35%] h-80 w-80 rounded-full bg-violet-500/20 blur-[120px] sm:h-[35rem] sm:w-[35rem]"
          />

          <div className="absolute bottom-[10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          {/* ================= HERO HEADER ================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="relative mx-auto mb-16 max-w-4xl space-y-6 px-1 text-center sm:mb-20 sm:space-y-7"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.12, 0.28, 0.12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px] sm:h-80 sm:w-80"
            />

            <SectionBadge>Transparent Pricing</SectionBadge>

            {/* Main Heading */}
            <motion.h1
              variants={headingReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-[-0.055em] text-foreground drop-shadow-sm dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Flexible Support for

              <motion.span
                initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-2 block bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(59,130,246,0.2)]"
              >
                Every Growth Stage.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={paragraphReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="mx-auto max-w-2xl text-sm font-medium leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:text-lg"
            >
              Get the power of a full-scale marketing agency, design studio,
              and dev shop combined into one simple, predictable monthly
              subscription.
            </motion.p>



            {/* Pricing Toggle */}

            <motion.div
              variants={reveal}
              className="flex justify-center pt-3"
            >
              <div className="inline-flex w-full max-w-[360px] items-center justify-center gap-1 rounded-full border border-blue-500/20 bg-card/90 p-1.5 shadow-xl shadow-blue-500/10 backdrop-blur-xl sm:w-auto sm:max-w-none">

                <motion.button
                  type="button"
                  onClick={() => setIsYearly(true)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-7 sm:text-sm ${isYearly
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-muted-foreground hover:text-blue-500'
                    }`}
                >
                  <span>Yearly</span>

                  <span
                    className={`rounded-full px-2 py-1 text-[9px] font-extrabold sm:text-[10px] ${isYearly
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-500/10 text-blue-500'
                      }`}
                  >
                    SAVE ~25%
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setIsYearly(false)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 rounded-full px-4 py-3 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-7 sm:text-sm ${!isYearly
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-muted-foreground hover:text-blue-500'
                    }`}
                >
                  Monthly
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100px', opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, ease }}
              className="mx-auto h-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-lg shadow-blue-500/30"
            />
          </motion.section>

          {/* ================= PRICING CARDS ================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            className="mx-auto grid max-w-6xl items-stretch gap-7 sm:gap-8 lg:grid-cols-3"
          >
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  key={plan.name}
                  variants={cardReveal}
                  whileHover={{
                    y: -12,
                    scale: 1.025,
                    transition: { duration: 0.3, ease },
                  }}
                  className={`group relative flex flex-col justify-between overflow-visible rounded-[2rem] border bg-card/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 sm:rounded-[2.5rem] sm:p-8 ${plan.popular
                      ? 'border-violet-500/50 shadow-violet-500/10 ring-1 ring-violet-500/30'
                      : 'border-border hover:border-blue-500/40 hover:shadow-blue-500/10'
                    }`}
                >
                  {/* Card Glow */}

                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br ${plan.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10 sm:rounded-[2.5rem]`}
                  />

                  {plan.popular && (
                    <motion.span
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(168,85,247,0.15)',
                          '0 0 25px rgba(168,85,247,0.4)',
                          '0 0 10px rgba(168,85,247,0.15)',
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white sm:text-xs"
                    >
                      Most Popular
                    </motion.span>
                  )}

                  <div>
                    {/* Plan Heading */}

                    <div className="mb-6 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-extrabold tracking-tight text-foreground dark:text-white sm:text-2xl">
                        {plan.name}
                      </h3>

                      <div
                        className={`shrink-0 rounded-2xl bg-gradient-to-br ${plan.color} p-3 text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mb-8 min-h-[48px] text-sm leading-relaxed text-muted-foreground">
                      {plan.tagline}
                    </p>

                    {/* Price */}

                    <div className="mb-8">
                      <div className="flex flex-wrap items-baseline gap-1.5">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${plan.name}-${isYearly}`}
                            initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl font-extrabold tracking-tight text-foreground dark:text-white sm:text-5xl"
                          >
                            $
                            {isYearly
                              ? plan.yearly.toLocaleString()
                              : plan.monthly.toLocaleString()}
                          </motion.span>
                        </AnimatePresence>

                        <span className="text-sm font-medium text-muted-foreground">
                          /month
                        </span>
                      </div>

                      <div className="mt-3 min-h-[24px]">
                        <AnimatePresence mode="wait">
                          {isYearly ? (
                            <motion.div
                              key="yearly"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="flex flex-wrap items-center gap-2"
                            >
                              <span className="text-xs text-muted-foreground">
                                Billed annually (${(plan.yearly * 12).toLocaleString()}/yr)
                              </span>

                              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                                Save ${((plan.monthly - plan.yearly) * 12).toLocaleString()}/yr
                              </span>
                            </motion.div>
                          ) : (
                            <motion.span
                              key="monthly"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="block text-xs text-muted-foreground"
                            >
                              Billed monthly, cancel anytime
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="my-6 border-t border-border/80" />

                    {/* Features */}

                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.4 }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.07,
                            ease,
                          }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}

                  <Button
                    asChild
                    className={`w-full rounded-full py-6 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 sm:text-base ${plan.popular
                        ? 'border-0 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-white shadow-violet-500/20 hover:opacity-95'
                        : 'border border-border bg-secondary text-foreground hover:border-blue-500/40 hover:bg-blue-500/10'
                      }`}
                  >
                    <Link to="/contact-us">
                      Start with {plan.name}
                    </Link>
                  </Button>
                </motion.article>
              );
            })}
          </motion.section>

          {/* ================= INDIVIDUAL SERVICES ================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            className="relative mt-24 sm:mt-32"
          >
            <motion.div
              variants={reveal}
              className="mb-10 space-y-4 px-2 text-center sm:mb-12"
            >
              <SectionBadge>Flexible Solutions</SectionBadge>

              <motion.h2
                variants={headingReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-3xl font-extrabold tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-5xl"
              >
                Individual Service{' '}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Pricing
                </span>
              </motion.h2>

              <motion.p
                variants={paragraphReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
              >
                Need something specific? Build your own package with our
                standalone services.
              </motion.p>

              <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Need something specific? Build your own package with our
                standalone services.
              </p>
            </motion.div>

            {/* Moving Service Cards */}

            <div className="relative -mx-4 max-w-[100vw] overflow-hidden py-5 sm:-mx-6 lg:-mx-8">
              <motion.div
                className="flex w-max gap-5 px-5 sm:gap-6 sm:px-6"
                animate={{ x: ['-33.333%', '0%'] }}
                transition={{
                  duration: 45,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {[...individualServices, ...individualServices, ...individualServices].map(
                  (service, index) => (
                    <motion.article
                      key={`${service.name}-${index}`}
                      whileHover={{
                        y: -10,
                        scale: 1.035,
                        transition: { duration: 0.25 },
                      }}
                      className="group relative flex w-[260px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-blue-500/40 hover:shadow-blue-500/10 sm:w-[310px] sm:p-8"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-500 ring-1 ring-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                          <Sparkles className="h-6 w-6" />
                        </div>

                        <h3 className="mb-3 text-lg font-extrabold text-foreground dark:text-white sm:text-xl">
                          {service.name}
                        </h3>

                        <p className="mb-8 line-clamp-2 text-sm leading-6 text-muted-foreground">
                          Premium {service.name.toLowerCase()} execution
                          delivered seamlessly to accelerate your growth.
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto flex items-baseline gap-1 border-t border-border/50 pt-6 transition-colors group-hover:border-blue-500/30">
                        <span className="text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-blue-500 sm:text-4xl dark:text-white">
                          ${service.price}
                        </span>

                        <span className="text-sm font-semibold text-muted-foreground">
                          /mo
                        </span>
                      </div>
                    </motion.article>
                  )
                )}
              </motion.div>

              {/* Edge Fade */}

              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />

              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />
            </div>
          </motion.section>

          {/* ================= CUSTOM PARTNERSHIP BANNER ================= */}

          <motion.section
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="relative mx-auto mt-24 max-w-4xl overflow-hidden rounded-[2rem] border border-slate-700/60 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 p-7 text-center shadow-2xl shadow-blue-950/20 sm:mt-32 sm:rounded-[2.5rem] sm:p-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.08, 0.25, 0.08],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative z-10 space-y-5"
            >
              <motion.div variants={reveal}>
                <SectionBadge>Custom Partnership</SectionBadge>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl"
              >
                Need a Completely{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Bespoke Partnership?
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mx-auto max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
              >
                If you have specific campaign goals, complex tech requirements,
                or want to hire a dedicated full-time strategist, let's craft
                a custom plan together.
              </motion.p>

              <motion.div variants={reveal} className="pt-3">
                <Button
                  asChild
                  className="rounded-full bg-white px-7 py-6 text-sm font-extrabold text-black shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:px-9 sm:text-base"
                >
                  <Link to="/contact-us">
                    Request Custom Scope
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* ================= FAQ SECTION ================= */}

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            className="mx-auto mt-24 max-w-4xl sm:mt-32"
          >
            <motion.div
              variants={reveal}
              className="mb-10 space-y-4 px-2 text-center sm:mb-12"
            >
              <SectionBadge>Frequently Asked Questions</SectionBadge>
              <motion.h2
                variants={headingReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-3xl font-extrabold tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-5xl"
              >
                Pricing &{' '}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  FAQ
                </span>
              </motion.h2>
              <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Everything you need to know before choosing the right plan
                for your business.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  variants={index % 2 === 0 ? revealLeft : revealRight}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`item-${index}`}
                      className="rounded-2xl border border-border bg-card/80 px-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 sm:rounded-3xl sm:px-6"
                    >
                      <AccordionTrigger className="py-5 text-left text-sm font-bold text-foreground hover:no-underline sm:text-base dark:text-white">
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </>
  );
}

export default PricingPage;
