import { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getLocalLanguage, saveLocalLanguage } from 'services/account';
import LanguageIcon from '@material-ui/icons/Language';
import { languagesSettings } from 'services/config';
import germanyIcon from '../../assets/icon-language/germany.svg';
import unitedKingIcon from '../../assets/icon-language/united-kingdom.svg';
import franceIcon from '../../assets/icon-language/france.svg';
import italyIcon from '../../assets/icon-language/italy.svg';
import russiaIcon from '../../assets/icon-language/russia.svg';
import spainIcon from '../../assets/icon-language/spain.svg';
import chinaIcon from '../../assets/icon-language/china.svg';
import arabicIcon from '../../assets/icon-language/united-arab-emirates.svg';

import './LanguageSwitcher.scss';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(getLocalLanguage());
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = getLocalLanguage();
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    saveLocalLanguage(lang);
  };

  return (
    <div className="select-language-component">
      <Select defaultValue={!language ? '' : language}>
        <MenuItem disabled>
          <LanguageIcon />
        </MenuItem>
        <MenuItem
          value={languagesSettings.English}
          onClick={() => changeLanguage(languagesSettings.English)}
        >
          <img src={unitedKingIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.German}
          onClick={() => changeLanguage(languagesSettings.German)}
        >
          <img src={germanyIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.France}
          onClick={() => changeLanguage(languagesSettings.France)}
        >
          <img src={franceIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.Italy}
          onClick={() => changeLanguage(languagesSettings.Italy)}
        >
          <img src={italyIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.Russia}
          onClick={() => changeLanguage(languagesSettings.Russia)}
        >
          <img src={russiaIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.Spain}
          onClick={() => changeLanguage(languagesSettings.Spain)}
        >
          <img src={spainIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.Arabic}
          onClick={() => changeLanguage(languagesSettings.Arabic)}
        >
          <img src={arabicIcon} className="img-lang" />
        </MenuItem>
        <MenuItem
          value={languagesSettings.China}
          onClick={() => changeLanguage(languagesSettings.China)}
        >
          <img src={chinaIcon} className="img-lang" />
        </MenuItem>
      </Select>
    </div>
  );
};
