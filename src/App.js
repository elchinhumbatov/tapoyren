import "./App.scss";
import "./assets/styles/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import RouterConfig from "./navigations/RouterConfig";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0096ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
