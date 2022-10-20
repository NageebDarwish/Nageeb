export default function About() {
  return (
    <div className="about" data-aos="slide-up" id="about">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between text-center text-md-start ">
          <h1 className="font-weight-bold col-md-4 about-title">About Me</h1>
          <div className="col-md-6">
            <p className="pt-4">
              I'm Full Stack Web Developer , I study at the Faculty of
              Electrical and Electronic Engineering, Extremely motivated to
              constantly develop my skills and grow professionally. I am
              confident in my ability to come up with interesting ideas for web
              pages developing and designing
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/1zc7YSxtr5lYYZ33wPtXmtgUkVk0Vrj1F/view?usp=sharing"
                className="btn btn-warning text-white mt-2 px-4"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="btn btn-outline-warning mt-2 px-4 mx-3"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
