import React, { useEffect, useState } from 'react';

//Components
import Header from './components/organism/head_organism';
import Content from './components/organism/content_organism';
// import Footer from './components/organisms/footer_organism';
import MoleculeOne from "./components/organism/molecules/molecule_one"


const Main = () => {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(async () => {
        const response = await fetch('/api/catalogue/courses');
        const data = await response.json();

        console.log(`Total elements: ${data.length}`);
        setCatalogue(data);
    }, []);

    return (
        <div>
            <Header />
            <Content props={catalogue} />
        </div>
    );
};


export default Main;