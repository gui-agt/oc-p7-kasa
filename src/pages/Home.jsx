import Header from '../components/Header';
import Banner from '../components/Banner';
import ImageCliffs from '../assets/image_cliffs.png';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

// Home component: renders the home page, including the header, a banner with text, a gallery of items, and the footer.

function Home() {
    return (
        <div className="home">
            <Header />
            <main className="home__content">
                <Banner
                    image={ImageCliffs}
                    text={
                        <>
                            <span>Chez vous, </span>
                            <span>partout et ailleurs</span>
                        </>
                    }
                    darkMode={true}
                />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
