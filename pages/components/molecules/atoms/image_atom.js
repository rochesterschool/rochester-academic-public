function image_atom(props) {
    console.log(props.image_data.image)
    return (
        <> 
            <img src={props.image_data.image} alt={props.image_data.alt} />
        </>
    );
}

export default image_atom;