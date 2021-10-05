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
    }
  },
  // typography: {
  //   fontFamily: 'DinReg'
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'DinReg';
  //         src: url(./assets/fonts/din_pro_regular.otf) format('opentype');
  //       }
  //     `,
  //   },
  // },
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
