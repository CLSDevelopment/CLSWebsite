import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { getLocalLanguage, saveLocalLanguage } from "services/account";


import "./LanguageSwitcher.scss";

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState("");
  
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = getLocalLanguage();
    lang.toLocaleLowerCase();
    if (lang) {
      i18n.changeLanguage(lang);
      setSelected(lang);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang);
    saveLocalLanguage(lang);
  };

  return (
    <div className="select-language-component">
      <ReactFlagsSelect
        countries={["GB", "DE", "IT", "RU","FR"]}
        customLabels={{ GB: "EN", FR: "FR", DE: "DE", IT: "IT", ES: "ES", RU: "RU" }}
        selected={selected}
        showSelectedLabel={true}
        onSelect={(lang) => changeLanguage(lang)}
      />
    </div>
  );
};
