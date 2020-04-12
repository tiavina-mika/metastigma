import { useEffect, useState } from 'react';

import { items } from '../utils/data/articles';
import { getRecents, getCategories } from '../utils/utils';

export const useGetData = ({ category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const arr = category? [...getCategories(items)]: [...getRecents(items)];
        setData(arr);
    }, [category]);

    return [data]
}