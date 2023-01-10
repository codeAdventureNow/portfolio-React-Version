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

export default Section;
