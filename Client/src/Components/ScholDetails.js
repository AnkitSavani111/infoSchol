import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ScholDetails() {
    // const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const param = useParams();
    const apiUrl = process.env.REACT_APP_FE_API_URL;
    const [data, setData] = useState({});

    MySwal.fire({
        title: "Loading...",
        text: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
            MySwal.showLoading();
        },
    });

    useEffect(() => {
        fetch(apiUrl + "/" + param._id)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    MySwal.close();

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
                </div>
            </nav>
            <div className="m-5">
                <div className="card d-flex flex-row">
                    <div className="bg-image hover-overlay ripple col-3 m-5" data-mdb-ripple-color="light">
                        <img src={data.image} className="img-fluid" />
                    </div>
                    <div className="card-body bg-light">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th>Scholarship Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>About</th>
                                    <td>{data.about}</td>
                                </tr>
                                <tr>
                                    <th>Scholarship Reward</th>
                                    <td>{data.award}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>{data.type}</td>
                                </tr>
                                <tr>
                                    <th>Cast Eligibility</th>
                                    <td>{data.cast}</td>
                                </tr>
                                <tr>
                                    <th>Education Eligibility</th>
                                    <td>{data.education}</td>
                                </tr>
                                <tr>
                                    <th>Income Eligibility</th>
                                    <td>{data.income}</td>
                                </tr>
                                <tr>
                                    <th>Document Required</th>
                                    <td>{data.documents}</td>
                                </tr>
                                <tr>
                                    <th>How to Apply</th>
                                    <td>{data.stepstoapply}</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href={data.website} className="btn btn-primary text-center mt-3" target="ankits">Visit Scholarship Website</a>
                    </div>
                </div>
            </div>
        </>
    )
}