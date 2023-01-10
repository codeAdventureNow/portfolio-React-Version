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

export default Footer;
