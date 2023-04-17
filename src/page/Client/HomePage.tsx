import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import Product from "../../components/Product";
import { IProduct } from "../../interface/product";

type Props = {};

const HomePage = (props: Props) => {
  const [product, setProduct] = useState([]);

  const getAll = async () => {
    const { data } = await getAllProducts();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      HomePage
      {product.map((products, index) => {
        return <Product data={products} key={index}></Product>;
      })}
    </div>
  );
};

export default HomePage;
