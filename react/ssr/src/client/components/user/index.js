import React from "react";
import { Link } from "react-router-dom";

export default function UserPage() {
  return (
    <section>
      UserPage
      <ul>
        <li>
          <Link to="/">to home page</Link>
        </li>
      </ul>
    </section>
  );
}
