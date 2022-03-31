import React from 'react';
import { Progress, Grid, Text } from "@nextui-org/react";

function Loader_organism(props) {
    return (
        <div className='loader__container'>
            <Grid.Container xs={12} sm={6} gap={2} className="loader__container__grid-content">
                <Grid className="loader__container__grid_content_grid">
                    <h3>Loading catalogue data...</h3>
                    <Progress value={85} shadow color="primary" status="primary" />
                </Grid>
            </Grid.Container>
        </div>
    );
}

export default Loader_organism;