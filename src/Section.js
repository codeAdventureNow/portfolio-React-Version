function Section() {
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className='img-container'>
        <a href='https://getting-friends-react.vercel.app/' target='_blank'>
          <img
            className='project-images'
            src='/img/friends.png'
            alt='Git-friends'
          />
        </a>
        <a href='https://wikipedia-search-react.vercel.app/' target='_blank'>
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
        <a href='https://calculator-react-ashen.vercel.app/' target='_blank'>
          <img
            className='project-images'
            src='/img/React2.png'
            alt='React Calculator'
          />
        </a>
        <a
          href='https://vercel.com/codeadventurenow/login-form-react'
          target='_blank'
        >
          <img
            className='project-images'
            src='/img/Sign-In-Form.png'
            alt='Sign-In-Form'
          />
        </a>
      </div>

      <hr class='hr' />
    </section>
  );
}

export default Section;
