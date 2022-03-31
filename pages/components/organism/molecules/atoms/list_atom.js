//import util from '';

const List_atom = (list_data) => {
    const child = list_data.list_data || []
    //console.log(util.getRandomNumber())

    function getRandomNumber() {
        var min = 50000;
        var max = 60000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <ul >
                {
                    child.list && child.list.map((item, index) => {
                        return <li key={getRandomNumber() + index}>{JSON.stringify(item).replace('\"', '').replace('.\"', '.')}</li>
                    })
                    
                    /*child !== undefined ? <p>Loading list...</p>
                                        : child.length > 0 ? 
                                            child.list.map((item, index) => {
                                                return <li key={getRandomNumber() + index}>{JSON.stringify(item).replace('\"', '').replace('.\"', '.')}</li>
                                            }) : <p>Loading list...</p>*/
                }
            </ul>
        </>
    );
};

export default List_atom;