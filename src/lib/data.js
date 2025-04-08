export async function getAllData(){
	const API_URL = "https://graphql.datocms.com/";
	const API_TOKEN = "b9b8e250b7d589467a15aacd45e236";

	const query = `
	{
		allProdutos(first: 100) {
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

	return products;

}

export async function getDataBySlug(slug){
	const API_URL = "https://graphql.datocms.com/";
	const API_TOKEN = "b9b8e250b7d589467a15aacd45e236";

	const query = `
	{
		allProdutos(first: 100, filter: {slug: {eq: ${slug}}}) {
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

	return products;
}