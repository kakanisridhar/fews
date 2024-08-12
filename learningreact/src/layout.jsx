import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/basics">Basics</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
