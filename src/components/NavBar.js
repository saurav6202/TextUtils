import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg border-bottom border-body navElement" data-bs-theme="dark">
            <div className="container-fluid navElement">
                <Link className="navbar-brand navElement" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navElement" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navElement">
                        <li className="nav-item">
                            <Link className="nav-link active navElement" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navElement" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navElement" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="container themeSwitcherCon">
                        {props.themes.map((t) =>
                            <div
                                key={t.name}
                                className={`themeBoxColor ${t.name === props.activeTheme ? "activeThemeBox" : ""}`}
                                style={{ backgroundColor: t.color }}
                                onClick={(e) => { props.changeTheme(t.name) }}
                            ></div>
                        )}
                    </div>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2 navElement" type="search" placeholder="Search" aria-label="Search" id='searchInp' />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


NavBar.propTypes = {
    title: PropTypes.string.isRequired,
}