import React, { useState } from 'react';
import { Stack } from '../components/Stack/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';

const stackColors = [
  'base-yellow', 
  'base-blue', 
  'base-light-blue',
  'base-white',
];

export const Home = (props) => {
  const [stackAnimated, setStackAnimated] = useState(false);

  return (
    <React.Fragment>
      <Stack colors={ stackColors }
             handleChangeStackAnimated={ () => setStackAnimated(true) }/>
      <Header title="Full Stack Developer & Designer" 
              breadcrumb={ ['Erika Kishi'] } 
              animate={ stackAnimated }>
        <ContactLinksList />
      </Header>

      <section className="section section--full-viewport">
        <header>
          <span className="subheading subheading--medium">Hi, I'm a Kiwi that enjoys dipping my feet in all aspects of development.</span>
          <h2>What I Can Do</h2>
        </header>
      </section>

      <section className="section">
        <header>
          <span className="subheading subheading--medium">What I've worked on.</span>
          <h2>Selected Works & Projects</h2>
        </header>
      </section>

      <section className="section">
        <header>
          <span className="subheading subheading--medium">What I've worked on.</span>
          <h2>Selected Works & Projects</h2>
        </header>
      </section>

      <Footer />
    </React.Fragment>
  );
}

