const Text_atom = (child_data) => {
    const child = child_data.child_data || {subtype: "general_text"}
    return (
        <>
            {   
               child !== undefined || child !== null ? child && <p className={child.subtype}>{child.content}</p> : <p>Null value</p>
            }
        </>
    );
};

export default Text_atom;