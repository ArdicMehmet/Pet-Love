import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import LogoBar from "./components/LogoBar";

function App() {
  const [userLoading, setUserLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setUserLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={userLoading} />
      {!userLoading && <div>App</div>}
    </>
  );
}

export default App;
