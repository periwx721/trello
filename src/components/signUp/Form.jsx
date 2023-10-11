import React from 'react'
import styled from 'styled-components'
import TrelloBackground_Img from "../assets/images/1669985011_1-kartinkin-net-p-lampovii-fon-instagram-1.jpg"
import InputButton from './InputsEndButtons'



const Form = () => {


  return (
    <BackroundImg>
            <TrelloImg alt="Trello" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"/>
            <Section>
                <InputButton/>
            </Section>
    </BackroundImg>
  )
}

export default Form

const BackroundImg = styled.div`
  height: 99vh;
  background-image: url(${TrelloBackground_Img});
  background-position: center bottom;
  background-size: cover;
  overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TrelloImg = styled.img`
  color: #4d4d4d;
  font-weight: 300;
  line-height: 1.44em;
  font-size: 14px;
  display: block;
  height: 43px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 199vh;
  `