import { useEffect, useContext } from "react";
import { auth } from "./Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { DataContext } from "./components/DataProvider/DataProvider";
import Router from "./routing/Router";

function App() {
  const [, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    });

    return unsubscribe;
  }, [dispatch]);

  return <Router />;
}

export default App;
