'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SWOTCard = ({ title, items, colorClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl border-2 ${colorClass}`}
    >
      <h3 className='text-2xl font-bold mb-4'>{title}</h3>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li key={index} className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const SelfAssessment = () => {
  const swotData = {
    strengths: [
      "Strong proficiency in React.js and Next.js",
      "Quick learner with adaptability to new technologies",
      "Problem-solving mindset with attention to detail",
      "Effective communication and collaboration skills"
    ],
    weaknesses: [
      "Limited experience with backend architecture at scale",
      "Need to strengthen DevOps and cloud deployment skills",
      "Time management when juggling multiple projects",
      "Could improve technical writing and documentation"
    ],
    opportunities: [
      "Growing demand for full-stack developers",
      "Emerging technologies like AI/ML integration",
      "Remote work opening global opportunities",
      "Open-source contributions for visibility and growth"
    ],
    threats: [
      "Rapidly evolving technology landscape",
      "Increasing competition in the tech industry",
      "Automation potentially replacing certain roles",
      "Economic uncertainties affecting hiring trends"
    ]
  }

  const reflections = [
    {
      title: "Key Achievements",
      content: "Successfully completed 10+ web projects, mastered modern React patterns, built responsive and accessible interfaces, and continuously expanded my technical skill set."
    },
    {
      title: "Lessons Learned",
      content: "The importance of writing clean, maintainable code, the value of user feedback in driving improvements, and that continuous learning is essential in staying relevant in tech."
    },
    {
      title: "Areas for Growth",
      content: "Backend architecture, cloud infrastructure, system design at scale, and leadership skills for guiding development teams effectively."
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
        Conclusion & Self-Assessment
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        A comprehensive evaluation of my journey, achievements, and continuous path to excellence.
      </motion.p>

      {/* Personal Reflections */}
      <div className='mb-12'>
        <h3 className='text-3xl md:text-2xl font-bold mb-6 text-dark dark:text-light'>Personal Reflections</h3>
        <div className='grid grid-cols-3 gap-6 lg:grid-cols-1 md:grid-cols-1'>
          {reflections.map((reflection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='p-6 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl'
            >
              <h4 className='text-xl font-bold mb-3 text-orange-500'>{reflection.title}</h4>
              <p className='text-dark/75 dark:text-light/75'>{reflection.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Self-Evaluation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='mb-12 p-6 bg-orange-100 dark:bg-orange-900/20 rounded-xl border-2 border-orange-500'
      >
        <h3 className='text-2xl font-bold mb-4 text-dark dark:text-light'>Self-Evaluation Against Initial Goals</h3>
        <p className='text-dark/75 dark:text-light/75 mb-4'>
          When I started my journey in web development, my goal was to become proficient in modern frameworks and build real-world applications. I've successfully achieved these objectives by:
        </p>
        <ul className='space-y-2 text-dark/75 dark:text-light/75'>
          <li className='flex items-start'><span className='text-orange-500 mr-2'>✓</span> Mastering React.js and Next.js ecosystem</li>
          <li className='flex items-start'><span className='text-orange-500 mr-2'>✓</span> Completing 10+ functional projects</li>
          <li className='flex items-start'><span className='text-orange-500 mr-2'>✓</span> Building responsive, user-friendly interfaces</li>
          <li className='flex items-start'><span className='text-orange-500 mr-2'>✓</span> Establishing a foundation for continuous growth</li>
        </ul>
      </motion.div>

      {/* SWOT Analysis */}
      <div>
        <h3 className='text-3xl md:text-2xl font-bold mb-6 text-dark dark:text-light text-center'>SWOT Analysis</h3>
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-1 md:grid-cols-1'>
          <SWOTCard
            title="Strengths"
            items={swotData.strengths}
            colorClass="bg-green-50 dark:bg-green-900/20 border-green-500 text-dark dark:text-light"
          />
          <SWOTCard
            title="Weaknesses"
            items={swotData.weaknesses}
            colorClass="bg-red-50 dark:bg-red-900/20 border-red-500 text-dark dark:text-light"
          />
          <SWOTCard
            title="Opportunities"
            items={swotData.opportunities}
            colorClass="bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-dark dark:text-light"
          />
          <SWOTCard
            title="Threats"
            items={swotData.threats}
            colorClass="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-dark dark:text-light"
          />
        </div>
      </div>
    </div>
  )
}

export default SelfAssessment
