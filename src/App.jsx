import { useEffect, useState } from "react";
import { Extra } from "./components/Extra";
import { ScrollAnimation } from "./components/ScrollAnimation";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); ``
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="bg-green-800">
          <h1 className="text-7xl py-60 text-center">
            Data fetched from the server
          </h1>
        </div>
      )}
      <ScrollAnimation />
      <Extra />
    </>
  );
};

export default App;
