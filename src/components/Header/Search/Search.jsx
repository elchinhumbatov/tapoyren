import SearchIcon from "@material-ui/icons/Search";
import s from "./Search.module.scss";
import { useTranslation } from "react-i18next";

function Search() {
  const { t } = useTranslation();
  return (
    <div className={s.search}>
      <input type="search" placeholder={t("header.search")} />
      <SearchIcon color="primary" />
    </div>
  );
}

export default Search;
