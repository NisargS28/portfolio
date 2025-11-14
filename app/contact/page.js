import Form from '../../components/Form'
import TransitionEffect from '../../components/TransitionEffect'
import BackToTop from '../../components/BackToTop'
import React from 'react'
export const metadata = {
  title: 'Nisarg Solanki | Contact',
  description: 'Contains contact information',
}
const page = () => {

  return (
    <>
      <TransitionEffect />
      <Form />
      <BackToTop />
    </>
  )
}

export default page