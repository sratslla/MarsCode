import Auth from "../Components/auth";
import Dashboard from "../Components/dashboard";
import { useUserContext } from "../context/userContext";
import './styles.css'

function Login() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default Login;
