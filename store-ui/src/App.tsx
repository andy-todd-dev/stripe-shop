import React from "react";
import { PageData } from "./main";
import { Link, Outlet } from "react-router-dom";

interface AppParams {
  pages: PageData[];
}

const App: React.FC<AppParams> = ({ pages }) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {pages.map((page) => {
              return (
                <li>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
