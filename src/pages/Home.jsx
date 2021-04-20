import React from "react";
import MetaDecorator from "../components/shared/MetaDecorator/MetaDecorator";
import SearchCard from "./../components/SearchCard";

const Home = () => {
  return (
    <div>
      <MetaDecorator
        title="Healovo | Home"
        description="A medical booking website that connects doctors with patients"
      />
      <SearchCard />
    </div>
  );
};

export default Home;
