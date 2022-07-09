import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import Line from "../common/line";
import SocialNetworks from "../ui/socialNetworks";
import LineBlack from "../common/lineBlack";
import ButtonScrollTo from "../common/buttonScrollTo";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`http://localhost:3004/users/1`)
            .then((res) => res.json())
            .then((result) => {
                setUser(result);
            });
    }, []);

    console.log("user", user);
    console.log("userId", userId);

    if (user === undefined) {
        return "...loading"
    } else {
        return (
            <Container>
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
                                    <Col className="mt-2 d-flex justify-content-between w-25">
                                        <SocialNetworks socialNetworks={user.socialNetworks}/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="d-flex flex-column justify-content-end">
                                <h5>
                                    Студент курса "Junior Frontend Developer Поток 3"
                                    <LineBlack/>
                                </h5>
                                <p>
                                    Освоили тему React на уровне Junior, овладели
                                    основами профессии. Создали с помощью
                                    фреймворка React Single Application визуальную
                                    составляющую приложения: элементы и анимацию.
                                </p>
                            </Col>
                        </Row>
                        <ButtonScrollTo/>
                    </Col>
                    <Col xs={6} md={6} className="d-flex justify-content-center">
                       <Image src={user.img} className="w-75"/>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex flex-column">
                    <Col className="d-flex flex-column align-items-center">
                        <h2>
                            Вместе мы создаем решения
                        </h2>
                        <h4 className="text-danger">
                            Хакатон. Командная разработка по теме «React»
                        </h4>
                        <p>
                            Закрепляем знания модуля React, разработаем SPA
                            приложение на React благодаря командной работе.
                        </p>
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                        <Line/>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3">
                        <Row>
                            <Col>
                                МЫ команда состоящая из программистов, дизайнеров, продакт-менеджеров и других
                                специалистов IT-сферы. Мы уже готовый коллектив, так и одиночные специалисты,
                                которые объедились непосредственно на мероприятии.
                            </Col>
                            <Col>
                               Как только получили задание, сразу приступили к работе над кодингом для достижения поставленных целей.
                                Работа кипит почти без перерывов до тех пор, пока не истечет уделенное на соревнование время.
                                Царит довольно напряженная атмосфера, разработчики работают в течение длительных промежутков
                                времени без сна и останавливаются только для того, чтобы поесть и попить.
                            </Col>
                            <Col>
                                Я, как часть этого большого механизма сотворил:
                                !!!Задача организации, в особенности же дальнейшее развитие различных форм деятельности
                                    представляет собой интересный эксперимент проверки дальнейших направлений развития.
                                    Повседневная практика показывает, что сложившаяся структура организации способствует!!!
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>

                    </Col>
                </Row>
            </Container>
        );
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
