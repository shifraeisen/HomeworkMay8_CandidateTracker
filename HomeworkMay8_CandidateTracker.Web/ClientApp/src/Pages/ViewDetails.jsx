import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCandidateStatusCount } from '../CandidateStatusCountContext';

const ViewDetails = () => {
    const { id } = useParams();

    const [candidate, setCandidate] = useState({});
    const [decided, setDecided] = useState(false);

    const { getCounts } = useCandidateStatusCount();

    const navigate = useNavigate();

    useEffect(() => {
        const getById = async () => {
            const { data } = await axios.get(`/api/candidates/getbyid?id=${id}`);
            setCandidate(data);
        }
        getById();
    }, [])

    const { firstName, lastName, phone, email, notes } = candidate;

    const onDecision = async decision => {
        setDecided(true);
        await axios.post('/api/candidates/decision', { d: decision, id });
        getCounts();
    }

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phone}</h4>
                        <h4>Status: Pending</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        {!decided && <div>
                            <button onClick={() => onDecision('c')} className='btn btn-outline-success w-50'>Confirm</button>
                            <button onClick={() => onDecision('d')} className='btn btn-outline-dark w-50'>Decline</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewDetails;