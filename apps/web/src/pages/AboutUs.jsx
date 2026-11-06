// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import {
//   Globe2,
//   Users,
//   Target,
//   Lightbulb,
//   Heart,
//   Zap,
//   MapPin,
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const values = [
//   {
//     title: 'Innovation First',
//     description: 'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that set you apart.',
//     icon: Lightbulb,
//   },
//   {
//     title: 'Client Partnership',
//     description: 'We treat every project as a partnership. Your growth is our growth — and we invest in it accordingly.',
//     icon: Heart,
//   },
//   {
//     title: 'Global Perspective',
//     description: 'With offices in the USA and Pakistan, we bring diverse expertise and round-the-clock productivity to every engagement.',
//     icon: Globe2,
//   },
//   {
//     title: 'Results Driven',
//     description: 'Every decision we make is backed by data and measured by impact. We build for outcomes, not just output.',
//     icon: Target,
//   },
//   {
//     title: 'Team Excellence',
//     description: 'Our team of designers, developers, strategists, and marketers work together to deliver seamless, premium experiences.',
//     icon: Users,
//   },
//   {
//     title: 'Speed & Quality',
//     description: 'We move fast without cutting corners. Premium execution, delivered on timelines that keep your business ahead.',
//     icon: Zap,
//   },
// ];

// const stats = [
//   { number: '25+', label: 'Projects Delivered' },
//   { number: '20+', label: 'Happy Clients' },
//   { number: '2', label: 'Global Offices' },
//   { number: '15+', label: 'Team Members' },
// ];

// const officeImages = [
//   {
//     src: '/images/about-us-5.jpg',
//     alt: 'WebCore360 Meeting Room',
//     caption: 'Strategy & Planning Room',
//   },
//   {
//     src: '/images/about-us-6.jpg',
//     alt: 'WebCore360 Conference Room',
//     caption: 'Client Collaboration Space',
//   },
//   {
//     src: '/images/about-us-7.jpg',
//     alt: 'WebCore360 Open Workspace',
//     caption: 'Our Creative Hub',
//   },
//   {
//     src: '/images/usa-office.jpg',
//     alt: 'WebCore360 USA Office',
//     caption: 'Our USA Office',
//   },
//   {
//     src: '/images/about-us-2.jpg',
//     alt: 'WebCore360 Workspace',
//     caption: 'Dedicated Professionals',
//   },
//   {
//     src: '/images/about-us-4.jpg',
//     alt: 'WebCore360 Creative Space',
//     caption: 'Focused Execution',
//   },
// ];

// function AboutUs() {
//   return (
//     <>
//       <Helmet>
//         <title>About Us — Webcore360</title>
//         <meta
//           name="description"
//           content="Learn about Webcore360 — a full-service digital agency with offices in the USA and Pakistan, delivering premium web design, marketing, and technology solutions."
//         />
//       </Helmet>

//       <div className="relative overflow-x-hidden text-foreground">
//         <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//           <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
//           <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/18 blur-[150px]" />
//           <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/15 blur-[140px]" />
//         </div>

//         <main className="relative z-10">
//           {/* Hero Section */}
//           <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//                 className="max-w-3xl"
//               >
//                 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md">
//                   <Sparkles className="h-4 w-4 text-foreground" />
//                   Our Story
//                 </div>
//                 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
//                   Building digital
//                   <br />
//                   excellence, globally.
//                 </h1>
//                 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
//                   Webcore360 is a full-service digital agency that blends strategy, design, and technology to build premium experiences for ambitious brands. From New Jersey to Lahore, we deliver results that matter.
//                 </p>
//               </motion.div>
//             </div>
//           </section>

//           {/* Main Team Image */}
//           <section className="px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className="overflow-hidden rounded-[2rem] border border-border shadow-lg"
//               >
//                 <img
//                   src="/images/usa-office-exterior.jpg"
//                   alt="The WebCore360 Team at Work"
//                   className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
//                 />
//               </motion.div>
//             </div>
//           </section>

//           {/* Who We Are */}
//           <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
//             <div className="mx-auto max-w-[1400px]">
//               <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//                 <motion.div
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '-100px' }}
//                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Who We Are</p>
//                   <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
//                     A team that thinks big and delivers bigger.
//                   </h2>
//                   <p className="mt-6 text-lg leading-8 text-muted-foreground">
//                     Founded with a vision to bridge the gap between premium digital experiences and accessible pricing, Webcore360 has grown into a powerhouse agency serving clients across the globe.
//                   </p>
//                   <p className="mt-4 text-lg leading-8 text-muted-foreground">
//                     Our team of 30+ professionals spans web development, graphic design, video production, SEO, social media management, content writing, and AI automation. We don't just build websites — we build digital ecosystems that drive measurable growth.
//                   </p>
//                   <div className="mt-8 space-y-4">
//                     {[
//                       'Full-service digital agency with end-to-end capabilities',
//                       'Dual offices for round-the-clock productivity',
//                       'Proven track record with 25+ successful projects',
//                       'Dedicated teams for every client engagement',
//                     ].map((item) => (
//                       <div key={item} className="flex items-start gap-3">
//                         <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
//                         <span className="text-muted-foreground">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, x: 24 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: '-100px' }}
//                   transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//                   className="grid grid-cols-2 gap-4"
//                 >
//                   <div className="space-y-4">
//                     <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
//                       <img
//                         src="/images/about-us-5.jpg"
//                         alt="Meeting Room"
//                         className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                     <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
//                       <img
//                         src="/images/about-us-7.jpg"
//                         alt="Workspace"
//                         className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-4 pt-8">
//                     <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
//                       <img
//                         src="/images/about-us-6.jpg"
//                         alt="Conference Room"
//                         className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                     <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
//                       <img
//                         src="/images/about-us-4.jpg"
//                         alt="Creative Space"
//                         className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* Stats */}
//           <section className="px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="rounded-[2rem] border border-border bg-card p-8 shadow-md lg:p-12"
//               >
//                 <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
//                   {stats.map((stat, index) => (
//                     <motion.div
//                       key={stat.label}
//                       initial={{ opacity: 0, y: 16 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//                       className="text-center"
//                     >
//                       <p className="text-4xl font-bold text-foreground lg:text-5xl">{stat.number}</p>
//                       <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Our Values */}
//           <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="max-w-3xl"
//               >
//                 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Values</p>
//                 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
//                   Principles that guide everything we build.
//                 </h2>
//               </motion.div>

