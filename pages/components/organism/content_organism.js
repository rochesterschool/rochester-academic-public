import React from 'react';
import { Radio } from '@nextui-org/react';


// import MoleculeOne from "./components/molecules/molecule_one"
import MoleculeOne from "./molecules/molecule_one"
import MoleculeTwo from "./molecules/molecule_two"

function content_organism(props) {
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
                        <Radio.Group value="1" id="menu__section_filter">
                            <Radio value="1">Our Project</Radio>
                            <Radio value="2">Area description</Radio>
                            <Radio value="3">Preschool</Radio>
                            <Radio value="4">Lower Elementary</Radio>
                            <Radio value="5">Upper Elementary</Radio>
                            <Radio value="6">Middle School</Radio>
                            <Radio value="7">High School</Radio>
                        </Radio.Group>
                    </section>
                </div>
            </aside>
            <section>
                <MoleculeOne parent_data={props.props} />
            </section>
        </main>
    );
}

export default content_organism;