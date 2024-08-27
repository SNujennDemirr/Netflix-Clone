import React from 'react';
import '../css/App.css';

const Footer = () => {
  return (
    <footer className="center size-60">
      <p>Sorularınız mı var? Arayın <a href="tel:0850-390-7444">0850-390-7444</a></p>
      <ul className="columns flex-wrap">
        <li className="column is-25"><a href="https://help.netflix.com/support/412"><span>SSS</span></a></li>
        <li className="column is-25"><a href="https://help.netflix.com"><span>Yardım Merkezi</span></a></li>
        <li className="column is-25"><a href="https://www.netflix.com/yourAccount"><span>Hesap</span></a></li>
        <li className="column is-25"><a href="https://media.netflix.com/"><span>Medya Merkezi</span></a></li>
        <li className="column is-25"><a href="http://ir.netflix.com/"><span>Yatırımcı İlişkileri</span></a></li>
        <li className="column is-25"><a href="https://jobs.netflix.com/jobs"><span>İşler</span></a></li>
        <li className="column is-25"><a href="https://www.netflix.com/redeem"><span>Hediye Kartları</span></a></li>
        <li className="column is-25"><a href="https://www.netflix.com/watch"><span>İzleme Yolları</span></a></li>
        <li className="column is-25"><a href="https://help.netflix.com/legal/termsofuse"><span>Kullanım Koşulları</span></a></li>
        <li className="column is-25"><a href="https://help.netflix.com/legal/privacy"><span>Gizlilik</span></a></li>
        <li className="column is-25"><a href="https://help.netflix.com/legal/privacy#cookies"><span>Çerez Tercihleri</span></a></li>
        <li className="column is-25"><a href="https://fast.com"><span>Hız Testi</span></a></li>
        <li className="column is-25"><a href="https://www.netflix.com/es-en/originals"><span>Netflix Orijinalleri</span></a></li>
      </ul>
      <div id="lang-selection">
        <i className="fa fa-globe" aria-hidden="true"></i>
        <select tabIndex="0">
          <option value="tr">Türkiye</option>
          <option selected value="en">English</option>
        </select>
      </div>
      <p id="company">Netflix Türkiye</p>
    </footer>
  );
};

export default Footer;
