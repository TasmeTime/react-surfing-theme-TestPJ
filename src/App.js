import "./App.css";
import Article from "./components/Article.component";
import ArticleSmall from "./components/ArticleSmall.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import Hero from "./components/Hero.component.js";
import MediaContent from "./components/MediaContent.component";
import Quote from "./components/Quote.component";
import Shop from "./components/Shop.component";
import Subscribe from "./components/Subscribe.component";
import bgImg1 from "./assets/images/bgImg1.png";
import bgImg2 from "./assets/images/bgImg2.png";

function App() {
  return (
    <div className="App">
      <div className="bgLineContainer">
        <span className="bgLine l1"></span>
        <span className="bgLine l2"></span>
        <span className="bgLine l3"></span>
        <span className="bgLine l4"></span>
        <span className="bgLine l5"></span>
      </div>
      <div className="bgImagesContainer">
        <img src={bgImg2} className="bgImg2" />
        <img src={bgImg1} className="bgImg1" />
      </div>
      <Hero />
      <Quote />
      <MediaContent />
      <Shop />
      <Article />
      <ArticleSmall />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
