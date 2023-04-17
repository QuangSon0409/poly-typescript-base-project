import { IProduct } from "../interface/product";
import instance from "./instance";
export const getAllProducts = () => {
  return instance.get("/products");
};
export const getOneProducts = (id: string | number) => {
  return instance.get(`/products/${id}`);
};
export const createProduct = (product: IProduct) => {
  return instance.post(`/products/`, product);
};
export const updateProduct = (product: IProduct) => {
  return instance.put(`/products/${product.id}`, product);
};
export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`);
};
