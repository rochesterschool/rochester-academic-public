import { useEffect, useState } from "react";
import { Button, Radio } from '@nextui-org/react';
import { Home, Heart } from 'react-iconly'


import MoleculeOne from "./molecules/molecule_one"
import MoleculeTwo from "./molecules/molecule_two"

function content_organism(props) {
    const [catalogue, setCatalogue] = useState([])
    const [section, setSection] = useState(0)

    useEffect(() => {
        setCatalogue(props.props)
    }, [props.props])

    const changeRadio = (e) => {
        let value = e.target.value
        console.log(value)
        let copyCatalogue = props.props
        console.log(copyCatalogue.length)
        let newCatalogue = value > 0 ? copyCatalogue.filter(item => item.section == value) : props.props 
        console.log(newCatalogue.length)
        setCatalogue(newCatalogue)
    }

    return (
        <main>
            <header>
                <div>
                    <h2>COURSE CATALOGUE</h2>
                </div>
            </header>
            <aside>
                <div>
                    <h4 id='menu__filter_title'>Course Catalogue</h4>
                    <section>
                        <h5>Select a section to see:</h5>
                        <div id="menu__section_filter">
                            <div>
                                <input type="radio" id="filter1" name="filterSection" value="0" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter1">All sections</label>
                            </div>
                            <div>
                                <input type="radio" id="filter2" name="filterSection" value="1" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter2">Our Project</label>
                            </div>
                            <div>
                                <input type="radio" id="filter3" name="filterSection" value="2" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter3">Area description</label>
                            </div>
                            <div>
                                <input type="radio" id="filter4" name="filterSection" value="3" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter4">Preschool</label>
                            </div>
                            <div>
                                <input type="radio" id="filter5" name="filterSection" value="4" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter5">Lower Elementary</label>
                            </div>
                            <div>
                                <input type="radio" id="filter6" name="filterSection" value="5" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter6">Upper Elementary</label>
                            </div>
                            <div>
                                <input type="radio" id="filter7" name="filterSection" value="6" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter7">Middle School</label>
                            </div>
                            <div>
                                <input type="radio" id="filter8" name="filterSection" value="7" onChange={e => changeRadio(e)} />
                                <label htmlFor="filter8">High School</label>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>
            <section>
                <div className="content__head_view">
                    <h5>View options</h5>
                    <div>
                        <Button size="xs" shadow color="success">Student</Button>
                    </div>
                    <div className="content_head_view_buttons">
                        <Button size="xs" shadow color="warning">Teacher</Button>
                    </div>
                    <div>
                        <Button size="xs" shadow color="error">Parent</Button>
                    </div>
                </div>
                {/* <MoleculeOne parent_data={props.props} /> */}
                <MoleculeOne parent_data={catalogue} />
            </section>
        </main>
    );
}

export default content_organism;