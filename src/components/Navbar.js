import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none'>
            <div className='container flex-lg-row flex-nowrap align-items-center'>
                <div className="navbar-brand w-100">
                    <a href="#">
                        <img src="/assets/img/logo-dark.png" srcSet="/assets/img/logo-dark@2x.png 2x" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className='navbar-collapse offcanvas offcanvas-nav offcanvas-start'>
                <div className='offcanvas-header d-lg-none'>
                    <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body ms-lg-auto d-flex flex-column h-100'>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
