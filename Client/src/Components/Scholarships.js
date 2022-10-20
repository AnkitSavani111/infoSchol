import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Scholarships() {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_FE_API_URL;
    const [data, setData] = useState([]);
    const [serach, setSearch] = useState("");
    const MySwal = withReactContent(Swal);

    // Loading code start before fetching api.and after fetching close spinner.

    MySwal.fire({
        title: "Loading...",
        text: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
            MySwal.showLoading();
        },
    });

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    if (data.length > 0) {
        MySwal.close();
    }

    const formatedData = data.filter((val) => {
        if (serach == "") {
            return val;
        }
        else if (val.name.toLowerCase().includes(serach.toLowerCase())) {
            return val;
        }
    }).map((schol) => {
        return (
            <>

                <div className="card" style={{ width: '18rem', margin: '20px', marginLeft: '100px' }}>

                    <img src={schol.image} style={{ width: 14.9 + "em", height: 14.9 + "em" }} alt="Scholarship image" class="card-img-top"/>
                    <div class="card-body">
                        <h4 className="card-title">{schol.name}</h4>
                        {/* <p className="card-text">{schol.about.slice(0, 60) + "..."}</p> */}
                        <p className="card-text">Reward : {schol.award.slice(0,30)+"...."}</p>
                        <p className="card-text">Programme : {schol.education.slice(0,30)+"...."}</p>

                        <p className="btn btn-primary" onClick={() => {
                            navigate('/scholarships/' + schol._id);
                        }}>Read More...</p>
                    </div>
                </div>
            </>
        )
    });

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand logoinfoschol  font-weight-bold" href="#"><span className="first">info</span><span className="ScholCss">Schol</span></a>
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
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" placeholder="Search" onChange={(e) => { setSearch(e.target.value) }} />
                    </form>
                </div>
            </nav>

            <div className="row">
                <div class="row">{formatedData}</div>
            </div>

        </>
    )
}