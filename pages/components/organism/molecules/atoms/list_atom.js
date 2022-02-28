//import util from '';

const list_atom = (list_data) => {
    const child = list_data.list_data
    //console.log(util.getRandomNumber())

    function getRandomNumber() {
        var min = 50000;
        var max = 60000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <ul >
                {child.list.map((item, index) => {
                    return <li key={getRandomNumber() + index}>{JSON.stringify(item).replace('\"', '').replace('.\"', '.')}</li>
                })}
            </ul>
        </>
    );
};

export default list_atom;