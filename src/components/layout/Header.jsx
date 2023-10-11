import React, { useState } from "react";
import { styled } from "styled-components";
import Trello_logo from "../assets/icons/Trello_logo.svg.png";
import DownArrowIcon from "../assets/icons/DownArrowIcon.webp";
import CandyBox_Icon from "../assets/icons/CandyBox_Icon.png";
import { useDispatch } from "react-redux";
import { filterTask } from "../store/slices/TaskSlice";

const Header = () => {
  const dispatch = useDispatch();

  const searchTask = (e) => {
    dispatch(filterTask(e.target.value));
  };

  const [appBlockActive, setAppBlockActive] = useState("none");
  const [workPanelsActive, setWorkPanelsActive] = useState("none");
  const [workPanelsActivee, setWorkPanelsActivee] = useState("none");
  const [workPanelsActiveee, setWorkPanelsActiveee] = useState("none");
  const [workPanelsActiveeem, setWorkPanelsActiveeem] = useState("none");
  const [butons, setButons] = useState("none");

  const AppBlockClick = () => {
    if (appBlockActive == "none") {
      setAppBlockActive("block");
    } else {
      setAppBlockActive("none");
    }
    if (workPanelsActive == "block") {
      setWorkPanelsActive("none");
    }
    if (workPanelsActivee == "block") {
      setWorkPanelsActivee("none");
    }
    if (workPanelsActiveee == "block") {
      setWorkPanelsActiveee("none");
    }
    if (workPanelsActiveeem == "block") {
      setWorkPanelsActiveeem("none");
    }
  };

  const workHandler = () => {
    if (workPanelsActive == "none") {
      setWorkPanelsActive("block");
    } else {
      setWorkPanelsActive("none");
    }
    if (appBlockActive == "block") {
      setAppBlockActive("none");
    }
    if (workPanelsActivee == "block") {
      setWorkPanelsActivee("none");
    }
    if (workPanelsActiveee == "block") {
      setWorkPanelsActiveee("none");
    }
    if (workPanelsActiveeem == "block") {
      setWorkPanelsActiveeem("none");
    }
  };
  const clickHandler = () => {
    if (workPanelsActivee == "none") {
      setWorkPanelsActivee("block");
    } else {
      setWorkPanelsActivee("none");
    }
    if (workPanelsActive == "block") {
      setWorkPanelsActive("none");
    }
    if (appBlockActive == "block") {
      setAppBlockActive("none");
    }
    if (workPanelsActiveee == "block") {
      setWorkPanelsActiveee("none");
    }
    if (workPanelsActiveeem == "block") {
      setWorkPanelsActiveeem("none");
    }
  };

  const clickHandlerKortinca = () => {
    if (workPanelsActiveee == "none") {
      setWorkPanelsActiveee("block");
    } else {
      setWorkPanelsActiveee("none");
    }
    if (workPanelsActive == "block") {
      setWorkPanelsActive("none");
    }
    if (workPanelsActivee == "block") {
      setWorkPanelsActivee("none");
    }
    if (appBlockActive == "block") {
      setAppBlockActive("none");
    }
    if (workPanelsActiveeem == "block") {
      setWorkPanelsActiveeem("none");
    }
  };

  const clickHandlerWrun = () => {
    if (workPanelsActiveeem == "none") {
      setWorkPanelsActiveeem("block");
    } else {
      setWorkPanelsActiveeem("none");
    }
    if (workPanelsActiveee == "block") {
      setWorkPanelsActiveee("none");
    }
    if (workPanelsActivee == "block") {
      setWorkPanelsActivee("none");
    }
    if (workPanelsActive == "block") {
      setWorkPanelsActive("none");
    }
    if (appBlockActive == "block") {
      setAppBlockActive("none");
    }
  };
  const butonClick = () => {
    if (butons == "none") {
      setButons("block");
    } else {
      setButons("none");
    }
  };
  return (
    <HeaderStyled>
      <nav>
        <AppOutBlock>
          <Menu_Icon onClick={AppBlockClick}>
            <img src={CandyBox_Icon} alt="" />
          </Menu_Icon>
          <AppBlock style={{ display: appBlockActive }}>
            <AppBockHeader>
              <AppBockHeaderHead>
                <span>П...</span>
                <a href="https://id.atlassian.com/login?login_hint=turdalu836%40gmail.com&prompt=none&continue=https%3A%2F%2Fstart.atlassian.com%2F">
                  Начальная странца Atlasian
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                  >
                    <g fill="blue">
                      <path d="M19.005 19c-.003 0-.005.002-.005.002l.005-.002zM5 19.006c0-.004-.002-.006-.005-.006H5v.006zM5 4.994V5v-.006zM19 19v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2H5v14h14zM5 4.994V5v-.006zm0 14.012c0-.004-.002-.006-.005-.006H5v.006zM11 5H5v14h14v-6h2v6.002A1.996 1.996 0 0119.005 21H4.995A1.996 1.996 0 013 19.006V4.994C3 3.893 3.896 3 4.997 3H11v2zm8 0v3a1 1 0 002 0V4a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path>
                      <path d="M12.707 12.707l8-8a1 1 0 10-1.414-1.414l-8 8a1 1 0 001.414 1.414z"></path>
                    </g>
                  </svg>
                </a>
              </AppBockHeaderHead>
              <div className="trello">
                <div className="img">
                  <img
                    src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/trello/icons/white.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <span>Trello</span>
              </div>
            </AppBockHeader>
            <Main>
              <div class="textSearch">
                <span>ПОИСК</span>
              </div>
              <div className="block">
                <div className="blocks">
                  <div className="img">
                    <img
                      src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/confluence/icons/blue.svg"
                      alt=""
                      className="s"
                    />
                  </div>
                  <div className="info">
                    <div className="header">
                      <div className="name">Confluence</div>
                      <div className="status">НОВИНКА</div>
                    </div>
                    <div className="info">
                      Совместная работа над документами
                    </div>
                  </div>
                </div>

                <div className="blocks">
                  <div className="img">
                    <img
                      src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/jira-software/icons/blue.svg"
                      alt=""
                      className="s"
                    />
                  </div>
                  <div className="info">
                    <div className="header">
                      <div className="name">Jira Software</div>
                      {/* <div className="status"></div> */}
                    </div>
                    <div className="info">Отсеживание задач проектов</div>
                  </div>
                </div>

                <div className="blocks">
                  <div className="img">
                    <img
                      src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/jira-service-management/icons/blue.svg"
                      alt=""
                      className="s"
                    />
                  </div>
                  <div className="info">
                    <div className="header">
                      <div className="name">Jira Service Management</div>
                    </div>
                    <div className="info">
                      Управление ИТ-услугами с поддержкой с...
                    </div>
                  </div>
                </div>
                <div className="blocks">
                  <div className="img">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path
                        d="M12 21a9 9 0 110-18 9 9 0 010 18zm-1.101-10.78c-.248.127-.55.427-.678.678L8.24 14.797c-.55 1.084-.118 1.514.965.963l3.898-1.98c.248-.127.55-.427.677-.678l1.981-3.899c.552-1.083.12-1.514-.964-.964L10.9 10.221zM12 13a1 1 0 110-2 1 1 0 010 2z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="info">
                    <div className="header">
                      <div className="name">Другие продукты Atlassian</div>
                    </div>
                  </div>
                </div>
              </div>
            </Main>
          </AppBlock>
        </AppOutBlock>
        <div className="trelloLogoBlock">
          <TrelloIcon src={Trello_logo} className="hoverNone" alt="" />
          <TrelloIcon
            src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
            className="hoverActive"
          />
        </div>
        <NavLinks>
          <div className="workPanel" onClick={workHandler}>
            <span>Рабочие пространства</span>
            <img src={DownArrowIcon} alt="" />
            <div className="workPanelApp" style={{ display: workPanelsActive }}>
              <span className="spanru">Текущее рабочее пространство</span>
              <div>
                <div className="divPlei">P</div>
                <div className="divtrlo">
                  <p>Рабочее пространство Trello</p>
                </div>
              </div>
              <hr />
              <p className="texs">Ваши рабочие пространства</p>
              <div className="bacraundcolor">
                <div className="divPleii">P</div>
                <div className="divtrloo">
                  <p>Рабочее пространство Trello</p>
                </div>
              </div>
            </div>
          </div>

          <div className="workPanell" onClick={clickHandler}>
            <span>Недавние</span>
            <img src={DownArrowIcon} alt="" />
            <div
              className="workPanelApp2"
              style={{ display: workPanelsActivee }}
            >
              <div className="Imgbacraunt">
                <img
                  src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x78/8ccb1fc92b0d617f3a115b0bb0bf1a01/photo-1691958671724-966fd5a84cc2.jpg"
                  alt=""
                />
                <div className="containerdidiv">
                  <div>
                    <span className="sontainer-color">
                      Simple Project Board
                    </span>
                  </div>
                  <div>Рабочее пространство Trello</div>
                </div>
                <div className="stardiv">
                  <span>⭐</span>
                </div>
              </div>
              <div className="Imgbacraunt">
                <img
                  src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x78/8ccb1fc92b0d617f3a115b0bb0bf1a01/photo-1691958671724-966fd5a84cc2.jpg"
                  alt=""
                />
                <div className="containerdidiv">
                  <div>
                    <span className="sontainer-color">container</span>
                  </div>
                  <div>Рабочее пространство Trello</div>
                </div>
                <div className="stardiv">
                  <span>⭐</span>
                </div>
              </div>
              <div className="Imgbacraunt">
                <img
                  src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg"
                  alt=""
                />
                <div className="containerdidiv">
                  <div>
                    <span className="color-Meeting">1-on-1 Meeting Agenda</span>
                  </div>
                  <div>Рабочее пространство Trello</div>
                </div>
                <div className="stardiv">
                  <p className="julduz-hover">⭐</p>
                </div>
              </div>
            </div>
          </div>

          <div className="workPanell" onClick={clickHandlerKortinca}>
            <span>В избранном</span>
            <img src={DownArrowIcon} alt="" />
            <div
              className="workPanelApp2"
              style={{ display: workPanelsActiveee }}
            >
              <div className="Imgh-kartincu">
                <img
                  className="fon"
                  src="https://trello.com/assets/cc47d0a8c646581ccd08.svg"
                  alt=""
                />
              </div>
              <p class="OFxLc1QY5FwwnA">
                Чтобы быстро находить важные доски,
                <br /> отмечайте их.
              </p>
            </div>
          </div>

          <div className="workPanell" onClick={clickHandlerWrun}>
            <span>Больше</span>
            <img src={DownArrowIcon} alt="" />
            <div
              className="workPanelApp22"
              style={{ display: workPanelsActiveeem }}
            >
              <div className="Imgbacraunt">
                <div className="containerdidiv">
                  <span className="sontainer-color">Шаблоны</span>
                </div>
              </div>
            </div>
          </div>
        </NavLinks>

        <button
          onClick={butonClick}
          style={{padding:'0 35px', fontSize:'15px', width:"15px", height:'40px', color:'white', variant:''}}
          padding="0 35px"
          fontSize="15px" 
          width="15px"
          height="40px"
          color="#ffff"
          variant="contained"
        >
          ➕
        <div className="workPanelApp222" style={{ display: butons }}>
          <div>🧡</div>
        </div>
        </button>
      </nav>
      <SearchAndSettings>
        <SearchInput>
          <svg filter="invert(70%)" width="24" height="24">
            <path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"></path>
          </svg>
          <input onChange={searchTask} type="text" placeholder="Поиск" />
        </SearchInput>
        <span>
          <svg filter="invert(70%)" width="24" height="24">
            <path d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z"></path>
          </svg>
        </span>
        <span>
          <svg
            filter="invert(70%)"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"></path>
          </svg>
        </span>
        <span>
          <svg
            filter="invert(70%)"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12 20V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            ></path>
          </svg>
        </span>
        <span>
          <MyProfil
            src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/N-3.png"
            alt="GoogleIcon"
          />
        </span>
      </SearchAndSettings>
    </HeaderStyled>
  );
};

