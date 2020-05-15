import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Template from "../../components/Template";
// import Breadcrumb from "../../components/Breadcrumb";
import InternalItem from "../../components/InternalItem";

export default () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		try {
			if (router && router.query.id) {
				fetch(`http://localhost:3000/api/items/${router.query.id}`)
					.then(res => res.json())
					.then(data => {
						setItem(data.item);
						setLoading(false);
					}).catch((error) => {
						console.log('Hubo un problema con la petición Fetch:' + error.message);
					});
			}
		} catch (error) {
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		}

	}, [router]);

	return (
		<Template>
			{!loading && item && <>
				<InternalItem item={item} />
			</>}
		</Template>
	)
};
