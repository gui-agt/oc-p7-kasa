import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import './notFound.scss'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <div className='error-page'>
        <Header />
        <main className='error-page__content'>
          <h1 className='error-page__title'>404</h1>
          <p className='error-page__message'>Oups! La page que vous recherchez n'existe pas.</p>
          <Link to='/' className='error-page__link'>Retourner sur la page d'accueil</Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default NotFound;