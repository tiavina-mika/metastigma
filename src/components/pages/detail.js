import React from 'react';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import Card from '../item/card';
import { items } from '../../utils/data/articles';
import { getItemByGenreAndCategory } from '../../utils/utils';

const Detail = () => {
    const { slug, genre } = useParams();

    return (
        <Box>
            <Card data={getItemByGenreAndCategory(items, slug, genre)} />
        </Box>
    )
}

export default Detail;
