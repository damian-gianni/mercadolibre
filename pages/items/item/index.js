import { useEffect, useState } from 'react';
import Template from "../../../components/Template";
// import Breadcrumb from "../../../components/Breadcrumb";
import InternalItem from "../../../components/InternalItem";

export default () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:3000/api/items/MLA846526085`)
            .then(res => res.json())
            .then(data => {
                setItem(data.item);
                setLoading(false);
            })
    }, []);

    return (
        <Template>
            {!loading && <>
                {/* <Breadcrumb categories={item.categories} /> */}
                <InternalItem item={item} />
            </>}
        </Template>
    )
};
