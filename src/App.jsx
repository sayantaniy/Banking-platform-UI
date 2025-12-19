import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {

const users =[

  {img:'https://images.unsplash.com/photo-1560329072-17f59dcd30a4?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   tag:'Satisfied',
   intro:'The digital banking platform offers a seamless and well-structured experience, making everyday financial activities feel simple and effortless.'
  },

  {img:'https://images.unsplash.com/photo-1616769212339-9eea56b0014e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   tag:'Underserved',
   intro:'Users consistently highlight the clean interface and how quickly they can access essential banking features.'},

    {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   tag:'Satisfied',
   intro:'The platform makes everyday banking simple, fast, and stress-free.'},

    {img:'https://images.unsplash.com/photo-1557763686-26805501db4a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   tag:'Satisfied',
   intro:'Strong security measures and reliable performance create a sense of trust and confidence in every transaction.'},

   

  {img:'https://images.unsplash.com/photo-1539800925050-60b19309954e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   tag:'Underbanked',
   intro:'Personalized banking options allow customers to better control their savings, payments, and financial goals.'
  }]

  return (
    <div >
      
      <Section1 
      users={users}
      />
      <Section2 />
    </div>
  )
}

export default App
