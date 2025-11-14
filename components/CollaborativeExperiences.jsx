'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = ({ title, role, period, responsibilities, dynamics, achievements, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='p-6 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl hover:shadow-lg transition-shadow duration-300 mb-6'
    >
      <div className='flex items-start gap-4 mb-4'>
        <div className='text-4xl'>{icon}</div>
        <div className='flex-grow'>
          <h3 className='text-2xl md:text-xl font-bold text-dark dark:text-light'>{title}</h3>
          <p className='text-orange-500 font-semibold'>{role}</p>
          <p className='text-sm text-dark/60 dark:text-light/60'>{period}</p>
        </div>
      </div>

      <div className='space-y-4'>
        {/* Roles and Responsibilities */}
        <div>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Roles & Responsibilities:</h4>
          <ul className='space-y-1'>
            {responsibilities.map((item, index) => (
              <li key={index} className='text-dark/75 dark:text-light/75 flex items-start'>
                <span className='text-orange-500 mr-2'>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Team Dynamics */}
        <div>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Team Dynamics & Conflict Resolution:</h4>
          <p className='text-dark/75 dark:text-light/75'>{dynamics}</p>
        </div>

        {/* Achievements */}
        <div>
          <h4 className='font-bold text-lg mb-2 text-dark dark:text-light'>Achievements & Contributions:</h4>
          <ul className='space-y-1'>
            {achievements.map((item, index) => (
              <li key={index} className='text-dark/75 dark:text-light/75 flex items-start'>
                <span className='text-green-500 mr-2'>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const CollaborativeExperiences = () => {
  const experiences = [
    {
      title: "E-Commerce Platform Development",
      role: "Frontend Team Lead",
      period: "June 2024 - September 2024",
      icon: "🛒",
      responsibilities: [
        "Led a team of 4 frontend developers in building responsive UI components",
        "Coordinated with backend team to ensure seamless API integration",
        "Conducted code reviews and mentored junior developers",
        "Managed sprint planning and task distribution using Agile methodology"
      ],
      dynamics: "Our team consisted of members from different time zones and cultural backgrounds. When conflicts arose regarding coding standards, I facilitated open discussions where each team member could voice their perspective. We collaboratively established a unified style guide and implemented automated linting tools, which resolved the issue and improved code consistency across the project.",
      achievements: [
        "Successfully delivered the project 2 weeks ahead of schedule",
        "Improved team code quality by 40% through implementation of best practices",
        "Reduced bug count by 35% through comprehensive testing strategies",
        "Fostered a collaborative environment that increased team productivity by 25%"
      ]
    },
    {
      title: "University Hackathon Project",
      role: "Project Coordinator & Full-Stack Developer",
      period: "March 2024",
      icon: "💡",
      responsibilities: [
        "Coordinated a cross-functional team of 5 members (developers, designers, and data analyst)",
        "Developed both frontend and backend components of the application",
        "Managed project timeline and ensured deliverable milestones were met",
        "Presented the final product to judges and stakeholders"
      ],
      dynamics: "During the 48-hour hackathon, stress levels were high and disagreements emerged about feature priorities. I organized quick stand-up meetings every 6 hours to realign our goals, listen to concerns, and make collective decisions. This transparent communication approach helped us stay focused and work as a cohesive unit despite the pressure.",
      achievements: [
        "Won 2nd place among 50+ competing teams",
        "Built a functional MVP within the tight 48-hour deadline",
        "Successfully integrated AI features into the web application",
        "Received special recognition for best team collaboration"
      ]
    },
    {
      title: "Open Source Contribution Initiative",
      role: "Contributor & Community Member",
      period: "January 2024 - Present",
      icon: "🌐",
      responsibilities: [
        "Contributed bug fixes and feature enhancements to React ecosystem libraries",
        "Reviewed pull requests from other community members",
        "Participated in community discussions and issue triage",
        "Documented code and wrote technical guides for new contributors"
      ],
      dynamics: "Working with a global, asynchronous team required patience and clear communication. When my initial pull requests received critical feedback, I learned to view it as an opportunity for growth rather than criticism. I actively engaged in discussions, incorporated feedback gracefully, and built positive relationships with maintainers and fellow contributors.",
      achievements: [
        "Successfully merged 15+ pull requests across various repositories",
        "Helped resolve 20+ issues reported by the community",
        "Received contributor recognition from major open-source projects",
        "Built a network of developers from around the world"
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
        Collaborative & Leadership Experiences
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        Demonstrating interpersonal skills and the ability to work effectively in diverse teams.
      </motion.p>
      
      <div className='max-w-5xl mx-auto'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            role={experience.role}
            period={experience.period}
            icon={experience.icon}
            responsibilities={experience.responsibilities}
            dynamics={experience.dynamics}
            achievements={experience.achievements}
          />
        ))}
      </div>
    </div>
  )
}

export default CollaborativeExperiences
