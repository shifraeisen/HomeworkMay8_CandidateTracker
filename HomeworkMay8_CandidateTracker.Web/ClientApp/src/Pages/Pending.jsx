import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pending = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getPendingCandidates = async () => {
            const { data } = await axios.get(`/api/candidates/getallbystatus?s=p`);
            setCandidates(data);
        }
        getPendingCandidates();
    }, [])
    return (
        <div className='container' style={{ marginTop: 80 }}>
            <table className='table table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => <tr key={c.id}>
                        <td><Link to={`/viewdetails/${c.id}`} style={{ textDecoration: 'none' }}>View Details</Link></td>
                        <td>{c.firstName}</td>
                        <td>{c.lastName}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Pending;