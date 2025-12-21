import "./header.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { IS_MOBILE } from "../../constants/mobileConstant";
import { useState } from "react";
import Cone from "../List/Cone";
import { List } from "../List/List";

const Header = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const onScroll = (id: string) => {
    const idToScroll = `#${id}`;

    const section = document.querySelector(idToScroll);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      setIsOpenMobileNav(false);
    }, 700);
  };

  const burgerMenu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="22"
      viewBox="0 0 38 22"
      fill="none"
    >
      <line y1="1" x2="38" y2="1" stroke="white" strokeWidth="2" />
      <line y1="11" x2="38" y2="11" stroke="white" strokeWidth="2" />
      <line y1="21" x2="38" y2="21" stroke="white" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="header">
      <div className="header-logo__wrapper">
        <h1 className="header-logo">БаринЪ</h1>
        <Logo width={IS_MOBILE ? 36 : 46} height={IS_MOBILE ? 29 : 39} />
      </div>
      {!IS_MOBILE && (
        <div className="header-wrapper_nav">
          <Navigation onScroll={onScroll} />
          <a href="tel:8(3412)576175">+7 341 257 61-75</a>
        </div>
      )}
      {IS_MOBILE && (
        <div className="header-wrapper_nav-mobile">
          <a href="tel:8(3412)576175" className="header-phone">
            57-61-75
          </a>
          <div
            onClick={() => {
              setIsOpenMobileNav(true);
            }}
          >
            {burgerMenu}
          </div>
        </div>
      )}

      {IS_MOBILE && isOpenMobileNav && (
        <div className="mobile-nav">
          <div className="mobile-wrapper">
            <div>
              <div
                className="mobile-nav-close"
                onClick={() => {
                  setIsOpenMobileNav(false);
                }}
              >
                Х
              </div>
              <nav className="mobile-nav-wrapper">
                <a
                  onClick={() => {
                    onScroll("services");
                  }}
                >
                  Главная
                </a>
                <a
                  onClick={() => {
                    onScroll("gallery");
                  }}
                >
                  Галерея
                </a>
                <a
                  onClick={() => {
                    onScroll("stock");
                  }}
                >
                  Акции
                </a>

                <a
                  onClick={() => {
                    onScroll("reviews");
                  }}
                >
                  Отзывы
                </a>
                <a
                  onClick={() => {
                    onScroll("footer");
                  }}
                >
                  Контакты
                </a>
              </nav>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  gap: "20px",
                  position: "relative",
                  opacity: "0.6",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  БаринЪ
                </h1>
              </div>
              <div style={{ position: "absolute", left: "0", bottom: "0" }}>
                <Cone />
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "-40px",
                  bottom: "-10px",
                }}
              >
                <List width={158} height={110} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
