import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ClientLayout from "./page/Client/ClientLayout";
import SignUp from "./page/Client/SignUp";
import SignIn from "./page/Client/SignIn";
import PrivateRouter from "./components/PrivateRouter";
import AdminLayOut from "./page/Admin/AdminLayOut";
import ProductShow from "./page/Admin/ProductShow";
import AddProduct from "./page/Admin/AddProduct";
import { IProduct } from "./interface/product";
import { createProduct, getAllProducts, updateProduct } from "./api/product";
import EditProduct from "./page/Admin/EditProduct";
import HomePage from "./page/Client/HomePage";

function App() {
  const [product, setProduct] = useState<IProduct[]>([]);
  const handleAddProduct = async (product: IProduct) => {
    const { data } = await createProduct(product);
    setProduct(data);
  };
  const handleEditProduct = async (product: IProduct) => {
    const { data } = await updateProduct(product);
    setProduct(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <AdminLayOut />
            </PrivateRouter>
          }
        >
          <Route
            path="products"
            index
            element={<ProductShow data={product} />}
          ></Route>
          <Route
            path="products/add"
            element={<AddProduct onAdd={handleAddProduct} />}
          />
          <Route
            path="products/:id/update"
            element={<EditProduct onEdit={handleEditProduct} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
