import { BASE_URL } from "../config";

export function getProducts() {
  return fetch(`${BASE_URL}/products`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

export function createProduct(body) {
  return fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .catch((error) => console.log(error));
}
