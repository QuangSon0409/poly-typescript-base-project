import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const AdminLayOut = (props: Props) => {
  return (
    <div>
      <header className="bg-gray-800 text-white flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold"> AdminPage</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/admin" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/admin/products" className="hover:text-gray-300">
                Products
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AdminLayOut;
