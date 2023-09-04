export default function About() {
  return (
    <div className="project py-5 " data-aos="fade-right" id="projects">
      <div className="container pt-2">
        <div className="row align-items-center justify-content-between flex-column text-center text-md-start ">
          <h1 className="font-weight-bold col-md-4 service-title text-center">
            Projects
          </h1>
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            <a
              href="https://bravoo.online/"
              className="col-md-4 col-12 gradient-border project-1"
              target={"_blank"}
            >
              <div className="overlay"></div>
            </a>
            <a
              href="https://malek-finance.com/"
              className="col-md-4 col-12 gradient-border project-2"
              target={"_blank"}
            >
              <div className="overlay"></div>
            </a>
            <a
              href="http://water-sa.online/"
              className="col-md-4 col-12 gradient-border project-4"
              target={"_blank"}
            >
              <div className="overlay"></div>
            </a>
            <a
              href="http://icom-digital.net/"
              className="col-md-4  gradient-border project-3"
              target={"_blank"}
            >
              <div className="overlay"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
