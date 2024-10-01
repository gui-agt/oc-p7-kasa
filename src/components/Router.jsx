import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';
import NotFound from '../pages/NotFound';

// Router component: defines the application's routes, mapping paths to their corresponding components for navigation.

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Housing />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
