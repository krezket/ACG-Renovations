import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import './Home.css';

import fp1 from '../../assets/images/fp.jpg';
import fp2 from '../../assets/images/fp2.jpg';
import fp3 from '../../assets/images/fp3.jpg';
import fp4 from '../../assets/images/fp4.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <main className='fp-main'>

        <section className='fp-section-1'>
          <div className='fp-section-1-div'>
            <h1>Proudly serving the greater Seattle area for more than 10 years.</h1>
            <p>Our mission is to provide the highest quality home renovation services at competitive prices.</p>

            <Link to='/estimate'>
              <button>
                <h2>Get Your Free Estamate</h2>
              </button>
            </Link>
          </div>

          <div className='fp-image-div'>
            <img src={fp4} alt="acg-renovations" />
          </div>
        </section>

        <section className="fp-section-2">
          <div>
            <img src={fp3} alt="acg-renovations" />
          </div>

          <div className='fp-section-2-div'>
            <h1>We are Committed to Your Satisfaction</h1>
          </div>
        </section>

        <section className="fp-section-3">
          <div className='fp-section-3-div'>
            <h1>We are Committed to Your Satisfaction</h1>
          </div>

          <div className='fp-image-div'>
            <img src={fp2} alt="acg-renovations" />
          </div>
        </section>

        <section className="fp-section-4">
          <div className='fp-image-div'>
            <img src={fp1} alt="acg-renovations" />
          </div>
        </section>

      </main>
    </>
  )
}
