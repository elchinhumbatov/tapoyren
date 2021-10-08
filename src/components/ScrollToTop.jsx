import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
// import { browserHistory } from 'react-router';


export default function ScrollToTop() {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (history.action !== "POP") return window.scrollTo(0, 0);
  }, [pathname, history.action]);

  return null;
}