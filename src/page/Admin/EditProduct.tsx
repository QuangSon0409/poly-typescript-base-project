import { useForm } from "react-hook-form";
import { IProduct } from "../../interface/product";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProducts } from "../../api/product";
import { useEffect } from "react";

type Props = {
  onEdit: (product: IProduct) => void;
};

const EditProduct = (props: Props) => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { id } = useParams();
  const getProduct = async () => {
    const { data } = await getOneProducts(id);
    reset(data);
  };
  const editProduct = (data: any) => {
    props.onEdit(data);
    navigate("/admin/products");
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(editProduct)}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Product name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500">this fieldset is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                min={0}
                placeholder="Product price"
                {...register("price")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="brand"
              >
                Brand
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brand"
                type="text"
                placeholder="Product brand"
                {...register("brand")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Product description"
                {...register("description")}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="block appearance-none w-full border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                {...register("category")}
              >
                <option value="Việt Nam">Việt Nam</option>
                <option value="Trung Quốc">Trung Quốc</option>
                <option value="Pháp">Pháp</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
