import React from "react";
import { styled } from "styled-components";
import Header from "../../Header";
import AllTodo from "../../../../Todo/AllTodo";
import Main from "../../Main";

const Home = () => {

  return (
    <Wrapper >
      <Header/>
      <Main/>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-size: cover;
  background-position: center bottom;
`;
