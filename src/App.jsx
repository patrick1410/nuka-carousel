import "./App.css";
import Carousel from "nuka-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>Hello Nuka</h1>
      <NukaCarousel />
    </div>
  );
}

export default App;

const NukaCarousel = () => {
  const buttonStyles = {
    color: "#F5F5F5",
    background: "none",
    outline: "none",
  };

  return (
    <Carousel
      defaultControlsConfig={{
        pagingDotsStyle: { display: "none" },
        nextButtonText: <FaChevronRight size={48} />,
        nextButtonStyle: buttonStyles,
        prevButtonText: <FaChevronLeft size={48} />,
        prevButtonStyle: buttonStyles,
      }}
      slidesToShow={2}
      enableKeyboardControls={true}
      wrapAround={true}
      cellAlign="center"
      animation="zoom"
      autoplay={true}
      autoplayInterval={5000}
    >
      <img src="src\assets\games\diablo-3-bg.jpeg" height={350} width={625} />

      <img src="src\assets\games\mario-bg.jpeg" height={350} width={625} />

      <img src="src\assets\games\dota-2-bg.jpg" height={350} width={625} />

      <img src="src\assets\games\fortnite-bg.jpeg" height={350} width={625} />

      <img src="src\assets\games\lol-bg.jpeg" height={350} width={625} />

      <img
        src="src\assets\games\halo-infinite-bg.jpeg"
        height={350}
        width={625}
      />

      <img
        src="src\assets\games\king-of-fighters-xv.jpeg"
        height={350}
        width={625}
      />

      <img
        src="src\assets\games\forza-horizon-5-bg.jpeg"
        height={350}
        width={625}
      />
    </Carousel>
  );
};
