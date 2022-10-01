import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Scholarships() {
    const navigate = useNavigate();
    const apiUrl = "http://localhost:4000/scholarships";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const formatedData = data.map((schol) => {
        return (
            <>
                <div class="card" style={{ width: '15rem', margin: '20px', marginLeft: '100px' }}>
                    <img src={schol.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h4 className="card-title">{schol.name}</h4>
                        <p className="card-text">{schol.about}</p>
                        <p className="btn btn-primary" onClick={() => {
                            navigate('/scholarships/' + schol._id);
                        }}>Read More</p>    
                    </div>
                </div>

                {/* <h5 onClick={()=>{
                    navigate('/faculty/'+fac.id);
                  }}>{fac.facultyname}</h5> */}
            </>
        )
    })

    return (
        <>
            <div className="row">
                <div class="row">{formatedData}</div>
            </div>
        </>
    )
}