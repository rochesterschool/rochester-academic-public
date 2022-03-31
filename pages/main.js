import React, { useEffect, useState } from 'react';

//Components
import Header from './components/organism/head_organism';
import Content from './components/organism/content_organism';
import Loader from './components/organism/loader_organism';

const Main = () => {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(async () => {
        const response = await fetch('/api/catalogue/courses');
        const data = await response.json();
        console.log(`Total elements: ${data.length} to render`);
        setCatalogue(data);
    }, []);

    return (
        <div>
            <Header />
            {
                catalogue.length ? <Content props={catalogue} />
                                 : <Loader />
            }
            {/* <Content props={catalogue} /> */}
        </div>
    );
};


export default Main;