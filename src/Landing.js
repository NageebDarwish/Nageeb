export default function Landing() {
  return (
    <div className="landing pb-5">
      <div className="container">
        <div className="row align-items-center justify-content-center  flex-md-row  flex-column-reverse flex-wrap">
          <div className="col-md-5 d-flex mt-4 align-items-center justify-content-end position-relative overflow-hidden">
            <img
              src={require("./assest/1.jpg")}
              alt="Nageeb Darwish"
              className="landing-img"
              data-aos="fade-up"
            />
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <h1 className="landing-title">
              Hi, I'm <span>Nageeb</span>
            </h1>
            <h5 className="text-secondary">Full Stack Web Developer</h5>

            <a
              href="#projects"
              className="btn btn-warning text-white mt-2 px-4"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
