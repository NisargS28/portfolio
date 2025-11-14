'use client'
import React from 'react'
import { motion } from 'framer-motion'

const CaseStudyCard = ({ title, scenario, ethicalImplications, personalReflection, icon, accentColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='p-6 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl hover:shadow-lg transition-shadow duration-300 mb-8'
    >
      <div className='flex items-start gap-4 mb-4'>
        <div className='text-4xl'>{icon}</div>
        <h3 className={`text-2xl md:text-xl font-bold ${accentColor}`}>{title}</h3>
      </div>

      <div className='space-y-4'>
        <div>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Scenario:</h4>
          <p className='text-dark/75 dark:text-light/75'>{scenario}</p>
        </div>

        <div>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Ethical Implications:</h4>
          <p className='text-dark/75 dark:text-light/75'>{ethicalImplications}</p>
        </div>

        <div className={`p-4 ${accentColor === 'text-blue-500' ? 'bg-blue-50 dark:bg-blue-900/20' : accentColor === 'text-green-500' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-purple-50 dark:bg-purple-900/20'} rounded-lg`}>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Personal Reflection:</h4>
          <p className='text-dark/75 dark:text-light/75 italic'>"{personalReflection}"</p>
        </div>
      </div>
    </motion.div>
  )
}

const GlobalAwareness = () => {
  const caseStudies = [
    {
      title: "Accessibility & Digital Inclusion",
      icon: "♿",
      accentColor: "text-blue-500",
      scenario: "While developing a web application for a client, I recognized that the initial design didn't adequately consider users with disabilities. Many people worldwide face barriers to accessing digital content, and approximately 15% of the global population lives with some form of disability.",
      ethicalImplications: "Creating inaccessible websites perpetuates digital exclusion, limiting opportunities for people with disabilities in education, employment, and social participation. As developers, we have an ethical responsibility to ensure our work is inclusive and doesn't discriminate against any user group. Ignoring accessibility standards violates principles of equal access and social justice.",
      personalReflection: "This experience made me realize that ethical development goes beyond writing functional code—it's about creating equitable digital experiences. I advocated for implementing WCAG 2.1 guidelines, integrated screen reader compatibility, keyboard navigation, and proper ARIA labels. Though it required additional time and effort, ensuring accessibility became a non-negotiable principle in my work. I now view accessibility as a fundamental right, not an optional feature."
    },
    {
      title: "Data Privacy & User Trust",
      icon: "🔒",
      accentColor: "text-green-500",
      scenario: "During a project involving user analytics, I was asked to implement tracking features that would collect extensive user data without explicit consent. The goal was to gather insights for marketing purposes, but the approach raised concerns about privacy violations, especially considering global data protection regulations like GDPR and the increasing awareness around digital privacy rights.",
      ethicalImplications: "Collecting user data without informed consent violates fundamental privacy rights and erodes trust between users and platforms. In an era where data breaches and misuse are rampant, developers must prioritize user autonomy and transparency. Failing to respect privacy can lead to legal consequences, reputational damage, and most importantly, harm to individuals whose data is exploited.",
      personalReflection: "I firmly believe that user trust is the foundation of ethical technology. I proposed an alternative approach that prioritized transparency: implementing clear consent mechanisms, providing granular privacy controls, and collecting only essential data with explicit user permission. I educated stakeholders about the long-term value of ethical data practices over short-term gains. This experience reinforced my commitment to putting user rights first, even when facing business pressure."
    },
    {
      title: "Environmental Impact of Technology",
      icon: "🌍",
      accentColor: "text-purple-500",
      scenario: "While optimizing a web application, I learned about the environmental cost of digital technologies. Data centers consume massive amounts of energy, contributing to carbon emissions. As a developer, I questioned how my work impacts climate change—a global issue affecting billions of people, particularly vulnerable communities in developing nations.",
      ethicalImplications: "The tech industry's carbon footprint is significant and growing. Inefficient code, unnecessary features, and oversized assets contribute to higher energy consumption. Developers have an ethical obligation to consider the environmental impact of their work, especially as climate change disproportionately affects marginalized communities globally. Sustainable development isn't just an environmental issue—it's a matter of global justice.",
      personalReflection: "This awareness transformed my approach to development. I began implementing performance optimization techniques not just for speed, but for sustainability: compressing images, minimizing JavaScript bundles, leveraging caching, and choosing green hosting providers. I also advocate for 'digital minimalism'—questioning whether every feature is necessary. As global citizens, developers must consider the environmental consequences of our technical decisions and strive to build a more sustainable digital future."
    }
  ]

  const principles = [
    {
      title: "Inclusive Design",
      description: "Building technology that serves all users, regardless of ability, location, or background."
    },
    {
      title: "Privacy by Design",
      description: "Prioritizing user privacy and data protection from the initial stages of development."
    },
    {
      title: "Sustainable Development",
      description: "Minimizing environmental impact through efficient code and responsible resource usage."
    },
    {
      title: "Ethical Innovation",
      description: "Considering social impact and moral implications before implementing new technologies."
    }
  ]

  return (
    <div className='w-full py-16 md:py-12'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-5xl md:text-4xl sm:text-3xl font-bold text-center mb-4 text-dark dark:text-light'
      >
        Global Awareness & Ethical Considerations
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        Demonstrating global perspective and ethical reasoning in technology development.
      </motion.p>

      {/* Case Studies */}
      <div className='max-w-5xl mx-auto mb-12'>
        <h3 className='text-3xl md:text-2xl font-bold mb-8 text-dark dark:text-light'>Case Studies & Scenarios</h3>
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            title={study.title}
            icon={study.icon}
            accentColor={study.accentColor}
            scenario={study.scenario}
            ethicalImplications={study.ethicalImplications}
            personalReflection={study.personalReflection}
          />
        ))}
      </div>

      {/* Guiding Principles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='max-w-5xl mx-auto'
      >
        <h3 className='text-3xl md:text-2xl font-bold mb-6 text-dark dark:text-light text-center'>My Guiding Ethical Principles</h3>
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-1 md:grid-cols-1'>
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='p-6 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500 rounded-xl'
            >
              <h4 className='text-xl font-bold mb-2 text-dark dark:text-light'>{principle.title}</h4>
              <p className='text-dark/75 dark:text-light/75'>{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Commitment Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10 rounded-xl border-2 border-orange-500'
      >
        <h3 className='text-2xl font-bold mb-4 text-dark dark:text-light text-center'>My Commitment</h3>
        <p className='text-dark/75 dark:text-light/75 text-center text-lg'>
          As a developer, I pledge to create technology that respects human dignity, promotes social justice, protects user privacy, and considers environmental impact. I will continuously educate myself on global issues and ethical implications, advocate for responsible practices, and use my skills to build a more inclusive and sustainable digital world.
        </p>
      </motion.div>
    </div>
  )
}

export default GlobalAwareness