//               <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {values.map((value, index) => {
//                   const Icon = value.icon;
//                   return (
//                     <motion.article
//                       key={value.title}
//                       initial={{ opacity: 0, y: 24 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, margin: '-70px' }}
//                       transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
//                       whileHover={{ y: -6 }}
//                       className="rounded-[1.75rem] border border-border bg-card p-7 shadow-md transition-all duration-300 hover:border-foreground/10"
//                     >
//                       <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
//                         <Icon className="h-6 w-6" />
//                       </div>
//                       <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
//                       <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
//                     </motion.article>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* Office Gallery */}
//           <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="max-w-3xl mb-12"
//               >
//                 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Workspace</p>
//                 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
//                   Where ideas come to life.
//                 </h2>
//                 <p className="mt-5 text-lg leading-8 text-muted-foreground">
//                   Our offices are designed to inspire creativity, collaboration, and focus. Take a look inside the spaces where we build premium digital experiences.
//                 </p>
//               </motion.div>

//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {officeImages.map((image, index) => (
//                   <motion.div
//                     key={image.alt}
//                     initial={{ opacity: 0, y: 24 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: '-70px' }}
//                     transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//                     className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-md"
//                   >
//                     <div className="overflow-hidden">
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                     </div>
//                     <div className="p-5">
//                       <p className="text-sm font-medium text-foreground">{image.caption}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Our Locations */}
//           <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
//             <div className="mx-auto max-w-[1400px]">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: '-100px' }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="max-w-3xl mb-12"
//               >
//                 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Locations</p>
//                 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
//                   Two offices. One mission.
//                 </h2>
//               </motion.div>

