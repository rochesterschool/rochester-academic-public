const list_atom = (list_data) => {
    const child = list_data.list_data 
    return (
        <>
            <ul>
                {child.list.map((item, index) => {
                    return <li>{JSON.stringify(item).replace('\"', '').replace('.\"', '.')}</li>
                })}
            </ul>
        </>
    );
};

export default list_atom;