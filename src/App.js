import React, { useState } from 'react';
import {Home} from './pages';
import { Header, Modal } from './layout';
import './styles/app.css';


function App(){

    const [ModalClose, setModalClose] = useState(false);

    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }

    return (
        <>
            <Header />
            <Home />
            <Modal isItOpen={ModalClose} updateOpen={handleModalClose} />

        </>
    )
}

export default App;
