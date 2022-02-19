import { useEffect, useState } from "react";

import TextAtom from './atoms/text_atom';
import TableAtom from './atoms/table_atom';
import ListAtom from './atoms/list_atom';
import ImageAtom from './atoms/image_atom';

const molecule_one = (parent_data) => {
    const parent = parent_data.parent_data
    //console.log(parent)

    const data = parent.map((item, index) => {
        return <>
            { !item.is_table && !item.is_list && !item.is_image && <TextAtom key={index} child_data={item} /> }
            { item.is_table && <TableAtom key={index} table_data={item.table} /> }
            { item.is_list && <ListAtom key={index} list_data={item} /> }
            { item.is_image && <ImageAtom key={index} image_data={item} /> }
        </>
    })

    return (
        <div>
            {data}
        </div>
    );
};

export default molecule_one;

