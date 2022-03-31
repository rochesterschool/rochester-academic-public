import { useEffect, useState } from "react";
import { Button, Radio } from '@nextui-org/react';
//import { Home, Heart } from 'react-iconly'


import MoleculeOne from "./molecules/molecule_one"

function Content_organism(props) {
    const [catalogue, setCatalogue] = useState([])
    const [section, setSection] = useState(0)
    const [view, setView] = useState("all")

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

    const changeViewStudent = () => {
        console.log("Button student")
        const elementsToFilter = ['title', 'title1',  /*'title2', 'title3', /*'title4', 'list', */'image'/*, 'table'*/]
        let copyCatalogue = props.props
        let studentView = copyCatalogue.filter(item => elementsToFilter.includes(item.subtype) /* || item.type == "short_text" */)
        console.log(studentView.length)
        setCatalogue(studentView)
        setView("student")
    }

    const changeViewParent = () => {
        console.log("Button parent")

        setView("parent")
    }

    const changeViewTeacher = () => {
        console.log("Button teacher")

        setView("teacher")
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
                        <h5>Choose a section</h5>
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
                        <Button id="student_button_view" size="xs" shadow color="success" onClick={ changeViewStudent }>Student</Button>
                    </div>
                    <div>
                        <Button id="parent_button_view" size="xs" shadow color="error" onClick={ changeViewParent }>Parent</Button>
                    </div>
                    <div>
                        <Button id="teacher_button_view" size="xs" shadow color="warning" onClick={ changeViewTeacher }>Teacher</Button>
                    </div>
                    
                </div>
                {/* <MoleculeOne parent_data={props.props} /> */}
                <MoleculeOne parent_data={catalogue} />
            </section>
        </main>
    );
}

export default Content_organism;