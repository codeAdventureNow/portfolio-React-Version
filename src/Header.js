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

export default Header;
