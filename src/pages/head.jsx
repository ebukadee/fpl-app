import {  useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Head() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fantasy.premierleague.com/api/bootstrap-static/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        <h3>HELLO</h3>
      </div>
      <div>
        <h1>Posts</h1>
        <ul>
          {data}
        </ul>
      </div>
    </>
  );
}
export default Head;
