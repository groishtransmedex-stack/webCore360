import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { processSteps } from '@/data/processSteps.js';
import { ArrowRight, CheckCircle2, Clock, Eye, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};
function HowItWorks() {
    const principles = [
        {
            title: 'Full Transparency',
            description: 'You get a private Slack channel with our developers and designers, plus access to our live work-in-progress Figma boards and build servers. No middle managers, no hidden schedules.',
            icon: Eye,
            accent: 'text-foreground bg-foreground/10'
        },
        {
            title: 'Native Performance',
            description: 'We do not build on top of slow, bloated templates. Every page is structured with custom React/Next.js components and clean styling systems, scoring 95+ on Google PageSpeed.',
            icon: Zap,
            accent: 'text-pink-500 bg-pink-500/10'
        },
        {
            title: 'Iteration Over Guessing',
            description: 'We ship critical pathways early to collect real user data. Instead of spending months speculating on design directions, we optimize layout and messaging based on conversion data.',
            icon: Sparkles,
            accent: 'text-violet-500 bg-violet-500/10'
        },
        {
            title: 'Security & Reliability',
            description: 'Our technical solutions include robust edge deployments, automated backups, SSL configs, and optimized API calls to ensure zero downtime and enterprise-grade data protection.',
            icon: Shield,
            accent: 'text-emerald-500 bg-emerald-500/10'
        }
    ];

    const processFaqs = [
        {
            question: 'How involved do I need to be in the process?',
            answer: 'We require a deep-dive kickoff meeting at the start to align on strategy and goals. After that, we share weekly async updates in Slack with interactive links. You can give feedback whenever fits your time.'
        },
        {
            question: 'Can we change priorities or add features mid-project?',
            answer: 'Yes. Our agile design and development sprints let us pivot easily. If we identify a new organic keyword or user pathway, we adjust the roadmap dynamically during our weekly check-ins.'
        },
        {
            question: 'What happens after the project launches?',
            answer: 'We do not just hand over the keys and walk away. Every project includes a post-launch support window to monitor search analytics, track conversion metrics, and ensure system updates run smoothly.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>How it works | Webcore360</title>
                <meta
                    name="description"
                    content="Discover our transparent, data-driven 3-step digital delivery process designed to take your brand from planning to measurable growth."
                />
            </Helmet>

            <div className="relative overflow-x-hidden text-foreground">
                <main className="relative z-10 pt-32">
                    {/* Hero Section */}
                   <section className="dark relative isolate overflow-hidden px-4 pb-12 pt-16 text-foreground sm:px-6 lg:px-8">

  {/* Background Glows */}
  <motion.div
    className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]"
    animate={{
      x: [0, 35, 0],
      y: [0, 25, 0],
      scale: [1, 1.25, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]"
    animate={{
      x: [0, -30, 0],
      y: [0, -25, 0],
      scale: [1.1, 0.9, 1.1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative mx-auto max-w-5xl text-center">

    {/* Scroll Triggered Animation */}
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
      className="relative z-10"
    >
      {/* Label */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/10 backdrop-blur-xl"
      >
        <Clock className="h-4 w-4 text-blue-400" />
        Our Delivery Framework
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 45, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-5xl font-heading text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-5xl"
      >
        How we work to{" "}
        <motion.span
          className="inline bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
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
          scale your brand
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9 lg:text-xl"
      >
        A transparent, data-driven collaboration process built to take
        your digital products and acquisition strategies from planning
        to profit.
      </motion.p>
    </motion.div>
  </div>
</section>

                    {/* Process Timeline Section */}
                   <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]" />

  <div className="relative mx-auto max-w-5xl">
    <div className="space-y-12">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.slug}
          initial={{ opacity: 0, y: 65, scale: 0.94, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.85,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformPerspective: 1000 }}
        >
          <Link to={`/how-it-works/${step.slug}`} className="group block">
            <Card className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-muted shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardContent className="relative p-6 sm:p-10">
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/0 blur-[80px] transition-all duration-700 group-hover:bg-blue-500/15" />

                <motion.div
                  className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    delay: index * 0.12,
                    ease,
                  }}
                />

                <div className="relative flex flex-col items-start gap-6 md:flex-row md:gap-8">
                  {/* Step Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12 + 0.2,
                      ease,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-foreground shadow-lg transition-shadow duration-500 group-hover:shadow-blue-500/20"
                  >
                    <span className="text-3xl font-extrabold">
                      {step.number}
                    </span>
                  </motion.div>

                  <div className="w-full min-w-0 flex-1">
                    {/* Title and Timeframe */}
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-500">
                        {step.title}
                      </h3>

                      <span className="rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-all duration-300 group-hover:border-blue-400/40">
                        {step.timeframe}
                      </span>
                    </div>

                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-6 border-t border-border/60 pt-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                        Key Phase Deliverables
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {step.details &&
                          step.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -18 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false }}
                              transition={{
                                duration: 0.55,
                                delay: index * 0.12 + idx * 0.07 + 0.25,
                                ease,
                              }}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                              <span className="leading-6">{detail}</span>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

                    {/* Philosophy Section */}
                    <section className="relative isolate overflow-hidden border-t border-border/40 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
  <motion.div
    className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[110px]"
    animate={{
      scale: [1, 1.3, 1],
      x: [0, -25, 0],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative mx-auto max-w-5xl">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16 } },
      }}
      className="mb-16 text-center"
    >
      <motion.p
        variants={reveal}
        transition={{ duration: 0.7, ease }}
        className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500"
      >
        Core Principles
      </motion.p>

      <motion.h2
        variants={reveal}
        transition={{ duration: 0.8, ease }}
        className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-foreground dark:text-white sm:text-4xl lg:text-5xl"
      >
        Our development and{" "}
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          scaling philosophy.
        </span>
      </motion.h2>
    </motion.div>

    {/* Principle Cards */}
    <div className="grid gap-6 md:grid-cols-2">
      {principles.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 55,
              scale: 0.93,
              rotateX: 6,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -9,
              scale: 1.02,
              transition: { duration: 0.35 },
            }}
            style={{ transformPerspective: 1000 }}
            className="group relative isolate overflow-hidden rounded-[1.5rem] border border-border/80 bg-card p-6 shadow-lg transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 sm:rounded-[2rem] sm:p-8"
          >
            {/* Top Gradient Border */}
            <motion.div
              className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: index * 0.15, ease }}
            />

            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-blue-500/0 blur-[70px] transition-all duration-700 group-hover:bg-blue-500/20" />

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: index * 0.15 + 0.2,
                ease,
              }}
              whileHover={{ scale: 1.12, rotate: 7 }}
              className={`flex h-12 w-12 items-center justify-center rounded-[1rem] shadow-md transition-shadow duration-500 group-hover:shadow-lg ${item.accent}`}
            >
              <Icon className="h-5 w-5" />
            </motion.div>

            <h3 className="mt-5 text-xl font-extrabold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-6 h-[2px] w-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-24" />
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

                    {/* Process FAQ Section */}
                   <section className="relative isolate overflow-hidden border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
  <motion.div
    className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]"
    animate={{
      scale: [1, 1.25, 1],
      y: [0, -25, 0],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative mx-auto max-w-4xl">
    {/* FAQ Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.16 } },
      }}
      className="mb-12 text-center"
    >
      <motion.div
        variants={reveal}
        transition={{ duration: 0.7, ease }}
      >
        <motion.div
          initial={{ scale: 0.6, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease }}
        >
          <HelpCircle className="mx-auto mb-4 h-9 w-9 text-blue-500" />
        </motion.div>
      </motion.div>

      <motion.h2
        variants={reveal}
        transition={{ duration: 0.8, ease }}
        className="mx-auto text-3xl font-extrabold tracking-tight text-foreground dark:text-white sm:text-4xl"
      >
        Process &amp; Partnership{" "}
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          FAQs
        </span>
      </motion.h2>
    </motion.div>

    {/* FAQ Items */}
    <div className="space-y-4">
      {processFaqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -3,
            transition: { duration: 0.25 },
          }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem
              value={`item-${index}`}
              className="group rounded-[1.25rem] border border-border/80 bg-muted px-5 py-1 shadow-sm transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/[0.06]"
            >
              <AccordionTrigger className="text-left text-base font-bold text-foreground transition-colors duration-300 hover:text-blue-500 hover:no-underline dark:text-white">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pt-2 text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      ))}
    </div>
  </div>
</section>
                    {/* CTA Banner */}
                    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/40">
                        <div className="mx-auto max-w-5xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-muted-foreground mb-6 font-medium">Ready to discuss your scaling roadmap?</p>
                                <Button
                                    asChild
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-base font-semibold transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                                >
                                    <Link to="/contact-us">Contact Us</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default HowItWorks;
