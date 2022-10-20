export default function About() {
  return (
    <div className="service py-5" id="services" data-aos="fade-down">
      <div className="container pt-5">
        <div className="row align-items-center justify-content-between flex-column text-center text-md-start ">
          <h1 className="font-weight-bold col-md-4 service-title text-center">
            Services
          </h1>
          <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
            <div class="card-wrap">
              <div class="card-header one">
                <i class="fas fa-code"></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">Full Website</h1>
                <p class="card-text">
                  Building complete websites, starting with databases, passing
                  through the backend and ending with the front end
                </p>
                <button class="card-btn one">code</button>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header two">
                <i class="fa-brands fa-figma"></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">Design To Code</h1>
                <p class="card-text">
                  Convert any design into code while maintaining the accuracy of
                  the design
                </p>
                <button class="card-btn two">Design</button>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header three">
                <i class="fa-solid fa-table-columns"></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">Dashborads</h1>
                <p class="card-text">
                  Building control panels to control the site (personal, online
                  store, public site ....)
                </p>
                <button class="card-btn three">Dashborad</button>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header four">
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <div class="card-content">
                <h1 class="card-title">More</h1>
                <p class="card-text">
                  Everything related to web development, such as completing,
                  organizing and building codes from scratch
                </p>
                <button class="card-btn four">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
