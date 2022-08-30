import React from "react";
import Header from "../components/Header";
import ImageAndContent from "../components/reusableComp";
import AboutImage from "../assets/images/aboutUs.png";
import LocationImage from "../assets/images/restaurantLocation.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const sections = {
  about: {
    title: "About us",
    locationTitle: "",
    content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      \n There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,

    image: {
      src: AboutImage,
      alt: "About us name",
    },
    id: "aboutSection",
  },
  location: {
    title: "Location",
    locationTitle: "JOHNS CREEK, ATLANTA GA",
    content: "2872 Kimbal Rd. Johns Creek",
    image: {
      src: LocationImage,
      alt: "Location image name",
    },
    id: "locationSection",
  },
};
const HomePage = () => {
  return (
    <div>
      <Header />
      <ImageAndContent
        title={sections.about.title}
        content={sections.about.content}
        src={sections.about.image.src}
        alt={sections.about.image.alt}
        id={sections.about.id}
      />
      <Menu />
      <ImageAndContent
        title={sections.location.title}
        locationTitle={sections.location.locationTitle}
        content={sections.location.content}
        src={sections.location.image.src}
        alt={sections.location.image.alt}
        id={sections.location.id}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
