import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Head() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fantasy.premierleague.com/api/my-team/8697194", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response);
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
    </>
  );
}
export default Head;
