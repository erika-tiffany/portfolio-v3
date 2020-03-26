import React, { useState } from 'react';
import { Stack } from '../components/Stack/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const stackColors = [
  'magnity-yellow', 
  'magnity-purple', 
  'magnity-purple-grey',
  'base-white',
];

export const Magnity = (props) => {
  const [stackAnimated, setStackAnimated] = useState(false);

  return (
    <React.Fragment>
      <Stack colors={ stackColors }
             handleChangeStackAnimated={ () => setStackAnimated(true) }/>
      <Header title="Magnity Application" 
              breadcrumb={ ['Erika Kishi', 'Projects'] } 
              animate={ stackAnimated } />

      <section className="section section--full-viewport">
        <header>
          <span className="subheading subheading--medium">Magnity</span>
          <h2>Magnity</h2>
        </header>
      </section>

      <Footer />
    </React.Fragment>
  );
}