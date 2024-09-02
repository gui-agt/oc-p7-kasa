import Header from '../components/Header';
import Banner from '../components/Banner';
import ImageCliffs from '../assets/image_cliffs.png';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
// import Gallery from '../components/Gallery';
// import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Banner 
                image={ImageCliffs} 
                text="Chez vous, partout et ailleurs" 
                darkMode={true} 
            />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;