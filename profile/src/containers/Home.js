import React from 'react';

const Home = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Gyul
            <span className="text-primary">Pwang</span>
          </h1>
          <div className="subheading mb-5">+82-10-4567-9327 ·
            <a href="mailto:name@email.com"> rbfla927@gmail.com</a>
          </div>
          <p className="lead mb-5">History 넣기(살아온 이력)</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gyulpwang">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/gyulpwang">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100003401716592">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    );
};

export default Home;