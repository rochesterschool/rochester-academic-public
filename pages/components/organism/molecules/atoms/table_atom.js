const Table_atom = (table_data) => {
    const child = table_data.table_data || []
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
                    {
                        child && child.map((item, index) => {
                            return <tr key={getRandomNumber()}>
                                <td>{item}</td>
                            </tr>
                        })
                        /*child !== undefined ? <p>Loading tables...</p>  
                                        : child.length > 0 ?
                                            child.map((item, index) => {
                                                return <tr key={getRandomNumber()}>
                                                    <td>{item}</td>
                                                </tr>
                                            }) : <p>Loading tables...</p>*/
                    }
                </tbody>
            </table>
        </>
    );
};

export default Table_atom;