import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ScholDetails() {
    // const navigate = useNavigate();
    const param = useParams();
    const apiUrl = "http://localhost:4000/scholarships";
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(apiUrl + "/" + param._id)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    return (
        <>
            <div class="card" style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto' }} >
                <img src={data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h6 class="card-title">Name  : {data.name}</h6>
                    <p class="card-text">About : {data.education}</p>
                    <p class="card-text">Award : {data.award}</p>
                    <p class="card-text">Education Eligibility : {data.education}</p>
                    <p class="card-text">Cast Eligibility : {data.cast}</p>
                    <p class="card-text">Income Eligibility : {data.income}</p>
                    <p class="card-text">Required Documents  : {data.documents}</p>
                    <p class="card-text">How to apply? : {data.stepstoapply}</p>
                    <p class="card-text"><a href={data.website}>Click here to go to {data.name}</a></p>
                </div>
            </div>


        </>
    )
}