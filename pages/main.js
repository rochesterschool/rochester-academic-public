import React, { useEffect, useState } from 'react';

const main = () => {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(async () => {
        console.log("Init.")
        const response = await fetch('/api/catalogue/courses');
        const data = await response.json();
        console.log(`Total elements: ${data.articles.length}`);
        setCatalogue(data.articles);
    }, []);

    return (
        <div>
            <h1>Hello 1</h1>
            {catalogue.map((item, index) => {
                return (
                    <div key={index}>{item.content}</div>
                )
            })}
        </div>
    );
};


export default main;