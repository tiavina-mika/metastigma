import React from 'react';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import Card from '../item/card';
import { items } from '../../utils/data/articles';
import { getByGenre } from '../../utils/utils';

const Home = () => {
    const params = useParams();

    return (
        <Box>
            { params && params.genre
                ? getByGenre(items, params.genre).map((item, i) => <Card data={item} key={i} index={i} />)
                : items.map((item, i) => <Card data={item} key={i} index={i} />)
            }
        </Box>
    )
}

export default Home;