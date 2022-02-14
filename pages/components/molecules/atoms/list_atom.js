const list_atom = (list_data) => {
    const child = list_data.list_data 
    return (
        <>
            <ul>
                {child.list.map((item, index) => {
                    return <div>
                        <li>{JSON.stringify(item)}</li>
                    </div>
                })}
            </ul>
        </>
    );
};

export default list_atom;