import React from 'react'

const Page = ({currentPage}) => {

  const renderPage = (page) => {
    switch (page) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
          return <Contact />;      
      case 'resume':
          return <Resume />;
      default:
        return <About />
    }
  return (
    <div>Page</div>
  )
}

export default Page