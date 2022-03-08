function image_atom(props) {
    // console.log(props.image_data.image)
    return (
        <div className="container__image"> 
            <img className="container__img" src={props.image_data.image} alt={props.image_data.alt} />
        </div>
    );
}

export default image_atom;