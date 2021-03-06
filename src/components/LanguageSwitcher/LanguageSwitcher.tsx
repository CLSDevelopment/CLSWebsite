import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { getLocalLanguage, saveLocalLanguage } from "services/account";

import "./LanguageSwitcher.scss";

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState("gb");

  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      console.log(selected);
      saveLocalLanguage(selected);
    }
    const lang = getLocalLanguage().toLocaleUpperCase();
    if (lang) {
      i18n.changeLanguage(lang.toLowerCase());
      setSelected(lang);
    }
  }, [i18n]);

  const changeLanguage = (selected) => {
    setSelected(selected);
    i18n.changeLanguage(selected.toLowerCase());
    saveLocalLanguage(selected);
  };

  return (
    <div className="select-language-component">
      <ReactFlagsSelect
        countries={["GB", "DE", "IT", "RU", "FR", "ES"]}
        customLabels={{
          GB: "EN",
          FR: "FR",
          DE: "DE",
          IT: "IT",
          ES: "ES",
          RU: "RU",
          CN: "CN",
          AE: "AE"
        }}
        selected={selected}
        showSelectedLabel={true}
        onSelect={(selected) => changeLanguage(selected)}
      />
    </div>
  );
};
