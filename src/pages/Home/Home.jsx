import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import './Home.css';
import data from '../../data'
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  const cards = data.map(item => 
    <Card 
      key={item.id}
      {...item}
    />)

  return (
    <>
      <div id="homeDiv">
        <Header />
        <img id="photoGrid" src='/photo-grid.png' alt="grid photo" />
        <div className="texts">
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        <section className="cards">
          {cards}
        </section>
      </div>
      <Footer />
    </>
  )
}