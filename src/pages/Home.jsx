import React, { useEffect, useState } from "react";

// api
import api from "../api/api.json";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const forDataJson = `${api.request}://${api.server}${api.getPath}?key=${api.apikey}&get=category`;
    console.log(forDataJson);
    fetch(forDataJson)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Category List</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}
