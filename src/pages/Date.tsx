import { useState } from "react";
import CardComponent from "../components/Card/Card";
import Layout from "../layouts/layout";
import food1 from "../assets/img/food/food1.jpg";
import food2 from "../assets/img/food/food2.jpg";
import food3 from "../assets/img/food/food3.jpg";
import food4 from "../assets/img/food/food4.jpg";
import food5 from "../assets/img/food/food5.jpg";
import food6 from "../assets/img/food/food6.jpg";

import mov1 from "../assets/img/movies/img1.jpg";
import mov2 from "../assets/img/movies/img2.jpg";
import mov3 from "../assets/img/movies/img3.jpg";
import mov4 from "../assets/img/movies/img4.jpg";
import mov5 from "../assets/img/movies/img5.jpg";
import mov6 from "../assets/img/movies/img6.jpg";

import img1 from "../assets/img/cat-jump.gif";
import HeartButton from "../components/HeartButton/HeartButton";
import { purple } from "../components/interfaces/HeartButton.interface";
import HeartSlider from "../components/Heart/Heart";
import { useNavigate } from "react-router";

const Date = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "food"
  );
  const navigate = useNavigate();

  const handleCardClick = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "food":
        return "What do you want to play?";
      case "movie":
        return "What movie do you want to watch ?";
      default:
    }
  };

  const nextQuestion = () => {
    if (selectedCategory === "rate") {
      navigate("/thankyou");
    } else {
      if (selectedCategory === "movie") {
        setSelectedCategory("rate");
      } else {
        setSelectedCategory("movie");
      }
    }
    setSelectedCards([]);
  };

  const foodData = [
    {
      title: "Valorant",
      image: food1,
    },
    {
      title: "CS2",
      image: food2,
    },
    {
      title: "FiveM",
      image: food3,
    },
  ];

  const movieData = [
    {
      title: "Beetlejuice Beetlejuice",
      image: mov1,
    },
    {
      title: "Dul Muluk Dul Malik",
      image: mov2,
    },
    {
      title: "Hellboy: The Crooked Man",
      image: mov3,
    },
    {
      title: "Never Let Go",
      image: mov4,
    },
    {
      title: "Transformers One",
      image: mov5,
    },
    {
      title: "Deadpool & Wolverine",
      image: mov6,
    },
  ];

  return (
    <Layout>
      <h1 style={{ color: purple }}>{getTitle()}</h1>
      <main className="d-flex flex-wrap justify-content-center mt-3">
        {selectedCategory === "food" &&
          foodData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "movie" &&
          movieData.map((card, index) => (
            <div key={index} className="m-2">
              <CardComponent
                title={card.title}
                image={card.image}
                isSelected={selectedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        {selectedCategory === "rate" && (
          <>
            <div className="d-flex flex-column justify-content-center">
              <img
                className="m-auto"
                src={img1}
                alt="Image 1"
                style={{
                  width: "300px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <h1 style={{ color: purple }} className="py-3">
                Rate how exited are you
              </h1>
            </div>
            <HeartSlider></HeartSlider>
          </>
        )}
      </main>
      <HeartButton
        style={{
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
        text="Continue ⊂(・ヮ・⊂)"
        onClick={nextQuestion}
      />
    </Layout>
  );
};

export default Date;
