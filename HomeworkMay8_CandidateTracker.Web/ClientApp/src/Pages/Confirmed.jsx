import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToggle } from '@uidotdev/usehooks';

const Confirmed = () => {
    const [candidates, setCandidates] = useState([]);

    const [show, toggle] = useToggle(true);

    useEffect(() => {
        const getConfirmedCandidates = async () => {
            const { data } = await axios.get(`/api/candidates/getallbystatus?s=c`);
            setCandidates(data);
        }
        getConfirmedCandidates();
    }, [])
    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div>
                <h1 className='text-center'>Confirmed</h1>
            </div>
            <div>
                <button onClick={toggle} className='btn btn-outline-info w-25'>Toggle Notes</button>
                <table className='table table-hover table-striped table-bordered mt-3'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {show && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c => <tr key={c.id}>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            {show && <td>{c.notes}</td>}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Confirmed;