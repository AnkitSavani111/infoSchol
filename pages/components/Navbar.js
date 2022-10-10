import React from 'react'
import Link from 'next/link'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <div className="container-fluid">
        <Link href={"/"}>
          <a className="navbar-brand logoinfoschol font-weight-bold" href="/"><span className="first">info</span>Schol</a>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center navBtns" id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Scholarships</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Government Scholarships</a></li>
                <li><a className="dropdown-item" href="#">Private Scholarships</a></li>
                <li><hr className="dropdown-divider" /> </li>
                <li><a className="dropdown-item" href="#">Others</a></li>
              </ul>
            </li>
          </ul>
          {
            props.search ? (<form className="d-flex" role="search">
              <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
            </form>) : (<></>)
          }

        </div>
      </div>
    </nav>
  )
}

export default Navbar