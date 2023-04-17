import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const ClientLayout = (props: Props) => {
  return (
    <div>
      <header className="bg-gray-800 text-white flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold"> HomePage</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-gray-300">
                SignUp
              </a>
            </li>
            <li>
              <a href="/signin" className="hover:text-gray-300">
                SignIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Logout
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

export default ClientLayout;
