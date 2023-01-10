import './App.css';
import { useState } from 'react';

function Header() {
  return (
    <header className='about'>
      <img
        className='about-img'
        id='profile-photo'
        src='/img/profile-photo-1.jpg'
        alt='profile-photo'
      />
      <div class='about-content'>
        <h1 class='h1-color'>Nate Mueller</h1>

        <h2>Front End Dev</h2>
        <p>
          I began learning Javascript in January of 2022 through a mix of online
          courses and a one-on-one mentorship. My focus is building modern web
          apps with React.
        </p>
      </div>
    </header>
  );
}

function Section() {
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className='img-container'>
        <a href='https://git-friends.vercel.app/' target='_blank'>
          <img
            className='project-images'
            src='/img/friends.png'
            alt='Git-friends'
          />
        </a>
        <a href='https://wikipedia-search-umber.vercel.app/' target='_blank'>
          <img
            className='project-images'
            src='/img/Wikipedia-Search.png'
            alt='Wikipedia-Search'
          />
        </a>
        <a
          href='https://magneticspeaking.com/executivecommunication/'
          target='_blank'
        >
          <img
            className='project-images'
            src='/img/magnetic-speaking.png'
            alt='Magnetic Speaking'
          />
        </a>
      </div>

      <hr class='hr' />
    </section>
  );
}

function Footer() {
  return (
    <footer class='profiles'>
      <h2>Profiles</h2>
      <p>Let's connect!</p>
      <div className='icon-container'>
        <a href='https://github.com/codeAdventureNow' target='_blank'>
          <img
            className='icons'
            src='/img/square-github.svg'
            alt='githubprofile'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/nate-mueller-b50317/'
          target='_blank'
        >
          <img
            className='icons'
            src='/img/linkedin.svg'
            alt='linkedin profile'
          />
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
