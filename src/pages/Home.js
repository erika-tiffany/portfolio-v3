import React from 'react';
import { Footer } from '../components/Footer';
import { Stack } from '../components/Stack';
import { Header } from '../components/Header';

export const Home = (props) => {
    return (
        <React.Fragment>
            <Stack colors={['base-yellow', 'base-blue', 'base-light-blue']}/>
            <Header />
            <section className="section  section--full-viewport">
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