//               <div className="grid gap-6 lg:grid-cols-2">
//                 <motion.a
//                   href="https://maps.google.com/?q=1+Britton+Pl+Ste+6,+Voorhees+Township,+NJ+08043,+United+States"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '-70px' }}
//                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                   whileHover={{ y: -6 }}
//                   className="block rounded-[1.75rem] border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-foreground/10 cursor-pointer"
//                 >
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
//                       <MapPin className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">USA Office</p>
//                       <h3 className="text-xl font-semibold text-foreground">Voorhees, New Jersey</h3>
//                     </div>
//                   </div>
//                   <div className="space-y-2 text-muted-foreground">
//                     <p className="text-sm font-medium text-foreground">Echelon Professional Center</p>
//                     <p className="text-sm">1 Britton Pl Ste 6</p>
//                     <p className="text-sm">Voorhees Township, NJ 08043</p>
//                     <p className="text-sm">United States</p>
//                   </div>
//                   <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
//                     View on Google Maps <ArrowRight className="h-4 w-4" />
//                   </div>
//                 </motion.a>

//                 <motion.a
//                   href="https://maps.google.com/?q=Plaza+%23+178+CCA,+Commercial+Sector+Sector+CCA+Dha+Phase+4,+Lahore,+54000"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '-70px' }}
//                   transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
//                   whileHover={{ y: -6 }}
//                   className="block rounded-[1.75rem] border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-foreground/10 cursor-pointer"
//                 >
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
//                       <MapPin className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">Pakistan Office</p>
//                       <h3 className="text-xl font-semibold text-foreground">Lahore, Punjab</h3>
//                     </div>
//                   </div>
//                   <div className="space-y-2 text-muted-foreground">
//                     <p className="text-sm font-medium text-foreground">DHA Phase 4</p>
//                     <p className="text-sm">Plaza # 178 CCA, Commercial Sector</p>
//                     <p className="text-sm">Sector CCA, DHA Phase 4</p>
//                     <p className="text-sm">Lahore, 54000</p>
//                   </div>
//                   <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
//                     View on Google Maps <ArrowRight className="h-4 w-4" />
//                   </div>
//                 </motion.a>
//               </div>
//             </div>
//           </section>


//         </main>
//       </div>
//     </>
//   );
// }

// export default AboutUs;


import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Users,
  Target,
  Lightbulb,
  Heart,
  Zap,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    title: 'Innovation First',
    description:
      'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that set you apart.',
    icon: Lightbulb,
  },
  {
    title: 'Client Partnership',
    description:
      'We treat every project as a partnership. Your growth is our growth — and we invest in it accordingly.',
    icon: Heart,
  },
  {
    title: 'Global Perspective',
    description:
      'With offices in the USA and Pakistan, we bring diverse expertise and round-the-clock productivity to every engagement.',
    icon: Globe2,
  },
  {
    title: 'Results Driven',
    description:
      'Every decision we make is backed by data and measured by impact. We build for outcomes, not just output.',
    icon: Target,
  },
  {
    title: 'Team Excellence',
    description:
      'Our team of designers, developers, strategists, and marketers work together to deliver seamless, premium experiences.',
    icon: Users,
  },
  {
    title: 'Speed & Quality',
    description:
      'We move fast without cutting corners. Premium execution, delivered on timelines that keep your business ahead.',
    icon: Zap,
  },
];

const officeImages = [
  {
    src: '/images/about-us-5.jpg',
    alt: 'WebCore360 Meeting Room',
    caption: 'Strategy & Planning Room',
  },
  {
    src: '/images/about-us-6.jpg',
    alt: 'WebCore360 Conference Room',
    caption: 'Client Collaboration Space',
  },
  {
    src: '/images/about-us-7.jpg',
    alt: 'WebCore360 Open Workspace',
    caption: 'Our Creative Hub',
  },
  {
    src: '/images/usa-office.jpg',
    alt: 'WebCore360 USA Office',
    caption: 'Our USA Office',
  },
  {
    src: '/images/about-us-2.jpg',
    alt: 'WebCore360 Workspace',
    caption: 'Dedicated Professionals',
  },
  {
    src: '/images/about-us-4.jpg',
    alt: 'WebCore360 Creative Space',
    caption: 'Focused Execution',
  },
];

