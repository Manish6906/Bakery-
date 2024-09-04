import { Link } from "react-scroll"


function Home() {
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-dark-subtle text-dark-emphasis fixed-top">
  <div className="container-fluid text-white">
    <a className="navbar-brand " href="#">Arley Bakery</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  to="test1" spy={true} smooth={true} offset={-100} duration={50}  className="nav-link active cursor-pointer" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="test2" spy={true} smooth={true} offset={-100} duration={50}  className="nav-link cursor-pointer" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="test3" spy={true} smooth={true} offset={-100} duration={50}  className="nav-link cursor-pointer" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link  to="test4" spy={true} smooth={true} offset={-100} duration={50}  className="nav-link cursor-pointer" >Menu</Link>
        </li>
        <li className="nav-item">
          <Link  to="test5" spy={true} smooth={true} offset={-100}  duration={50} className="nav-link cursor-pointer" >Contact Us</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}



  







    </div>
  </div>
</nav>
    </>
  )
}

export default Home