import Routes from "./components/Routes";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
