import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import Line from "../common/line";
import SocialNetworks from "../ui/socialNetworks";
import LineBlack from "../common/lineBlack";
import ButtonScrollTo from "../common/buttonScrollTo";
import {useSelector} from "react-redux";
import {getDataStatus, getUserById} from "../../store/usersSlice";
import {useParams} from "react-router-dom";
import Loading from "../ui/loading";
import SliderBox from "../ui/slider/slider";
import Wave from "../common/vawe/wave";
import Progress from "../common/progress";
import BackButton from "../common/backButton";
import Bookmark from "../common/bookmark/bookmark";

const UserPage = () => {
  const {userId} = useParams();
  const dataStatus = useSelector(getDataStatus());
  const user = useSelector(getUserById(Number(userId)));
  return (
    <>
      {!dataStatus ? <Loading/>
        : (
          <>
            <Container>
              <Row>
                <Col>
                  <BackButton/>
                </Col>
                <Col className="usePage d-flex justify-content-end">
                  <Bookmark/>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} className="mt-5 d-flex">
                  <Row className="d-flex flex-column">
                    <Col>
                      <Row className="d-flex flex-column">
                        <Col>
                          <Line className="mt-5"/>
                          <h1 className="my-3">
                            {user.name} {user.surname}
                          </h1>
                          <Line/>
                        </Col>
                        <Col className="mt-2 d-flex justify-content-between w-50">
                          <SocialNetworks socialNetworks={user.socialNetworks}/>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="d-flex flex-column justify-content-end">
                      <h5>
                        ?????????????? ?????????? "Junior Frontend Developer ?????????? 3"
                        <LineBlack/>
                      </h5>
                      <p>
                        ?????????????? ???????? React ???? ???????????? Junior, ????????????????
                        ???????????????? ??????????????????. ?????????????? ?? ??????????????
                        ???????????????????? React Single Application ????????????????????
                        ???????????????????????? ????????????????????: ???????????????? ?? ????????????????.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={6} className="d-flex justify-content-center">
                  <Image src={user.img} className="w-75 border-radius"/>
                </Col>
              </Row>
              <Row className="mt-5 d-flex flex-column">
                <Col className="d-flex flex-column align-items-center">
                  <h2>
                    ???????????? ???? ?????????????? ??????????????
                  </h2>
                  <h4 className="text-danger">
                    ??????????????. ?????????????????? ???????????????????? ???? ???????? ??React??
                  </h4>
                  <p>
                    ???????????????????? ???????????? ???????????? React, ?????????????????????? SPA
                    ???????????????????? ???? React ?????????????????? ?????????????????? ????????????.
                  </p>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                  <Line/>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                  <ButtonScrollTo/>
                  <Row>
                    <Col>
                      ???? ?????????????? ?????????????????? ???? ??????????????????????????, ????????????????????, ??????????????-???????????????????? ?? ????????????
                      ???????????????????????? IT-??????????. ???? ?????? ?????????????? ??????????????????, ?????? ?? ?????????????????? ??????????????????????,
                      ?????????????? ???????????????????? ?????????????????????????????? ???? ??????????????????????.
                    </Col>
                    <Col>
                      ?????? ???????????? ???????????????? ??????????????, ?????????? ???????????????????? ?? ???????????? ?????? ???????????????? ?????? ???????????????????? ????????????????????????
                      ??????????.
                      ???????????? ?????????? ?????????? ?????? ?????????????????? ???? ?????? ??????, ???????? ???? ?????????????? ?????????????????? ???? ???????????????????????? ??????????.
                      ?????????? ???????????????? ?????????????????????? ??????????????????, ???????????????????????? ???????????????? ?? ?????????????? ???????????????????? ??????????????????????
                      ?????????????? ?????? ?????? ?? ?????????????????????????????? ???????????? ?????? ????????, ?????????? ???????????? ?? ????????????.
                    </Col>
                    <Col>
                      {user.involvedInDevelopment}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <div className="my-5 p-5 banner-background text-center text-white">
              <h3>
                ????, ?????? ?????????????????????? ?????????? ???????????????????? ???????????????????? ???????????? ?????? ?????????????? ?????????? ??????????????
              </h3>
            </div>
            <Container>
              <Row>
                <Col>
                  <Col className="d-flex flex-column align-items-center">
                    <h2>
                      ?????? ??????
                    </h2>
                  </Col>
                  <Col className="d-flex flex-column align-items-center">
                    <Line/>
                  </Col>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p>
                    {user.about}
                  </p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Row>
                  <Col>
                    <Col className="d-flex flex-column align-items-center">
                      <h2>
                        ???????????????? ????????????
                      </h2>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                      <Line/>
                    </Col>
                  </Col>
                </Row>
                <Col className="mt-3">
                  <Progress user={user.progressBar}/>
                </Col>
              </Row>
              <Row className="mt-5">
                <Row>
                  <Col>
                    <Col className="d-flex flex-column align-items-center">
                      <h2>
                        ?????? ????????????
                      </h2>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                      <Line/>
                    </Col>
                  </Col>
                </Row>
                <Col className="mt-5">
                  <SliderBox userSlider={user.slider}/>
                </Col>
              </Row>
            </Container>
          </>
        )}
    </>
  );
};

export default UserPage;