// Animated counter

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  // Animation triggers every time the counter enters the screen
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      count.set(0);

      const controls = animate(count, Number(value), {
        duration: 2.2,
        ease: 'easeOut',
      });

      return () => controls.stop();
    } else {
      count.set(0);
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};


const SectionLabel = ({ children }) => (
  <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 shadow-[0_0_25px_rgba(59,130,246,0.08)]">
    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-500 dark:text-blue-300 sm:text-xs">
      {children}
    </span>
  </div>
);

const GradientHeading = ({ children, className = '' }) => (
  <h2
    className={`font-heading text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl ${className}`}
  >
    {children}
  </h2>
);

function AboutUs() {
  // All statistics are controlled from this state
  const [stats] = useState([
    { number: 25, suffix: '+', label: 'Projects Delivered' },
    { number: 20, suffix: '+', label: 'Happy Clients' },
    { number: 2, suffix: '', label: 'Global Offices' },
    { number: 15, suffix: '+', label: 'Team Members' },
  ]);

  return (
    <>
      <Helmet>
        <title>About Us — Webcore360</title>
        <meta
          name="description"
          content="Learn about Webcore360 — a full-service digital agency with offices in the USA and Pakistan, delivering premium web design, marketing, and technology solutions."
        />
      </Helmet>

      <div className="relative isolate overflow-hidden text-foreground">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 45, 0],
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 35, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-40 top-[35rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[130px]"
          />

          <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/[0.06] blur-[120px]" />
        </div>

        <main className="relative z-10">
          {/* Hero */}
          <section className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-44">

            {/* Animated Background Glows */}
            <motion.div
              className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[120px]"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="pointer-events-none absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-violet-500/[0.08] blur-[120px]"
              animate={{
                x: [0, -45, 0],
                y: [0, 35, 0],
                scale: [1.2, 0.9, 1.2],
                opacity: [0.3, 0.75, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="mx-auto max-w-[1400px]">

              {/* Hero Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.18 },
                  },
                }}
                className="mx-auto max-w-4xl text-center"
              >
                {/* Section Label */}
                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.8, ease }}
                >
                  <SectionLabel>Our Story</SectionLabel>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  variants={reveal}
                  transition={{ duration: 1, ease }}
                  className="mx-auto mt-5 w-full max-w-5xl font-heading text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-foreground drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem]"
                >
                  Building digital
                  <br />

                  <motion.span
                    className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    excellence globally
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={reveal}
                  transition={{ duration: 0.85, ease }}
                  className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 lg:text-xl"
                >
                  Webcore360 is a full-service digital agency that blends
                  strategy, design, and technology to build premium experiences
                  for ambitious brands. From New Jersey to Lahore, we deliver
                  results that matter.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.85, ease }}
                  className="mt-9 flex flex-wrap items-center justify-center gap-4"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-8 py-6 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
                    >
                      <a href="#who-we-are">
                        Discover Our Story
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.a
                    href="#our-values"
                    whileHover={{ y: -5, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-bold text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    What We Believe
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 75,
                  scale: 0.92,
                  rotateX: 6,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.4 },
                }}
                style={{ transformPerspective: 1200 }}
                className="group relative mt-16 overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-2 shadow-2xl shadow-blue-950/10 sm:mt-20 sm:rounded-[2.5rem] sm:p-3"
              >
                {/* Animated Top Border */}
                <motion.div
                  className="absolute inset-x-0 top-0 z-20 h-1 origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, ease }}
                />

                {/* Image Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] transition-all duration-700 group-hover:bg-blue-500/25" />

                <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[2rem]">

                  <motion.img
                    src="/images/usa-office-exterior.jpg"
                    alt="The WebCore360 Team at Work"
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{
                      duration: 1.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-[260px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04] sm:h-[400px] lg:h-[540px]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  {/* Image Caption */}
                  <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease,
                    }}
                    className="absolute bottom-5 left-5 sm:bottom-9 sm:left-9"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                      WebCore360
                    </p>

                    <p className="mt-2 text-xl font-extrabold text-white drop-shadow-lg sm:text-3xl">
                      Ideas into impact.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Who We Are */}
          <section
            id="who-we-are"
            className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
          >
            <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.7, ease }}
                >
                  <SectionLabel>Who We Are</SectionLabel>
                </motion.div>

                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.7, ease }}
                >
                  <GradientHeading>
                    A team that thinks big and{' '}
                    <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                      delivers bigger.
                    </span>
                  </GradientHeading>
                </motion.div>

                <motion.p
                  variants={reveal}
                  transition={{ duration: 0.7, ease }}
                  className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  Founded with a vision to bridge the gap between premium
                  digital experiences and accessible pricing, Webcore360 has
                  grown into a powerhouse agency serving clients across the
                  globe.
                </motion.p>

                <motion.p
                  variants={reveal}
                  transition={{ duration: 0.7, ease }}
                  className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  Our team of 30+ professionals spans web development, graphic
                  design, video production, SEO, social media management,
                  content writing, and AI automation. We don't just build
                  websites — we build digital ecosystems that drive measurable
                  growth.
                </motion.p>

                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.7, ease }}
                  className="mt-8 grid gap-4"
                >
                  {[
                    'Full-service digital agency with end-to-end capabilities',
                    'Dual offices for round-the-clock productivity',
                    'Proven track record with 25+ successful projects',
                    'Dedicated teams for every client engagement',
                  ].map((item) => (
                    <div key={item} className="group flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Collage */}
              <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease }}
                className="grid grid-cols-2 items-center gap-3 sm:gap-5"
              >
                <div className="space-y-3 sm:space-y-5">
                  <div className="group overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
                    <img
                      src="/images/about-us-5.jpg"
                      alt="Meeting Room"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72"
                    />
                  </div>

                  <div className="group overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
                    <img
                      src="/images/about-us-7.jpg"
                      alt="Workspace"
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-52"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-12">
                  <div className="group overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
                    <img
                      src="/images/about-us-6.jpg"
                      alt="Conference Room"
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-52"
                    />
                  </div>

                  <div className="group overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
                    <img
                      src="/images/about-us-4.jpg"
                      alt="Creative Space"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease }}
                className="relative overflow-hidden rounded-[2rem] border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.08] via-card to-violet-500/[0.08] p-6 shadow-xl sm:p-10 lg:p-12"
              >
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

                <div className="relative grid grid-cols-2 gap-7 lg:grid-cols-4 lg:gap-5">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease,
                      }}
                      className="text-center"
                    >
                      <p className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                        <AnimatedCounter
                          value={stat.number}
                          suffix={stat.suffix}
                        />
                      </p>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Values */}
          <section
            id="our-values"
            className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
          >
            {/* Background glow */}
            <motion.div
              className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 35, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[110px]"
              animate={{
                scale: [1.2, 0.9, 1.2],
                y: [0, -30, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative mx-auto max-w-[1400px]">
              {/* Section Heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.18 },
                  },
                }}
                className="mx-auto max-w-3xl text-center"
              >
                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.75, ease }}
                >
                  <SectionLabel>Our Values</SectionLabel>
                </motion.div>

                <motion.div
                  variants={reveal}
                  transition={{ duration: 0.8, ease }}
                >
                  <GradientHeading>
                    Principles that guide{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                      everything we build
                    </span>
                  </GradientHeading>
                </motion.div>

                <motion.p
                  variants={reveal}
                  transition={{ duration: 0.8, ease }}
                  className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  The standards, ideas, and commitments that shape every
                  experience we create.
                </motion.p>
              </motion.div>

              {/* Values Cards */}
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <motion.article
                      key={value.title}
                      initial={{
                        opacity: 0,
                        y: 65,
                        scale: 0.92,
                        rotateX: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{
                        duration: 0.85,
                        delay: index * 0.13,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                        transition: {
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      }}
                      style={{ transformPerspective: 1000 }}
                      className="group relative isolate overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/80 p-6 shadow-lg backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/15 sm:p-8"
                    >
                      {/* Animated top border */}
                      <motion.div
                        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.13 + 0.2,
                          ease,
                        }}
                      />

                      {/* Hover background glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-blue-500/0 blur-[70px] transition-all duration-700 group-hover:bg-blue-500/20" />

                      <div className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-40 w-40 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-700 group-hover:bg-violet-500/15" />

                      {/* Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.13 + 0.25,
                          ease,
                        }}
                        whileHover={{
                          scale: 1.13,
                          rotate: 8,
                          transition: { duration: 0.3 },
                        }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-500 shadow-md shadow-blue-500/5 transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-xl group-hover:shadow-blue-500/20 dark:text-blue-300"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>

                      {/* Card Content */}
                      <h3 className="relative mt-6 text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-500 sm:text-2xl">
                        {value.title}
                      </h3>

                      <p className="relative mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {value.description}
                      </p>

                      {/* Animated Bottom Line */}
                      <div className="relative mt-6 h-[2px] w-full overflow-hidden rounded-full bg-border/70">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                          initial={{ width: "15%" }}
                          whileInView={{ width: "35%" }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.13 + 0.35,
                            ease,
                          }}
                        />

                        <div className="absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100" />
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Office Gallery */}

          <section className="relative overflow-hidden px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">

            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]" />

            <div className="mx-auto max-w-[1400px]">

              {/* Section Heading */}
              <motion.div
                initial={{ opacity: 0, y: 55, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-12 max-w-3xl text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <SectionLabel>Our Workspace</SectionLabel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GradientHeading>
                    Where ideas come{' '}
                    <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                      to life
                    </span>
                  </GradientHeading>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  Our offices are designed to inspire creativity,
                  collaboration, and focus. Take a look inside the spaces where
                  we build premium digital experiences.
                </motion.p>
              </motion.div>

              {/* Gallery */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {officeImages.map((image, index) => (
                  <motion.div
                    key={image.alt}
                    initial={{
                      opacity: 0,
                      y: 65,
                      scale: 0.92,
                      rotateX: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.18,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: (index % 3) * 0.13,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.025,
                      transition: {
                        duration: 0.35,
                        ease: 'easeOut',
                      },
                    }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-lg transition-[border-color,box-shadow] duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/15"
                    style={{ transformPerspective: 1000 }}
                  >
                    {/* Animated gradient border accent */}
                    <div className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 transition-transform duration-700 group-hover:scale-x-100" />

                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        initial={{ scale: 1.16 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.18 }}
                        transition={{
                          duration: 1.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-60 w-full object-cover transition-transform duration-1000 group-hover:scale-110 sm:h-72"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Blue glow on hover */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-violet-500/0 transition-all duration-700 group-hover:from-blue-500/15 group-hover:to-violet-500/20" />

                      {/* Brand badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.18 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.25 + (index % 3) * 0.13,
                        }}
                        className="absolute bottom-4 left-4"
                      >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg backdrop-blur-xl">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,1)]" />
                          WebCore360
                        </span>
                      </motion.div>
                    </div>

                    {/* Card Footer */}
                    <div className="relative flex items-center justify-between gap-3 overflow-hidden p-5">
                      <p className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-blue-500 sm:text-base">
                        {image.caption}
                      </p>

                      <motion.div
                        whileHover={{ x: 5, scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.07] text-blue-500 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Locations */}

          <section className="relative overflow-hidden px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]" />
            <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[120px]" />

            <div className="mx-auto max-w-[1400px]">

              {/* Section Heading */}
              <motion.div
                initial={{ opacity: 0, y: 55, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-12 max-w-3xl text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                >
                  <SectionLabel>Our Locations</SectionLabel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GradientHeading>
                    Two offices.{' '}
                    <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                      One mission.
                    </span>
                  </GradientHeading>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  Bringing global perspectives and local expertise together to
                  help ambitious brands grow.
                </motion.p>
              </motion.div>

              {/* Location Cards */}
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    name: 'Voorhees, New Jersey',
                    label: 'USA Office',
                    address: [
                      'Echelon Professional Center',
                      '1 Britton Pl Ste 6',
                      'Voorhees Township, NJ 08043',
                      'United States',
                    ],
                    href: 'https://maps.google.com/?q=1+Britton+Pl+Ste+6,+Voorhees+Township,+NJ+08043,+United+States',
                  },
                  {
                    name: 'Lahore, Punjab',
                    label: 'Pakistan Office',
                    address: [
                      'DHA Phase 4',
                      'Plaza # 178 CCA, Commercial Sector',
                      'Sector CCA, DHA Phase 4',
                      'Lahore, 54000',
                    ],
                    href: 'https://maps.google.com/?q=Plaza+%23+178+CCA,+Commercial+Sector+Sector+CCA+Dha+Phase+4,+Lahore,+54000',
                  },
                ].map((office, index) => (
                  <motion.a
                    key={office.label}
                    href={office.href}
                    target="_blank"
                    rel="noopener noreferrer"

                    initial={{
                      opacity: 0,
                      y: 65,
                      scale: 0.93,
                      rotateX: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: {
                        duration: 0.35,
                        ease: 'easeOut',
                      },
                    }}

                    className="group relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-6 shadow-lg backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/15 sm:p-9"
                    style={{ transformPerspective: 1000 }}
                  >
                    {/* Animated top border */}
                    <div className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 transition-transform duration-700 group-hover:scale-x-100" />

                    {/* Background glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/0 blur-3xl transition-all duration-700 group-hover:bg-blue-500/15" />

                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-violet-500/0 blur-3xl transition-all duration-700 group-hover:bg-violet-500/10" />

                    <div className="relative">

                      {/* Office Header */}
                      <div className="flex items-center gap-4">

                        <motion.div
                          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.2 + index * 0.18,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{
                            rotate: 8,
                            scale: 1.12,
                          }}
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-500 shadow-md transition-shadow duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20 dark:text-blue-300"
                        >
                          <MapPin className="h-6 w-6" />
                        </motion.div>

                        <div className="min-w-0">
                          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                            {office.label}
                          </p>

                          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-500 sm:text-2xl">
                            {office.name}
                          </h3>
                        </div>
                      </div>

                      {/* Address Lines */}
                      <div className="mt-7 space-y-2 border-l-2 border-blue-500/30 pl-5">
                        {office.address.map((line, lineIndex) => (
                          <motion.p
                            key={line}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                              duration: 0.55,
                              delay: 0.25 + index * 0.18 + lineIndex * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
                          >
                            {line}
                          </motion.p>
                        ))}
                      </div>

                      {/* Google Maps Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6 + index * 0.18,
                        }}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-500 transition-all duration-300 group-hover:gap-4 dark:text-blue-300"
                      >
                        View on Google Maps

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>


          {/* Final CTA */}
          <section className="relative overflow-hidden px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-[1200px]">
              <motion.div
                initial={{ opacity: 0, y: 55, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease }}
                className="group relative isolate overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 px-6 py-14 text-center shadow-2xl shadow-blue-950/30 sm:rounded-[2.5rem] sm:px-12 sm:py-20"
              >
                {/* Animated background glows */}
                <motion.div
                  className="pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/25 blur-[100px]"
                  animate={{
                    scale: [1, 1.35, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-80 w-80 rounded-full bg-violet-500/25 blur-[110px]"
                  animate={{
                    scale: [1.2, 0.9, 1.2],
                    x: [0, -25, 0],
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Subtle animated border glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] border border-blue-300/20"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 mx-auto max-w-3xl">
                  {/* Section Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.65, delay: 0.15, ease }}
                  >
                    <SectionLabel>Let's Work Together</SectionLabel>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.25, ease }}
                    className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
                  >
                    Have a vision?
                    <br />
                    <motion.span
                      className="inline-block bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Let's make it happen
                    </motion.span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4, ease }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                  >
                    Bring us your ideas and let's create a digital experience
                    that moves your business forward.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.75, delay: 0.55, ease }}
                    className="mt-9"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="group/btn rounded-full bg-white px-9 py-6 font-extrabold text-slate-950 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-400/25"
                    >
                      <Link to="/contact-us">
                        Start a Conversation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AboutUs;
