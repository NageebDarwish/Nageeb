export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light position-fixed">
      <div className="container-fluid d-flex align-items-center justify-content-between container">
        <a className="navbar-brand" href="/">
          N
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#projects">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
