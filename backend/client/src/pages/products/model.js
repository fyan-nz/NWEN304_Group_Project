/**
 * returns all products that belong to a given category from the server. 
 */
export async function fetchProducts(category) {
    const res = await fetch(`http://localhost:5000/api/${category}`);
    return res.json();
}