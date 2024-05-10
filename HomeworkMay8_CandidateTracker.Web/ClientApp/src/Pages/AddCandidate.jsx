import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCandidateStatusCount } from '../CandidateStatusCountContext';

const AddCandidate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    const navigate = useNavigate();

    const { getCounts } = useCandidateStatusCount();

    const onSubmitClick = async () => {
        await axios.post('/api/candidates/add', { firstName, lastName, phone, email, notes });
        getCounts();
        navigate('/');
    }

    return (
        <div className="container" style={{ marginTop: 80 }} >
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First Name" className="form-control" />
                        <br />
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="lastName" placeholder="Last Name" className="form-control" />
                        <br />
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email" className="form-control" />
                        <br />
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone Number" className="form-control" />
                        <br />
                        <textarea value={notes} onChange={e => setNotes(e.target.value)} rows="5" className="form-control" name="notes"></textarea>
                        <br />
                        <button disabled={!firstName || !lastName || !email || !phone} onClick={onSubmitClick} className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default AddCandidate;