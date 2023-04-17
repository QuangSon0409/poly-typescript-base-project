import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/product";
import { deleteProduct, getAllProducts } from "../../api/product";

type Props = {
  data: any;
};

const ProductShow = (props: Props) => {
  const [product, setProduct] = useState([]);

  const getAll = async () => {
    const { data } = await getAllProducts();
    console.log(data);
    setProduct(data);
  };
  const removeProduct = (id: string | number) => {
    deleteProduct(id).then(() => {
      setProduct(product.filter((item: IProduct) => item.id !== id));
    });
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <button className="bg-[#14dbac] rounded text-white p-2 m-2">
        <Link to={"/admin/products/add"}>Thêm Sảm Phẩm</Link>
      </button>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.map((products: IProduct, index: number) => {
                    return (
                      <tr key={index}>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {index + 1}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {products.name}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {products.price}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {products.brand}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {products.description}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {products.category}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <button
                            className="bg-[#14dbac] rounded text-white p-2 m-2"
                            onClick={() => {
                              removeProduct(products.id);
                            }}
                          >
                            Xóa
                          </button>
                          <button className="bg-[#14dbac] rounded text-white p-2 m-2">
                            <Link to={`/admin/products/${products.id}/update`}>
                              Thêm Sảm Phẩm
                            </Link>
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
