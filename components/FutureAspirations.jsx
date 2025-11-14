'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AspirationsCard = ({ title, items, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-start p-6 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl hover:shadow-lg transition-shadow duration-300'
    >
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold mb-4 text-dark dark:text-light'>{title}</h3>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li key={index} className='text-base text-dark/75 dark:text-light/75 flex items-start'>
            <span className='text-orange-500 mr-2'>▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const FutureAspirations = () => {
  const aspirationsData = [
    {
      title: "Career Goals",
      icon: "🎯",
      items: [
        "Become a Full Stack Architect with expertise in scalable system design",
        "Lead development teams on high-impact projects",
        "Contribute to open-source projects and build developer tools",
        "Mentor aspiring developers and share knowledge through technical writing"
      ]
    },
    {
      title: "Areas for Further Study",
      icon: "📖",
      items: [
        "Advanced TypeScript patterns and design principles",
        "Cloud architecture (AWS, Azure, Google Cloud)",
        "DevOps and CI/CD pipeline optimization",
        "Machine Learning integration in web applications",
        "Web3 and blockchain technology"
      ]
    },
    {
      title: "Continuous Improvement Strategies",
      icon: "🚀",
      items: [
        "Complete at least 2 advanced online courses per year",
        "Build and deploy one personal project monthly",
        "Participate in hackathons and coding challenges",
        "Read technical blogs and documentation regularly",
        "Attend tech conferences and networking events",
        "Practice system design and algorithmic problem solving"
      ]
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
        Future Aspirations & Professional Development
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        My roadmap for continuous growth and professional excellence in the ever-evolving tech landscape.
      </motion.p>
      
      <div className='grid grid-cols-3 gap-8 lg:grid-cols-1 md:grid-cols-1 sm:gap-6'>
        {aspirationsData.map((aspiration, index) => (
          <AspirationsCard
            key={index}
            title={aspiration.title}
            items={aspiration.items}
            icon={aspiration.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default FutureAspirations
