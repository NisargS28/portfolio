'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ValueCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-start p-6 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl hover:shadow-lg transition-shadow duration-300'
    >
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold mb-3 text-dark dark:text-light'>{title}</h3>
      <p className='text-base text-dark/75 dark:text-light/75'>{description}</p>
    </motion.div>
  )
}

const LearningPhilosophy = () => {
  const values = [
    {
      title: "Continuous Learning",
      description: "I believe in staying curious and constantly expanding my knowledge. Technology evolves rapidly, and I'm committed to learning new tools, frameworks, and best practices.",
      icon: "📚"
    },
    {
      title: "Quality Over Quantity",
      description: "Every project deserves attention to detail. I focus on writing clean, maintainable code that stands the test of time rather than rushing to completion.",
      icon: "✨"
    },
    {
      title: "User-Centric Design",
      description: "The end user is at the heart of every decision I make. I strive to create intuitive, accessible experiences that delight and empower users.",
      icon: "🎯"
    },
    {
      title: "Collaborative Growth",
      description: "I thrive in collaborative environments where ideas are shared freely. Learning from others and contributing to the community makes us all better developers.",
      icon: "🤝"
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
        Learning Philosophy & Values
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        These core principles guide my approach to development and shape how I grow as a professional.
      </motion.p>
      
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1 sm:gap-6'>
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default LearningPhilosophy
