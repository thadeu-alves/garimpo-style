export default async function getAllData(slug = "", all = true){
	const API_URL = "https://graphql.datocms.com/";
	const API_TOKEN = "b9b8e250b7d589467a15aacd45e236";

	const query = `
	{
		allProdutos {
			title
			short
			link
			image {
				url
			}
			slug
		}
	}
	`;

	const response = await fetch(API_URL, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${API_TOKEN}`
	},
	body: JSON.stringify({ query }),
	});

	const { data } = await response.json();
	const products = data.allProdutos;

	if(slug){
		const list = [];

		products.forEach((product) => {
			if(product.slug == slug && (list.length != 4 || all)){
				list.push(product);
			}
		})

		return list;
	}

	return products;

}