export default Header;

const TrelloIcon = styled.img`
  height: 27px;
  width: 91px;
  padding: 0 8px;
  margin-left: 5px;
  filter: invert(59%);
`;

const HeaderStyled = styled.header`
  background-color: #1d2125;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & * {
    color: #9fadbc;
  }
  & nav {
    display: flex;
    align-items: center;
    width: 53%;
  }
  .trelloLogoBlock .hoverActive {
    display: none;
  }
  .trelloLogoBlock {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trelloLogoBlock:hover .hoverNone {
    display: none;
  }
  .trelloLogoBlock:hover .hoverActive {
    display: block;
    height: 20px;
    width: 91px;
    filter: invert(45%);
  }
`;

const Menu_Icon = styled.span`
  padding: 0 10px 0 15px;
  & img {
    cursor: pointer;
    width: 16px;
    height: 16px;
    filter: invert(70%);
  }
`;
const AppOutBlock = styled.div`
  position: relative;
`;
const AppBlock = styled.div`
  width: 350px;
  min-height: 200px;
  overflow: auto;
  left: 10px;
  top: 50px;
  background: white;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 999;
  border-radius: 10px;
  padding: 10px;
`;
const Main = styled.div`
  padding: 10px 0;
  & .textSearch {
    font-size: 1.01rem;
  }
  & .textSearch span {
    color: #000000c9;
    font-weight: 600;
  }
  & .block {
    margin: 0px;
    margin-top: 5px;
  }
  & .block .blocks {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    gap: 10px;
  }
  & .block .blocks:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  & .block .blocks .img {
    width: 45px;
    height: 45px;
    border-radius: 5px;
    background: white;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .block .blocks .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & .block .blocks .info .header {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  & .block .blocks .info .header .name {
    color: black;
    font-size: 1.1rem;
  }
  & .block .blocks .info .header .status {
    color: #076cfa;
    font-size: 0.9rem;
    padding: 0 5px;
    background: #4d92f35b;
    font-weight: 700;
  }
  & .block .blocks .info .info {
    font-size: 0.9rem;
  }
`;
const AppBockHeader = styled.div`
  & .trello {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    padding: 8px;
    border-radius: 5px;
  }
  & .trello:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  & .trello .img {
    background: #0c66e4;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .trello span {
    font-size: 1.3rem;
    color: black;
  }
`;
const AppBockHeaderHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  align-items: center;
  padding: 10px;
  & span {
    color: black;
  }
  & a {
    color: blue;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & div {
    display: flex;
    padding: 7px 7px;
    border-radius: 3px;
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    &:hover {
      /* background-color: #2e3439; */
    }
    & img {
      width: 14px;
      height: 12px;
      filter: invert(70%);
      padding: 0 4px;
    }
  }
  .workPanel {
    position: relative;
    .workPanelApp {
      left: 0px;
      top: 50px;
      position: absolute;
      z-index: 999;
      width: 380px;
      min-height: 200px;
      background: white;
      border-radius: 5px;
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    }
    .spanru {
      color: black;
      font-size: 20px;
      margin-left: 20px;
    }
    .divPlei {
      width: 35px;
      height: 35px;
      font-size: 30px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #4a48bc;
      color: azure;
      margin-left: 20px;
    }
    .divPleii {
      width: 35px;
      height: 35px;
      font-size: 30px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #4a48bc;
      color: azure;
      margin-left: 20px;
    }
    .divtrlo > p {
      font-size: 20px;
      color: #111010;
      font-weight: 500;
    }
    .divtrloo > p {
      font-size: 20px;
      color: #111010;
      font-weight: 500;
    }
    .texs {
      color: #111010;
      font-weight: 600;
    }
    .bacraundcolor {
      &:hover {
        background-color: #e6e9eb;
        border-radius: 10px;
      }
    }
  }
  .workPanell {
    position: relative;
    .workPanelApp2 {
      left: 0px;
      top: 50px;
      position: absolute;
      z-index: 999;
      width: 380px;
      min-height: 200px;
      background: white;
      border-radius: 5px;
      box-shadow: 1px 1px 5 px 1px rgba(0, 0, 0, 0.1);
    }
    .Imgbacraunt {
      border-radius: 10px;
      width: 95%;
      height: 50px;
      .stardiv {
        display: flex;
        justify-content: flex-end;
        width: 50px;
      }
      .stardiv > span {
        opacity: 0;
      }
    }
    .Imgbacraunt:hover {
      background: rgba(0, 0, 0, 0.04);
      .stardiv > span {
        opacity: 1;
      }
    }
    .Imgbacraunt > img {
      filter: invert(0%);
      border-radius: 10px;
      width: 50px;
      height: 40px;
    }
    .containerdidiv {
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
      }
      .sontainer-color {
        color: #020202;
        font-size: 22px;
      }
      .color-Meeting {
        color: #000;
        font-size: 20px;
      }
    }
    .kortinca {
      /* border: 1px solid red; */
      /* position: relative; */
      /* .workPanelApp-kortinca {
      left: 0px;
      top: 50px;
      position: absolute;
      z-index: 999;
      width: 380px;
      min-height: 200px;
      background: white;
      border-radius: 5px;
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    } */
    }
    .Imgh-kartincu {
      /* border: 1px solid red;
    width: 300px;
    height: 130px; */
      /* margin-left:40px; */
    }
    .fon {
      width: 100%;
      height: 118px;
      filter: invert(0%);
    }
    .OFxLc1QY5FwwnA {
      text-align: center;
      color: var(--ds-text-subtle, #44546f);
      font-size: 20px;
      /* margin-top: 12px; */
    }
    .workPanelApp22 {
      left: 0px;
      top: 50px;
      position: absolute;
      z-index: 999;
      width: 380px;
      min-height: 70px;
      background: white;
      border-radius: 10px;
      box-shadow: 1px 1px 5px 1px rgba(7, 7, 7, 0.966);
      filter: invert(2%);
    }
  }
  /* .workPanelApp222{
    left: 0px;
    top: 50px;
    position: absolute;
    z-index: 999;
    width: 380px;
    min-height: 70px;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(7, 7, 7, 0.966);
    filter: invert(2%);
    display: flex;
    align-items: center;
  } */

`;

const SearchAndSettings = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  & span {
    padding: 3px;
    border-radius: 100%;
    display: flex;
    &:hover {
      background-color: #41474d;
    }
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  color: white;
  border: 1px solid #616161;
  border-radius: 5px;
  background-color: #383737;
  padding: 0 0 0 4px;
  &:hover {
    background-color: #404040;
  }
  & input {
    padding: 0 0 0 5px;
    width: 100%;
    font-size: 15px;
    height: 32px;
    outline: none;
    border: none;
    background-color: #383737;
    &::placeholder {
      color: #9fadbc;
    }
    &:hover {
      background-color: #404040;
    }
  }
`;

const MyProfil = styled.img`
  height: 30px;
  width: 30px;
  filter: invert(0%);
`;
