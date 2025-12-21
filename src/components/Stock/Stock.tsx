import React from "react";
import "./stock.scss";
import Container from "../Container/Container";
import { IS_MOBILE } from "../../constants/mobileConstant";
import { List } from "../List/List";
import Cone from "../List/Cone";
import Oak from "../List/Oak";

const Stock = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Container style={{ overflow: "hidden" }}>
        {IS_MOBILE && (
          <>
            <div className="stock-list">
              <List width={160} height={140} />
            </div>
            <div className="stock-cone">
              <Cone />
            </div>

            <div className="stock-oak">
              <Oak />
            </div>
          </>
        )}

        <div className="stock-wrapper-title">
          <div className="stock-title">
            При заказе сауны от 7 часов действует акция:
            <br />
            <div style={{ fontWeight: 600 }}>7+1 (8-ой час в подарок)</div>
            <br />С понедельника по пятницу до 17:00
            <br /> <div style={{ fontWeight: 600 }}>действует скидка 30%</div>
          </div>
          {!IS_MOBILE && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="315"
              height="340"
              viewBox="0 0 315 340"
              fill="none"
            >
              <path
                opacity="0.35"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M272.768 264.918C273.604 102.397 185.12 15.1066 1.78073 7.64143C-0.564959 7.49614 -0.564957 4.62505 1.61353 4.33855C61.443 -2.84013 116.075 -1.54888 163.502 11.5172C320.195 54.444 340.64 218.545 291.034 334.836C288.521 340.578 279.807 341.87 275.281 336.989C190.649 246.253 -40.616 258.601 59.5989 37.6475C184.952 72.2476 262.546 143.028 272.768 264.918Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className="stock-wrapper-subTitle">
          {!IS_MOBILE && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="315"
              height="340"
              viewBox="0 0 315 340"
              fill="none"
            >
              <path
                opacity="0.7"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.2323 75.0822C41.3963 237.603 129.88 324.893 313.219 332.359C315.565 332.504 315.565 335.375 313.386 335.661C253.557 342.84 198.925 341.549 151.498 328.483C-5.19504 285.556 -25.6398 121.455 23.966 5.1637C26.4789 -0.57843 35.1929 -1.86969 39.7194 3.01093C124.351 93.7472 355.616 81.3993 255.401 302.353C130.048 267.752 52.4535 196.972 42.2323 75.0822Z"
                fill="white"
              />
            </svg>
          )}

          <div className="stock-subTitle">
            С понедельника по четверг после 17:00
            <div style={{ fontWeight: 600 }}>действует скидка 15%</div> <br />
            <div style={{ fontWeight: 600 }}>
              Именинникам скидка 10%
            </div> <br /> За отметку в сторис соц сетях (Вконтакте, Телеграм)
            Написание отзыва (Яндекс карты, 2ГИС, Сообщество Вконтакте "Баня
            Баринъ") <div style={{ fontWeight: 600 }}>Веник в подарок!</div>
            <br />
            <div style={{ fontWeight: 600 }}>
              Акции действует на все номера!
              <br />
              Акции не суммируются!
            </div>
          </div>
        </div>
        <h3 className="stock-dopInfo">
          <div style={{ fontWeight: 600 }}>Дополнительные услуги:</div>
          веники, уголь, напитки, кальян, полотенца, одноразовые тапочки, коврик
          для сидения в парную, простынь.
        </h3>
      </Container>
    </div>
  );
};

export default Stock;
