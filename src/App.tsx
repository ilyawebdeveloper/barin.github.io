import "./App.scss";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";
import PageTitle from "./components/PageTitle/PageTitle";
import CardItem, { PropsCardItem } from "./components/CardItem/CardItem";
import Container from "./components/Container/Container";
import { cards } from "./data/cardsData";
import Stock from "./components/Stock/Stock";
import { Reviews } from "./components/Reviews/Reviews";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Main />

      <PageTitle
        title="Услуги"
        subtitle="Номера на любой вкус и бюджет"
        id="services"
      />
      <Container>
        <div className="wrapper-app">
          {cards.map((cardItem: PropsCardItem, index) => (
            <CardItem
              key={index}
              title={cardItem.title}
              numberSeats={cardItem.numberSeats}
              tarif={cardItem.tarif}
              price={cardItem.price}
              description={cardItem.description}
              variant={cardItem.variant}
              priceHoliday={cardItem.priceHoliday}
              tarifHoliday={cardItem.tarifHoliday}
            />
          ))}
        </div>
      </Container>
      <Container>
        <div className="main-info">
          * Для всех номеров:<br /> Минимальное время посещения: 2 часа<br />  Минимальное
          время чана: от 4 часов и берётся на всё время посещения.<br />  Праздничные
          дни: с 15 декабря по 10 января<br /> Новогодняя ночь: от 8 часов
        </div>
      </Container>

      <PageTitle
        title="Галерея"
        subtitle="Настоящий отдых для души и тела"
        id="gallery"
      />
      <Gallery />

      <PageTitle title="Акции" subtitle="Помогаем вам сэкономить" id="stock" />
      <Stock />

      <PageTitle title="Отзывы" subtitle="Узнайте мнение других" id="reviews" />
      <Reviews />

      <PageTitle
        title="Контакты"
        subtitle="Вы легко сможете нас найти"
        id="footer"
      />

      <Footer />
    </>
  );
}

export default App;
