'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ name, role, company, message, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='p-8 bg-light dark:bg-dark border-2 border-dark dark:border-light rounded-xl hover:shadow-2xl transition-all duration-300 flex flex-col'
    >
      <div className='text-orange-500 text-5xl mb-4'>"</div>
      <p className='text-base md:text-sm text-dark/75 dark:text-light/75 mb-6 flex-grow italic'>
        {message}
      </p>
      <div className='flex items-center gap-4 mt-auto'>
        <div className='w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold'>
          {image || name.charAt(0)}
        </div>
        <div>
          <h4 className='font-bold text-lg text-dark dark:text-light'>{name}</h4>
          <p className='text-sm text-dark/60 dark:text-light/60'>{role}</p>
          <p className='text-sm text-orange-500'>{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor & Mentor",
      company: "University of Technology",
      message: "Nisarg has consistently demonstrated exceptional problem-solving abilities and a genuine passion for web development. His dedication to learning and his innovative approach to projects make him a standout student. I'm confident he will excel in his career."
    },
    {
      name: "Priya Sharma",
      role: "Senior Developer & Team Lead",
      company: "Tech Solutions Inc.",
      message: "Working with Nisarg has been a pleasure. He quickly grasps new concepts, writes clean and efficient code, and is always eager to take on challenging tasks. His collaborative spirit and technical skills make him a valuable asset to any development team."
    },
    {
      name: "Amit Patel",
      role: "Project Manager",
      company: "Digital Innovations",
      message: "Nisarg delivered exceptional work on our web application project. He not only met all deadlines but also exceeded expectations with his attention to detail and user-focused design approach. His communication skills and professionalism are commendable."
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      company: "Creative Web Studios",
      message: "Nisarg's ability to translate design concepts into functional, responsive websites is impressive. He understands the importance of user experience and consistently delivers pixel-perfect implementations. A truly talented developer with great potential."
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
        Testimonials & Recommendations
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-lg md:text-base sm:text-sm text-dark/75 dark:text-light/75 mb-12 max-w-3xl mx-auto'
      >
        What mentors, colleagues, and clients say about working with me.
      </motion.p>
      
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-1 md:grid-cols-1 sm:gap-6'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            message={testimonial.message}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
