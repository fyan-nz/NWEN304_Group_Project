/**
 * returns random products from the server.
 */
export async function fetchRandomProducts() {
    const res = await fetch('http://localhost:5000/api/products');
    return res.json();
}