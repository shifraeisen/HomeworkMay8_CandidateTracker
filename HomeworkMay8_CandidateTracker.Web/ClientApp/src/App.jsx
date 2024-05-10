import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Declined from './Pages/Declined';
import CandidateStatusCountContextComponent from './CandidateStatusCountContext';
import ViewDetails from './Pages/ViewDetails';

const App = () => {
    return (
        <CandidateStatusCountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addcandidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/declined' element={<Declined />} />
                    <Route path='/viewdetails/:id' element={<ViewDetails />} />
                </Routes>
            </Layout>
        </CandidateStatusCountContextComponent>
    );
}

export default App;