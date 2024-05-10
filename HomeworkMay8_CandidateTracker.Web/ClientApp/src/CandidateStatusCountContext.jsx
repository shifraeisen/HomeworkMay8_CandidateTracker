import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidateStatusCountContext = createContext();

const CandidateStatusCountContextComponent = (props) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [declinedCount, setDeclinedCount] = useState(0);

    const getCounts = async () => {
        const { data } = await axios.get('/api/candidates/getcounts');
        setPendingCount(data[0]);
        setConfirmedCount(data[1]);
        setDeclinedCount(data[2]);
    }

    useEffect(() => {
        getCounts();
    }, []);

    const o = {
        pendingCount,
        confirmedCount,
        declinedCount,
        getCounts
    }
    return <CandidateStatusCountContext.Provider value={o}>
        {props.children}
    </CandidateStatusCountContext.Provider>
}
const useCandidateStatusCount = () => {
    return useContext(CandidateStatusCountContext);
}
export default CandidateStatusCountContextComponent;
export { useCandidateStatusCount };

