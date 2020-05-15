import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import SearchList from "../../components/SearchList";

export default () => {
	const [items, setItems] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (router && router.query.search) {
			fetch(`http://localhost:3000/api/items?query=${router.query.search}`)
				.then(res => res.json())
				.then(data => {
					setItems(data);
					setLoading(false);
				})
		}
	}, [router]);

	return (
		<Template>
			{!loading && <>
				<Breadcrumb categories={items.categories} />
				<SearchList listItems={items} />
			</>}
		</Template>
	)
};
