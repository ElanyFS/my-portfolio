import { useEffect, useState } from "react";
import { Layout } from "./Layout/Layout";
import { Loading } from "./components/Loading/Loading";
import './style/index.css';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer)
  }, [])

  return <>
    {loading ? 
    <Loading /> : 
    <div className={`page-content`}>
      <Layout />
    </div>
     }
  </>;
}

export default App;
