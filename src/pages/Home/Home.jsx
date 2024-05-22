import Header from '../../components/Header/Header';
import './Home.css';

import fp1 from '../../assets/images/fp.jpg';
import fp2 from '../../assets/images/fp2.jpg';
import fp3 from '../../assets/images/fp3.jpg';
import fp4 from '../../assets/images/fp4.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <main>

        <section className='fp-section-1'>
          <div className='fp-section-div'>
            <h2>Proudly serving the greater Seattle area for more than 10 years.</h2>
            <p>Our mission is to provide the highest quality home renovation services at competitive prices.</p>
            <button>
              <h1>Get Your Free Estamate</h1>
            </button>
          </div>

          <div className='fp-image-div'>
            <img src={fp1} alt="acg-renovations" />
          </div>
        </section>

      </main>
    </>
  )
}
