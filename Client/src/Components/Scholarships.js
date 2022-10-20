import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Scholarships() {
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
            </>
        )
    });

    return (
        <>
            <form>
                <input class="form-control mr-sm-2" placeholder="Search" onChange={(e) => { setSearch(e.target.value) }} />
            </form>

            <div className="row">
                <div class="row">{formatedData}</div>
            </div>
        </>
    )
}