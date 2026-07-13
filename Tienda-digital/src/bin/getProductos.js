const URL_API = "https://fakestoreapi.com/products";

export default async function getProductos() {
  try {
    const res = await fetch(URL_API);
    const data = await res.json();

    if (!data) throw new Error("Sin datos");

    return data;
  } catch (error) {
    console.error("Algo fallo: ", error);
    return [];
  }
}
