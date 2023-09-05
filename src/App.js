import React, {useState} from 'react';
import Header from './components/Header';
import Page from './Page';
import Footer from './components/Footer';

const pages = ['about','portfolio','contact', 'resume']

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  return (
    <div className="wrapper">
      <Header 
      pages={pages} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
     />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
