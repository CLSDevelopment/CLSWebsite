import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { getLocalLanguage, saveLocalLanguage } from "services/account";

import "./LanguageSwitcher.scss";

export const LanguageSwitcher = () => {
  const [selected, setSelected] = useState("GB");

  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      saveLocalLanguage(selected);
    }
    const lang = getLocalLanguage();
    if (lang) {
      i18n.changeLanguage(lang);
      setSelected(lang);
    }
  }, [i18n]);

  const changeLanguage = (selected) => {
    setSelected(selected);
    i18n.changeLanguage(selected);
    saveLocalLanguage(selected);
  };

  return (
    <div className="select-language-component">
      <ReactFlagsSelect
        countries={["GB", "DE", "IT", "RU", "FR", "ES", "CN"]}
        customLabels={{
          GB: "GB",
          FR: "FR",
          DE: "DE",
          IT: "IT",
          ES: "ES",
          RU: "RU",
          CN: "CN",
        }}
        selected={selected}
        showSelectedLabel={true}
        onSelect={(selected) => changeLanguage(selected)}
      />
    </div>
  );
};
