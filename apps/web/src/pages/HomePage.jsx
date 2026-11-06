import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {  Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  MonitorPlay,
  PenTool,
  Phone,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  Users,
  Zap,
  Clock3,
  CalendarDays,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm.jsx';
import PremiumFeatureCard from '@/components/PremiumFeatureCard.jsx';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy.jsx';
import FeaturedWorkSection from '@/components/FeaturedWorkSection.jsx';
import { featuredCaseStudies } from '@/data/featuredCaseStudies.js';
import { CountUp } from '@/components/AnimationWrappers.jsx';
import FloatingShapes from '@/components/FloatingShapes.jsx';
import TestimonialsSlider from '@/components/TestimonialsSlider.jsx';
import BeforeAfter from '@/components/BeforeAfter.jsx';

function HomePage() {
  const pageRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visitorCount, setVisitorCount] = useState(628);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const services = [
    {
      icon: Globe2,
      title: 'Growth Strategy',
      description: 'Positioning, messaging, and funnel design that turns attention into predictable pipeline.',
      metric: '+37% qualified leads',
    },
    {
      icon: PenTool,
      title: 'Brand Experience',
      description: 'Visual systems and digital storytelling that make ambitious companies instantly memorable.',
      metric: 'Award-ready identity',
    },
    {
      icon: MonitorPlay,
      title: 'Web & Product',
      description: 'Conversion-focused experiences engineered for speed, clarity, and premium first impressions.',
      metric: 'Lighthouse 95+',
    },
    {
      icon: BrainCircuit,
      title: 'AI Automation',
      description: 'Intelligent workflows and agentic systems that free your team to focus on growth.',
      metric: '10h saved weekly',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years of execution' },
    { value: '98%', label: 'Client retention' },
    { value: '5/5', label: 'Average rating' },
  ];

  const heroClients = ['Northstar', 'Lumen', 'Harbor', 'Apex', 'Orbit'];

  const trustedBy = [
    'Northstar Labs',
    'Lumen Commerce',
    'Harbor Capital',
    'Apex Ventures',
    'Orbit Media',
    'Nova Pulse',
  ];

  const premiumSystems = [
    {
      icon: ArrowRight,
      title: 'Launch-ready narratives',
      description: 'Strategic messaging, pitch assets, and positioning that open gates to bigger opportunities.',
    },
    {
      icon: BrainCircuit,
      title: 'Automated growth loops',
      description: 'AI-assisted systems and workflows that keep your audience engaged without extra manual effort.',
    },
    {
      icon: Rocket,
      title: 'Revenue-tested funnels',
      description: 'Design and conversion logic calibrated around real audiences and measurable momentum.',
    },
    {
      icon: ShieldCheck,
      title: 'Premium operating rhythm',
      description: 'Clear milestones, executive alignment, and delivery you can trust at every stage.',
    },
  ];

  const techStack = [
    { name: 'React', logo: 'R', accent: 'from-foreground to-fuchsia-500', x: '10%', y: '14%' },
    { name: 'Next.js', logo: 'N', accent: 'from-white to-slate-300', x: '74%', y: '12%' },
    { name: 'Node.js', logo: 'N', accent: 'from-lime-400 to-emerald-500', x: '48%', y: '8%' },
    { name: 'MongoDB', logo: 'M', accent: 'from-emerald-400 to-emerald-500', x: '66%', y: '28%' },
    { name: 'Tailwind CSS', logo: 'T', accent: 'from-foreground to-violet-400', x: '88%', y: '74%' },
    { name: 'TypeScript', logo: 'TS', accent: 'from-fuchsia-500 to-indigo-500', x: '30%', y: '48%' },
    { name: 'Vercel', logo: 'V', accent: 'from-white to-slate-300', x: '82%', y: '18%' },
    { name: 'Figma', logo: 'F', accent: 'from-fuchsia-400 to-orange-400', x: '32%', y: '70%' },
  ];

  const industries = [
    { icon: Cloud, label: 'SaaS & Product' },
    { icon: Code2, label: 'Commerce & Marketplaces' },
    { icon: Layers, label: 'B2B growth platforms' },
    { icon: Star, label: 'Premium brand launches' },
  ];

  const projects = [
    {
      title: 'Northstar Labs',
      category: 'Branding',
      blurb: 'A refined launch narrative and growth system for an AI infrastructure brand.',
      accent: 'from-foreground/10 via-fuchsia-500/20 to-violet-500/25',
    },
    {
      title: 'Lumen Commerce',
      category: 'Web',
      blurb: 'An immersive storefront experience that increased conversion-rate by 41%.',
      accent: 'from-fuchsia-500/30 via-violet-500/20 to-fuchsia-500/25',
    },
    {
      title: 'Harbor Capital',
      category: 'Growth',
      blurb: 'A high-performance acquisition engine for a private-equity backed platform.',
      accent: 'from-emerald-500/30 via-foreground/10 to-violet-400/25',
    },
  ];

  const processSteps = [
    { title: 'Discover', description: 'We map your market, opportunity, and ambition with a strategic lens.' },
    { title: 'Design', description: 'We develop a premium digital experience tailored to your audience and goals.' },
    { title: 'Launch', description: 'We ship fast, measure early, and refine for momentum from day one.' },
    { title: 'Scale', description: 'We stay close as your growth engine, optimizing every channel and touchpoint.' },
  ];

  const awards = [
    'Clutch Top Agency 2025',
    'Design Authority Award',
    'Growth Innovator of the Year',
  ];

  const certifications = [
    'Google Partner',
    'Meta Certified',
    'HubSpot Solutions Partner',
  ];

  const team = [
    {
      name: 'Maya Chen',
      role: 'Founder & Strategy Lead',
      focus: 'Growth systems, brand voice, and GTM strategy',
    },
    {
      name: 'Noah Patel',
      role: 'Creative Director',
      focus: 'Design systems, campaign experience, and premium product UI',
    },
    {
      name: 'Avery Brooks',
      role: 'Head of Delivery',
      focus: 'Process, timelines, and operational excellence',
    },
  ];

  const values = [
    {
      title: 'Clarity',
      summary: 'We make every decision visible, measurable, and purposeful.',
    },
    {
      title: 'Craft',
      summary: 'Design and execution are elevated by detail, consistency, and premium polish.',
    },
    {
      title: 'Growth',
      summary: 'Every project is built to move your metrics, audience, and narrative forward.',
    },
  ];

  const companyTimeline = [
    { year: '2014', event: 'Agency founded to support ambitious digital brands.' },
    { year: '2018', event: 'Expanded into growth systems, automation, and product launches.' },
    { year: '2022', event: 'Launched enterprise services for premium marketing teams.' },
    { year: '2026', event: '250+ digital systems, dashboards, and campaigns delivered.' },
  ];

  const successStories = [
    {
      title: '41% higher lead conversion',
      company: 'Lumen Commerce',
      summary: 'A premium launch system for a commerce brand that improved lead quality and pipeline velocity.',
    },
    {
      title: '2.3x pipeline velocity',
      company: 'Harbor Capital',
      summary: 'Automation and design upgrades that accelerated sales cycles and improved reporting clarity.',
    },
    {
      title: 'Category-defining launch',
      company: 'Northstar Labs',
      summary: 'A high-performing website and brand system that supported a successful seed round.',
    },
  ];

  const blogHighlights = [
    { label: 'Blog', description: 'Insights on digital growth, creative systems, and premium launches.' },
    { label: 'Learning Center', description: 'Guides, frameworks, and playbooks for marketing leaders.' },
    { label: 'Resources', description: 'Templates, audits, and tools curated for ambitious teams.' },
  ];

  const caseStudies = [
    { title: 'Conversion-first product launch', detail: 'SaaS brand experience with a 32% uplift in qualified demo requests.' },
    { title: 'SEO growth program', detail: 'Authority and traffic expansion for a B2B scale-up.' },
    { title: 'Paid media ecosystem', detail: 'Google Ads and acquisition dashboards built for efficiency.' },
  ];

  const featuredWork = featuredCaseStudies.slice(0, 2);

  const partners = ['AWS', 'Google', 'Meta', 'HubSpot', 'Shopify'];

  const [calculatorMode, setCalculatorMode] = useState('pricing');
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(12000);
  const [conversionRate, setConversionRate] = useState(6.8);
  const [avgLeadValue, setAvgLeadValue] = useState(1700);

  const projectedLeads = Math.max(0, Math.round((monthlyAdSpend * conversionRate) / 175));
  const projectedRevenue = projectedLeads * avgLeadValue;
  const projectedROI = Math.round(((projectedRevenue - monthlyAdSpend) / monthlyAdSpend) * 100);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const powerEase = gsap.parseEase('power3.out');

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: powerEase,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray('.gsap-scale').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, scale: 0.96 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.7,
            ease: powerEase,
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Webcore360 | Premium digital marketing for modern brands</title>
        <meta
          name="description"
          content="Webcore360 creates premium growth systems, refined brand experiences, and high-performance digital products for ambitious companies."
        />
      </Helmet>

      <div className="relative overflow-x-hidden text-foreground">

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 z-[60] rounded-full border border-border bg-card p-3 text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        >
          <ChevronRight className="h-5 w-5 rotate-[-90deg]" />
        </button>

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-8%] top-0 h-[28rem] w-[28rem] rounded-full bg-foreground/10 blur-[140px]" />
          <div className="absolute right-[-10%] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-violet-400/20 blur-[140px]" />
        </div>


        <main ref={pageRef} className="relative z-10 pt-24">
          <FloatingShapes />

          <section className="relative isolate overflow-hidden bg-background/5 px-4 pb-20 pt-10 text-foreground sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-36 lg:pt-24">

            {/* Animated Background Effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] sm:h-96 sm:w-96"
              />

              <motion.div
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px] sm:h-[450px] sm:w-[450px]"
              />
            </div>

            <div className="mx-auto flex max-w-[1400px] flex-col gap-12 sm:gap-16">

              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">

                {/* LEFT CONTENT */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.14,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  className="relative z-10 mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left"
                >

                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-r from-black/70 via-black/30 to-transparent blur-3xl" />

                  <motion.div
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -left-10 top-10 h-28 w-28 rounded-full bg-blue-400/15 blur-3xl"
                  />

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 22, scale: 0.92 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs text-gray-200 shadow-lg backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-blue-300" />
                    <span>Premium growth systems for modern brands</span>
                  </motion.div>

                  {/* Animated Heading */}
                  <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-6xl lg:text-5xl">
                    <span className="block overflow-hidden pb-2">
                      <motion.span
                        initial={{ y: '110%' }}
                        animate={{ y: '0%' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                      >
                        Make your brand feel like a
                      </motion.span>
                    </span>

                    <span className="block overflow-hidden pb-2">
                      <motion.span
                        initial={{ y: '110%' }}
                        animate={{ y: '0%' }}
                        transition={{
                          duration: 0.85,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.1,
                        }}
                        className="block text-blue-500 drop-shadow-md"
                      >
                        category leader.
                      </motion.span>
                    </span>
                  </h1>

                  {/* Description */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.75 }}
                    className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg lg:mx-0"
                  >
                    We blend strategy, creative, and product execution to build high-conviction digital experiences that convert, scale, and endure.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 25, scale: 0.96 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.7 }}
                    className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row lg:justify-start"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="btn-shine group w-full rounded-full bg-gradient-to-r from-blue-600 via-fuchsia-500 to-violet-500 px-7 py-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(59,130,246,0.4)] sm:w-auto sm:px-8 sm:text-base"
                    >
                      <a
                        href="#contact"
                        onClick={(event) => handleNavClick(event, '#contact')}
                      >
                        Book a discovery session
                      </a>
                    </Button>
                  </motion.div>

                  {/* Client Badges */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7 }}
                    className="mt-9 flex flex-wrap justify-center gap-2.5 text-xs text-muted-foreground sm:mt-10 sm:gap-3 sm:text-sm lg:justify-start"
                  >
                    {heroClients.map((brand, index) => (
                      <motion.span
                        key={brand}
                        initial={{ opacity: 0, y: 18, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 0.85 + index * 0.09,
                          duration: 0.5,
                          ease: 'easeOut',
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.04,
                          borderColor: 'rgba(96,165,250,0.65)',
                        }}
                        className="cursor-default rounded-full border border-white/10 bg-black/40 px-3 py-2 text-gray-300 shadow-md backdrop-blur-sm transition-colors duration-300 hover:text-white sm:px-4"
                      >
                        {brand}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 55, scale: 0.94, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mx-auto w-full max-w-2xl lg:max-w-none"
                >

                  {/* Image Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.35, 0.7, 0.35],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -inset-5 rounded-[28px] bg-gradient-to-br from-blue-500/25 via-transparent to-violet-500/30 blur-2xl sm:-inset-8"
                  />

                  <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-blue-400/15 blur-3xl sm:right-8 sm:top-8 sm:h-28 sm:w-28" />

                  {/* Image Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-card shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:rounded-[22px]"
                  >
                    <img
                      src="/images/usa-office-exterior.jpg"
                      alt="WebCore360 Team"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] sm:aspect-[5/4] lg:aspect-[4/3]"
                    />

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Animated Border Highlight */}
                    <motion.div
                      animate={{ opacity: [0.2, 0.65, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-300/30 sm:rounded-[22px]"
                    />
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </section>


          <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-[1400px]">

              {/* Main Premium Systems Card */}
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="gsap-reveal rounded-[22px] border border-border bg-card p-5 shadow-md sm:p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">

                  {/* Left Content */}
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-xs font-bold uppercase tracking-[0.3em] text-foreground sm:text-sm sm:tracking-[0.35em]"
                    >
                      Premium systems
                    </motion.p>

                    <motion.h2
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      className="mt-4 max-w-2xl text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.8rem]"
                    >
                      High-end creative systems for{" "}
                      <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                        modern growth teams
                      </span>
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                    >
                      We engineer every experience to feel luxurious, fast, and unmistakably strategic — from the first scroll to the last conversion.
                    </motion.p>
                  </div>

                  {/* Right Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden rounded-[22px] border border-border bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 p-5 shadow-sm sm:p-7 lg:p-8"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                    <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm sm:tracking-[0.35em]">
                      Why it works
                    </p>

                    <div className="relative mt-6 space-y-5 text-sm leading-6 text-muted-foreground sm:space-y-6">

                      {[
                        {
                          color: "bg-blue-500",
                          text: "Experience-led storytelling with tactical conversion hooks.",
                        },
                        {
                          color: "bg-violet-400",
                          text: "Operational clarity that turns execution into repeatable momentum.",
                        },
                        {
                          color: "bg-fuchsia-400",
                          text: "Design systems built to scale across campaigns, digital products, and narrative touchpoints.",
                        },
                      ].map((item, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{ duration: 0.6, delay: 0.35 + index * 0.15 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${item.color} shadow-[0_0_12px_rgba(139,92,246,0.35)]`}
                          />
                          <span>{item.text}</span>
                        </motion.p>
                      ))}

                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Premium Feature Cards */}
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
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-4"
              >
                {premiumSystems.map((system, index) => (
                  <motion.div
                    key={system.title}
                    variants={{
                      hidden: { opacity: 0, y: 35 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    className="h-full"
                  >
                    <PremiumFeatureCard
                      icon={system.icon}
                      title={system.title}
                      description={system.description}
                      index={index}
                    />
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </section>




          <section id="trusted" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[1400px] rounded-[22px] border border-border bg-muted px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10"
            >
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-foreground sm:text-sm sm:tracking-[0.35em]"
                >
                  Trusted by
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl"
                >
                  Trusted by ambitious{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    startups and growing businesses worldwide.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                >
                  Our work powers high-growth teams across product, commerce, content, and platform innovation.
                </motion.p>
              </div>

              {/* Animated Brand Marquee */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-card p-4 shadow-md sm:mt-12 sm:p-5"
              >
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 22,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex w-max items-center gap-3 sm:gap-4"
                >
                  {[...trustedBy, ...trustedBy].map((brand, index) => (
                    <motion.div
                      key={`${brand}-${index}`}
                      whileHover={{ scale: 1.06, y: -4 }}
                      className="flex min-w-[10rem] items-center justify-center rounded-[18px] border border-border bg-secondary px-5 py-4 text-center text-sm font-bold text-foreground transition-colors duration-300 hover:border-blue-500/40 hover:bg-muted sm:min-w-[12rem] sm:rounded-[22px] sm:px-6"
                    >
                      {brand}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </section>


          <section id="testimonials" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-[1400px]">

              <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-foreground sm:text-sm sm:tracking-[0.35em]"
                >
                  Client voices
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl"
                >
                  Don't just take our{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    word for it.
                  </span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialsSlider />
              </motion.div>

            </div>
          </section>


          <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[1400px] rounded-[22px] border border-border bg-muted px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10"
            >
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-violet-700 dark:text-violet-300 sm:text-sm sm:tracking-[0.35em]"
                >
                  Specialized focus
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl"
                >
                  Premium work for{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    ambitious sectors and digital-first teams.
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
                >
                  We help teams in SaaS, commerce, growth, and creator economies launch more persuasive brands and products.
                </motion.p>
              </div>

              {/* Animated Industry Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
              >
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 45,
                        scale: 0.95,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.25 },
                    }}
                    className="group h-full rounded-[22px] border border-border bg-card p-5 text-left transition-colors duration-300 hover:border-blue-500/30 hover:bg-muted sm:p-6"
                  >
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-foreground/10 bg-gradient-to-br from-blue-500/10 to-violet-500/20 text-foreground shadow-md"
                    >
                      <industry.icon className="h-5 w-5" />
                    </motion.div>

                    <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      {industry.label}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Digital systems, messaging, and growth for teams that expect premium delivery.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>




          <section className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.75),rgba(15,23,42,0.98)_45%,transparent_85%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.06),transparent)]" />

              {[...Array(20)].map((_, index) => (
                <div
                  key={`particle-${index}`}
                  className="absolute rounded-full bg-muted blur-sm"
                  style={{
                    width: `${((index * 7) % 8) + 4}px`,
                    height: `${((index * 7) % 8) + 4}px`,
                    top: `${(index * 37) % 100}%`,
                    left: `${(index * 53) % 100}%`,
                    opacity: 0.15,
                  }}
                />
              ))}

              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

              <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1400px]">

              {/* Section Heading */}
             <motion.div
  initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mx-auto max-w-3xl text-center"
>
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-xs font-bold uppercase tracking-[0.3em] text-foreground sm:text-sm sm:tracking-[0.35em]"
  >
    Technology stack
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.15 }}
    className="mt-4 text-3xl font-bold leading-[1.15] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-[2.65rem]"
  >
    A futuristic stack designed for{" "}
    <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
      premium digital performance.
    </span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
  >
    Animated system nodes, glowing lines, and rotating tech badges that capture the feeling of modern infrastructure and design craft.
  </motion.p>
</motion.div>

              {/* Main Technology Container */}
              <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl sm:mt-16 sm:rounded-[3rem] sm:p-6 lg:p-8">

                {/* Mobile Technology Cards */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">

                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{
                        opacity: 0,
                        y: index % 2 === 0 ? 45 : -45,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: (index % 3) * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="group relative flex min-w-0 items-center gap-2 overflow-hidden rounded-2xl border border-border bg-secondary p-3 shadow-sm transition-all duration-300 hover:border-sky-400/60 hover:shadow-lg sm:gap-3 sm:p-4"
                    >
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tech.accent} text-xs font-bold text-foreground dark:text-white sm:h-11 sm:w-11 sm:text-sm`}>
                        {tech.logo}
                      </div>

                      <span className="truncate text-xs font-semibold text-foreground sm:text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}

                </div>

                {/* Desktop Animated Technology Cards */}
                <div className="relative hidden min-h-[560px] overflow-hidden rounded-[2rem] lg:block">

                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[length:140px_140px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_35%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.6),transparent_25%,rgba(15,23,42,0.6))] opacity-40" />

                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, index) => (
                      <div
                        key={`grid-${index}`}
                        className="absolute h-px w-full bg-secondary"
                        style={{
                          top: `${(index + 1) * 12}%`,
                        }}
                      />
                    ))}

                    {/* Vertical Grid Lines */}
                    {[...Array(8)].map((_, index) => (
                      <div
                        key={`grid-col-${index}`}
                        className="absolute h-full w-px bg-secondary"
                        style={{
                          left: `${(index + 1) * 10}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                    stroke="rgba(56,189,248,0.2)"
                    strokeWidth="0.2"
                  >
                    <path d="M0 25 Q50 0 100 25" />
                    <path d="M0 50 Q50 25 100 50" />
                    <path d="M0 75 Q50 50 100 75" />
                    <path d="M0 35 Q50 65 100 35" />
                    <path d="M0 85 Q50 45 100 85" />
                  </svg>

                  {/* Technology Cards - 3 Top + 2 Centered Bottom */}
                  <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-6 items-stretch justify-items-center gap-x-5 gap-y-5 px-6 py-8">

                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{
                          opacity: 0,
                          y: index < 3 ? 100 : -100,
                          scale: 0.92,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.1,
                          margin: "0px 0px -40px 0px",
                        }}
                        transition={{
                          duration: 0.85,
                          delay: (index % 3) * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`col-span-2 w-full max-w-[290px] ${index === 3
                          ? "col-start-2"
                          : index === 4
                            ? "col-start-4"
                            : ""
                          }`}
                      >

                        <motion.div
                          whileHover={{
                            y: -7,
                            scale: 1.025,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 18,
                          }}
                          className="group relative flex min-h-[175px] w-full flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_10px_30px_rgba(14,165,233,0.18)]"
                        >

                          {/* Hover Gradient */}
                          <div
                            className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-25`}
                          />

                          {/* Card Header */}
                          <div className="relative z-10 flex items-center justify-between gap-2">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-lg font-bold text-foreground shadow-sm">
                              {tech.logo}
                            </div>

                            <div className="max-w-[65%] truncate rounded-full border border-border bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground">
                              {tech.name}
                            </div>

                          </div>

                          {/* Card Content */}
                          <div className="relative z-10 rounded-xl border border-border bg-muted/80 p-3">

                            <span className="block text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                              Animated
                            </span>

                            <span className="mt-1.5 block text-sm font-bold text-foreground">
                              Floating system node
                            </span>

                          </div>

                          {/* Connection Status */}
                          <div className="relative z-10 mt-auto flex items-center gap-2 text-[11px] text-muted-foreground">

                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                              <span className="relative h-2 w-2 rounded-full bg-sky-500" />
                            </span>

                            Connected to platform mesh

                          </div>

                        </motion.div>
                      </motion.div>
                    ))}

                  </div>

                  {/* Center Glow Orb */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-4 z-0 flex justify-center">
                    <div className="relative h-32 w-32 rounded-full border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 shadow-xl">

                      <div className="absolute inset-0 rounded-full border border-border" />

                      <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)]" />

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>


         <section
  id="services"
  className="section-glow relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
>
  <div className="mx-auto max-w-[1400px]">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground sm:text-sm sm:tracking-[0.35em]">
        Services
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-6xl">
        Everything needed to look premium and{" "}
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          grow fast.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
        From positioning to product launches, our team shapes high-impact marketing systems with a meticulous point of view.
      </p>
    </motion.div>

    {/* Bento Box Grid */}
    <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">

      {/* Featured Service */}
      <motion.article
        initial={{ opacity: 0, y: 55, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -7 }}
        className="group relative overflow-hidden rounded-[2rem] border border-border glass p-6 shadow-md transition-all duration-500 hover:border-blue-500/30 sm:col-span-2 sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent blur-3xl transition-all duration-700 group-hover:scale-125" />

        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end lg:gap-8">

          <div className="max-w-xl">

            {/* Animated Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-blue-500/10 to-violet-500/20 text-foreground shadow-lg shadow-violet-500/10 sm:h-16 sm:w-16"
            >
              {React.createElement(services[0].icon, {
                className: "h-6 w-6 sm:h-7 sm:w-7",
              })}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-2xl font-bold leading-tight tracking-[-0.04em] text-foreground dark:text-white sm:mt-8 sm:text-3xl"
            >
              {services[0].title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              {services[0].description}
            </motion.p>
          </div>

          {/* Metric */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex items-center gap-4 self-start lg:self-auto"
          >
            <span className="rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 px-5 py-2.5 text-sm font-bold text-foreground shadow-sm">
              {services[0].metric}
            </span>
          </motion.div>

        </div>
      </motion.article>

      {/* Remaining Services */}
      {services.slice(1).map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.75,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="group relative h-full overflow-hidden rounded-[2rem] border border-border glass p-6 shadow-sm transition-all duration-500 hover:border-blue-500/30 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

          <div className="relative z-10">

            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-blue-500/10 to-violet-500/20 text-foreground shadow-md sm:h-14 sm:w-14"
            >
              <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>

            <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground dark:text-white sm:text-xl">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="font-bold text-foreground">
                {service.metric}
              </span>
            </div>

          </div>
        </motion.article>
      ))}

    </div>
  </div>
</section>

         <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
  <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 45, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[22px] border border-border bg-muted p-6 shadow-md sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-violet-700 dark:text-violet-300 sm:text-sm sm:tracking-[0.35em]">
        Why choose us
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.75, delay: 0.15 }}
        className="relative mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl"
      >
        A calm, senior-led partner for{" "}
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          ambitious growth.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
      >
        We merge strategic clarity with polished execution so your brand feels confident at every touchpoint.
      </motion.p>

      {/* Animated Checklist */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="relative mt-8 space-y-3 sm:space-y-4"
      >
        {[
          "Senior strategists, designers, and developers in one team",
          "Transparent process with clear milestones and reporting",
          "Built for premium but still measurable and efficient",
        ].map((item) => (
          <motion.div
            key={item}
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 rounded-[18px] border border-border bg-secondary p-4 text-sm leading-6 text-muted-foreground shadow-sm transition-colors duration-300 hover:border-blue-500/30"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
            <span>{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    {/* Right Feature Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.13 },
        },
      }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {[
        { icon: Rocket, label: "Launch-ready systems", value: "3-week MVP sprints" },
        { icon: Zap, label: "Fast iteration", value: "Weekly optimization cycles" },
        { icon: BarChart3, label: "Performance clarity", value: "Live reporting dashboards" },
        { icon: ShieldCheck, label: "Low-friction collaboration", value: "Hands-on senior support" },
      ].map((item) => (
        <motion.div
          key={item.label}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              scale: 0.94,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -7,
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
          className="group relative h-full overflow-hidden rounded-[22px] border border-border bg-muted p-5 shadow-md transition-all duration-500 hover:border-blue-500/30 sm:p-6"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-12 w-12 items-center justify-center rounded-[18px] border border-foreground/10 bg-gradient-to-br from-blue-500/10 to-violet-500/20 text-foreground shadow-md"
          >
            <item.icon className="h-5 w-5" />
          </motion.div>

          <p className="relative mt-5 text-base font-bold tracking-tight text-foreground dark:text-white sm:text-lg">
            {item.label}
          </p>

          <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
            {item.value}
          </p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

          <FeaturedWorkSection />
          <BeforeAfter />

         {/* ========================= PROCESS SECTION ========================= */}
<section
  id="process"
  className="section-glow relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
>
  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ x: [0, 45, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]"
    />
    <motion.div
      animate={{ x: [0, -35, 0], y: [0, 35, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
    />
  </div>

  <div className="mx-auto max-w-[1400px]">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/5"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
          Our Process
        </span>
        <Sparkles className="h-4 w-4 text-violet-300" />
      </motion.div>

      <h2 className="text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-5xl xl:text-[3.6rem]">
        A calm, clear delivery experience from{" "}
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          strategy to scale.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        A structured approach that keeps every stage transparent, focused, and
        aligned with your business goals.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative mx-auto max-w-4xl space-y-6 before:absolute before:bottom-8 before:left-[15px] before:top-8 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-violet-500 before:to-fuchsia-500/20 sm:space-y-8 md:before:left-[23px]">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -35, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative pl-11 sm:pl-16"
        >
          {/* Timeline node */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="absolute left-0 top-7 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/40 bg-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.25)] sm:top-8 sm:h-12 sm:w-12"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] sm:h-3 sm:w-3" />
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.035] sm:rounded-[2rem] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <div className="shrink-0">
                <span className="inline-flex rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/15 to-violet-500/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                  Phase 0{index + 1}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-300 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="hidden shrink-0 text-blue-400 sm:block"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* ========================= ENTERPRISE HUB SECTION ========================= */}
<section
  id="enterprise"
  className="section-glow relative isolate overflow-hidden bg-muted/40 px-4 py-20 dark:bg-[#040b1d] sm:px-6 sm:py-24 lg:px-8 lg:py-28"
>
  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, -40, 0], y: [0, 35, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
    />
  </div>

  <div className="mx-auto max-w-[1400px]">

    {/* Enterprise Intro */}
    <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-28 lg:self-start"
      >
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 dark:text-blue-300">
            Enterprise Hub
          </span>
          <Sparkles className="h-4 w-4 text-violet-400" />
        </div>

        <h2 className="text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-5xl">
          The command center for{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            premium digital growth.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
          Awards, team stories, calculators, dashboards, and audit tools
          designed for growth leaders.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-500 dark:text-blue-300">
            Strategy
          </span>
          <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-500 dark:text-violet-300">
            Innovation
          </span>
          <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-500 dark:text-fuchsia-300">
            Performance
          </span>
        </div>
      </motion.div>

      {/* Awards / Certifications / Partners */}
      <div className="grid gap-5">
        {[
          {
            title: "Awards",
            items: awards,
            color: "blue",
            icon: <BarChart3 className="h-5 w-5" />,
          },
          {
            title: "Certifications",
            items: certifications,
            color: "violet",
            icon: <Target className="h-5 w-5" />,
          },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-blue-400/30 hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.035] sm:rounded-[2rem] sm:p-8"
          >
            <div
              className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                card.color === "blue"
                  ? "bg-blue-500/10 opacity-50"
                  : "bg-violet-500/10 opacity-50"
              }`}
            />

            <div className="relative">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    card.color === "blue"
                      ? "border-blue-400/20 bg-blue-500/10 text-blue-500 dark:text-blue-300"
                      : "border-violet-400/20 bg-violet-500/10 text-violet-500 dark:text-violet-300"
                  }`}
                >
                  {card.icon}
                </div>

                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.25em] ${
                      card.color === "blue"
                        ? "text-blue-500 dark:text-blue-300"
                        : "text-violet-500 dark:text-violet-300"
                    }`}
                  >
                    {card.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our commitment to excellence
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {card.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        card.color === "blue"
                          ? "bg-blue-500/15 text-blue-500 dark:text-blue-300"
                          : "bg-violet-500/15 text-violet-500 dark:text-violet-300"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-fuchsia-400/30 dark:border-white/10 dark:bg-white/[0.035] sm:rounded-[2rem] sm:p-8"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-500 dark:text-fuchsia-300">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500 dark:text-fuchsia-300">
                  Technology Partners
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tools that power better results
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {partners.map((partner) => (
                <motion.span
                  key={partner}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="rounded-full border border-border bg-background/70 px-4 py-2.5 text-xs font-semibold text-muted-foreground shadow-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-300 sm:text-sm"
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>


    {/* Team & Values */}
    <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300">
              Meet Our Team
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-foreground dark:text-white sm:text-2xl">
              The people behind the work
            </h3>
          </div>
        </div>

        <div className="grid gap-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
            >
              <p className="text-lg font-bold text-foreground dark:text-white">
                {member.name}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300 sm:text-xs">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {member.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 dark:text-violet-300">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
              Core Values
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-foreground dark:text-white sm:text-2xl">
              What drives us forward
            </h3>
          </div>
        </div>

        <div className="grid gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: -5 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:border-violet-400/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
            >
              <p className="text-lg font-bold text-foreground dark:text-white">
                {value.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {value.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>


    {/* Timeline / Success Stories / Downloads */}
    <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

      {/* Company Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300">
          Company Timeline
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-foreground dark:text-white">
          Our journey
        </h3>

        <div className="mt-8 space-y-7">
          {companyTimeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xs font-extrabold text-blue-500 dark:text-blue-300">
                {item.year}
              </div>
              <p className="pt-2 text-sm leading-7 text-muted-foreground">
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Success Stories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
          Client Success Stories
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-foreground dark:text-white">
          Results that matter
        </h3>

        <div className="mt-8 space-y-4">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:border-violet-400/30 dark:border-white/10 dark:bg-white/[0.025]"
            >
              <p className="text-base font-bold text-foreground dark:text-white">
                {story.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {story.summary}
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
                {story.company}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Downloads */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-500 dark:text-fuchsia-300">
          Free Downloads
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-foreground dark:text-white">
          Resources to get started
        </h3>

        <div className="mt-8 space-y-4">
          {[
            "Website Audit Guide",
            "SEO Growth Checklist",
            "Strategy Brief Template",
          ].map((item, index) => (
            <motion.button
              key={item}
              type="button"
              whileHover={{ x: 5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/60 px-5 py-5 text-left text-sm font-semibold text-foreground transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/5 dark:border-white/10 dark:bg-white/[0.025] dark:text-white"
            >
              <span>{item}</span>
              {/* <ArrowRight className="h-4 w-4 shrink-0 text-blue-500 transition-transform duration-300 group-hover:translate-x-1 dark:text-blue-300" /> */}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>


    {/* Comparison / Learning Center */}
    <div className="mt-6 grid gap-6 lg:grid-cols-2">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300">
          Service Comparison
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-foreground dark:text-white">
          See how we work
        </h3>

        <div className="mt-7 space-y-4">
          {[
            {
              title: "Website process timeline",
              description:
                "From discovery to launch, every milestone is mapped and measured.",
            },
            {
              title: "Before & after gallery",
              description:
                "Our work is designed to be compelling, clear, and easy for stakeholders to approve.",
            },
            {
              title: "Client dashboard preview",
              description:
                "Live reporting and monthly report dashboards keep everyone aligned.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:border-blue-400/30 dark:border-white/10 dark:bg-white/[0.025]"
            >
              <p className="font-bold text-foreground dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
          Learning Center
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-foreground dark:text-white">
          Knowledge for growth
        </h3>

        <div className="mt-7 space-y-4">
          {[
            {
              title: "Blog",
              description:
                "Smart insights on branding, growth, and UX systems.",
            },
            {
              title: "Resources",
              description:
                "Tools, audits, and premium guides for growth operators.",
            },
            {
              title: "Webinar section",
              description:
                "On-demand sessions and event content for teams that want to move faster.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:border-violet-400/30 dark:border-white/10 dark:bg-white/[0.025]"
            >
              <p className="font-bold text-foreground dark:text-white">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>


{/* ========================= CTA SECTION ========================= */}
<section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.65, 0.3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.035] to-transparent" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 45, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="group relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-slate-950 via-[#10172c] to-slate-950 p-7 text-center shadow-2xl shadow-blue-950/30 ring-1 ring-white/5 sm:rounded-[2.5rem] sm:p-12 lg:p-16"
  >
    {/* Animated glow */}
    <motion.div
      animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"
    />
    <motion.div
      animate={{ x: ["20%", "-20%", "20%"], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]"
    />

    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/5" />

    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5"
      >
        <Sparkles className="h-4 w-4 text-blue-300" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
          Let's Work Together
        </span>
      </motion.div>

      <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
        Ready to scale your{" "}
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          digital presence?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
        Join the forward-thinking brands that trust Webcore360 to deliver
        premium marketing, design, and technical excellence.
      </p>

      <motion.div
        whileHover={{ scale: 1.06, y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="mt-9 inline-block"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full border-0 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-8 py-6 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 sm:px-10 sm:py-7 sm:text-base"
        >
          <a href="#contact" className="flex items-center gap-3">
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  </motion.div>
</section>


{/* ========================= CONTACT SECTION ========================= */}
<section
  id="contact"
  className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
>
  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, -35, 0], y: [0, 35, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-20 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
    />
  </div>

  <div className="relative mx-auto max-w-[1400px]">
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">

      {/* Left: Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-w-0 flex-col gap-7 sm:gap-8"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-5 py-2.5 shadow-lg shadow-blue-500/5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300">
              Contact Us
            </span>
            <Sparkles className="h-4 w-4 text-violet-400" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-foreground dark:text-white sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            together.
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            From first idea to final launch, our team is with you every step.
            Get a tailored proposal, strategy session, or simply a conversation
            — we're ready.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { value: "25+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "2+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-[1.5rem] border border-border/70 bg-card/70 p-4 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 dark:border-white/10 dark:bg-white/[0.035] sm:p-5"
            >
              <p className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-5 text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {[
            {
              title: "Email",
              value: "info@webcore360.com",
              detail: "Reply within 1 business day",
              href: "mailto:info@webcore360.com",
              icon: <Mail className="h-5 w-5" />,
              color: "blue",
            },
            {
              title: "Phone",
              value: "+1 (609) 982-4542",
              detail: "Mon–Fri · 9am–6pm ET",
              href: "tel:+16099824542",
              icon: <Phone className="h-5 w-5" />,
              color: "violet",
            },
            {
              title: "WhatsApp",
              value: "Message us now",
              detail: "Quick questions & scope checks",
              href: "https://wa.me/16099824542",
              icon: <MessageCircle className="h-5 w-5" />,
              color: "emerald",
              external: true,
            },
            {
              title: "Calendly",
              value: "Start a project",
              detail: "Pick a time that works for you",
              href: "https://calendly.com/webcore360/strategy",
              icon: <CalendarDays className="h-5 w-5" />,
              color: "fuchsia",
              external: true,
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="group flex min-w-0 items-start gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 p-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/[0.035] sm:p-5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                  item.color === "blue"
                    ? "border-blue-400/20 bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 dark:text-blue-300"
                    : item.color === "violet"
                      ? "border-violet-400/20 bg-violet-500/10 text-violet-500 group-hover:bg-violet-500/20 dark:text-violet-300"
                      : item.color === "emerald"
                        ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 dark:text-emerald-300"
                        : "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-500 group-hover:bg-fuchsia-500/20 dark:text-fuchsia-300"
                }`}
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 break-words text-sm font-bold text-foreground transition-colors group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-300">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.65 }}
          className="rounded-[1.75rem] border border-border/70 bg-card/70 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-7"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300">
            Why Brands Choose Us
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "Most projects kick off within 48 hours of signing.",
              },
              {
                icon: "🔒",
                title: "NDA & Confidentiality",
                desc: "Your ideas and data are always fully protected.",
              },
              {
                icon: "🏆",
                title: "Award-Winning Work",
                desc: "Recognized for excellence in design and digital strategy.",
              },
              {
                icon: "🔄",
                title: "Unlimited Revisions",
                desc: "We iterate until you're 100% satisfied with the result.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-foreground dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>


      {/* Right: Contact Image */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-blue-950/20 ring-1 ring-white/5 sm:min-h-[550px] lg:sticky lg:top-28 lg:min-h-[700px]"
      >
        <img
          src="/images/usa-office.jpg"
          alt="WebCore360 Team"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/20 opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-xs">
                Let's Create Something Great
              </span>
            </div>

            <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Ready to build something{" "}
              <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              Bring us your vision and we'll deliver the premium digital
              experience your brand deserves.
            </p>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-block"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full border-0 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-7 py-6 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 sm:px-9"
              >
                <a href="/contact-us" className="flex items-center gap-3">
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
        </main>

      </div>
    </>
  );
}

export default HomePage;
