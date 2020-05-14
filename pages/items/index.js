import { useEffect, useState } from 'react';
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import SearchList from "../../components/SearchList";

export default () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const query = window.params.get('search');
        fetch(`http://localhost:3000/api/items?query=${query}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
    }, []);

    return (
        <Template>
            {!loading  && <>
                <Breadcrumb categories={items.categories} />
                <SearchList listItems={items} />
            </>}
        </Template>
    )
};
