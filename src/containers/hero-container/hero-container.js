import HeroImage from "../../components/hero-image";
import Title from "../../elements/title";
import "./hero-container.scss";
import Search from "../../components/search";

const HeroContainer = () => {
  return (
    <section className={"hero-container"}>
      <HeroImage />
      <div className={"hero-container__holder"}>
        <Title text={"Find your movie"} />
        <Search />
      </div>
    </section>
  );
};

export default HeroContainer;
