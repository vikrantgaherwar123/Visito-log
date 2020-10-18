import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import VisitorLogContainer from './components/VisitorLogContainer';
import CsvUpload from './components/csvUload';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
    <Header/>
    <CsvUpload/>
    <Footer/>
    </div>
  );
}

export default App;
