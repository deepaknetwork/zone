import { useEffect, useState } from "react";

function App() {
  const [l, setL] = useState("lat");
  const [ln, setLn] = useState("long");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setL(position.coords.latitude); 
        setLn(position.coords.longitude);
        console.log(position.coords)
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        setL(JSON.stringify(error.message))
      }
    );
  }, []);

  return (
    <div>
      <h1>{l}</h1>
      <h1>{ln}</h1>
    </div>
  );
}

export default App;
