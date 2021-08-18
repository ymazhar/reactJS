import "./main-header.scss";
import MainLogo from "../../components/main-logo";
import AddMovie from "../../components/add-movie";

const MainHeader = ({ toggleAddMovieModal }) => {
  return (
    <header className={"main-header"}>
      <div className={"main-container"}>
        <div className="main-header__holder">
          <MainLogo />
          <AddMovie onClick={toggleAddMovieModal} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
