import React from 'react';
import im from '../../assets/image/logoHeader.png';
import { useLanguage } from '../../services/langContext/languageContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function Header() {
  const { setLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="">
      <div className="header shadow">
        <div>
          <img src={im} alt="Logo" />
        </div>

        <div>
          <ul className="ul thick">
            <li>{t('pricing')}</li>
            <li>{t('faqs')}</li>
            <li>{t('contactUs')}</li>
            <li>{t('howItWorks')}</li>
            <li>{t('freeTrials')}</li>
          </ul>
        </div>

        <div className="header-btn">
          <button className="primary-btn">{t('loginSignUp')}</button>
          <select className="language" onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">EN</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
          <button className="secondary-btn">
            <i className="fa-brands fa-telegram fa-xl"></i> &nbsp;{t('joinTelegram')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
