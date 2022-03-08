import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'

function Head_organism(props) {
    return (
        <div>
            <Head>
                <title>Rochester School - Course Catalogue</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <div className="head__container">
                    <img className="head__logo" src="https://ik.imagekit.io/rochester59bucket/Rochester_School/Rochester_Web/Home/logoRochersteHeader_L5i_U3J8C.png?updatedAt=1626876530862" alt="Logo del Colegio Rochester" />
                </div>
            </header>
        </div>
    );
}

export default Head_organism;