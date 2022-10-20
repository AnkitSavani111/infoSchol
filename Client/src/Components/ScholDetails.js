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
        </>
    )
}