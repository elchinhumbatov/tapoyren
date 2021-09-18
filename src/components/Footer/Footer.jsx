import { useTranslation } from 'react-i18next';


function Footer() {
  const {t} = useTranslation();
  return (
    <div>
      syuda {t("footer")}
    </div>
  )
}

export default Footer
