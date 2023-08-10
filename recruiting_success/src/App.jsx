import React from 'react';
import styles from './style';
import { Navbar,  Footer, Enroll } from './components';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Page from './Page';



function App () {
  return(
    <BrowserRouter>
    <div>
      <div className={`${styles.flexCenter}`} >
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      
        <Routes>
        <Route path='/' element= {<Page />} />
          <Route path='/page' element= {<Page />} />
          <Route path='/Enroll' element= {<Enroll />} />
        </Routes>
      
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
        </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
