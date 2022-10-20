import { Link } from "react-router-dom"
// import about from "./about.png"
export default function Homepage() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand logoinfoschol  font-weight-bold" ><span className="first">info</span><span className="ScholCss">Schol</span></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/scholarships" class="nav-link">Scholarships</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/">Action</Link>
                                <Link class="dropdown-item" to="/">Another action</Link>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
            <p>Working on it....</p>
        </>
    )
}