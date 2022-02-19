import { useEffect, useState } from "react";

const text_atom = (child_data) => {
    const child = child_data.child_data
    return (
        <>
            <p className={child.subtype}>{child.content}</p>
        </>
    );
};

export default text_atom;