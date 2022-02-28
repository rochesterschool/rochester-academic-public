import { useEffect, useState } from "react";

import TextAtom from './atoms/text_atom';
import TableAtom from './atoms/table_atom';
import ListAtom from './atoms/list_atom';
import ImageAtom from './atoms/image_atom';

const molecule_one = (parent_data) => {

    function getRandomNumber() {
        var min = 10000;
        var max = 40000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const htmlRenderData = parent_data.parent_data.map((item, index) => {
        return <>
            { !item.is_table && !item.is_list && !item.is_image && <TextAtom key={index + getRandomNumber()} child_data={item} /> }
            { item.is_table && <TableAtom key={index + getRandomNumber()} table_data={item.table} /> }
            { item.is_list && <ListAtom key={index + getRandomNumber()} list_data={item} /> }
            { item.is_image && <ImageAtom key={index + getRandomNumber()} image_data={item} /> }
        </>
    })

    return (
        <div>
            {htmlRenderData}
        </div>
    );
};

export default molecule_one;

