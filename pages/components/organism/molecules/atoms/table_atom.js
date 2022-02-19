import { useEffect, useState } from "react";

const table_atom = (table_data) => {
    const child = table_data.table_data
    //console.log(child)
    return (
        <>
            <table>
                {child.map((item, index) => {
                    return <tr>
                        <td key={index}>{item}</td>
                    </tr>
                })}
            </table>
        </>
    );
};

export default table_atom;