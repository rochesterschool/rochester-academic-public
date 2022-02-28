import { useEffect, useState } from "react";

const table_atom = (table_data) => {
    const child = table_data.table_data
    //console.log(child)

    function getRandomNumber() {
        var min = 40000;
        var max = 50000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <table>
                <tbody>
                    {child.map((item, index) => {
                        return <tr key={getRandomNumber()}>
                            <td>{item}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
};

export default table_atom;