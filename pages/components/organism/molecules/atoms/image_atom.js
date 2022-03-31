function Image_atom(props) {
    //console.log(props.image_data)
    //console.log(props.image_data.image)

    return (

        <div className="container__image">
            {
                props.image_data ? (<img className="container__img" src={props.image_data.image} alt={props.image_data.alt} />)
                                 : (<p>Image not found</p>)
            }
            {/* <img className="container__img" src={props.image_data.image} alt={props.image_data.alt} /> */}
        </div>
    );
}

export default Image_atom;