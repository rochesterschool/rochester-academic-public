import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
//import from '../styles/Home.catalogue.css'

//import styles from './assets/styles/main.css';

//Components
import MoleculeOne from "./components/molecules/molecule_one"


const main = () => {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(async () => {
        const response = await fetch('/api/catalogue/courses');
        const data = await response.json();

        console.log(`Total elements: ${data.length}`);
        setCatalogue(data);
    }, []);

    return (
        <div>
            <MoleculeOne parent_data={catalogue} />
        </div>
    );
};


export default main;