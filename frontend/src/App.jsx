import Routes from "./routes/Routes";
import { AuthProvider } from "./AuthContext";
import { Crisp } from "crisp-sdk-web";
import { Component } from "react";

class App extends Component {
  componentDidMount() {
    Crisp.configure("7fa207c6-a4a7-4b2d-a001-a14f2088f8f9");
  }

  render() {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
}
export default App;
