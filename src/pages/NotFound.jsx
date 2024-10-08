import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import './notFound.scss';
import { Link } from 'react-router-dom';

// NotFound component: displays a 404 error page with a message indicating that the requested page does not exist, along with a link to return to the home page.

function NotFound() {
    return (
        <div className="error-page">
            <Header />
            <main className="error-page__content">
                <h1 className="error-page__title">404</h1>
                <p className="error-page__message">
                    <span>Oups! La page que</span>{' '}
                    <span>vous demandez n'existe pas.</span>
                </p>
                <Link to="/" className="error-page__link">
                    Retourner sur la page d'accueil
                </Link>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;
