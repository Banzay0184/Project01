import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Личное обучение профессиональному тренингу",];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className="animate__animated animate__fadeIn banner-text">
                                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Личное обучение профессиональному тренингу"]'><span
                                        className="wrap">{text}</span></span></h1>
                                    <div className="">
                                        <p>Обо мне</p>
                                        <ul className='about-list'>
                                            <li>
                                                <svg width="18.000000" height="12.000000" viewBox="0 0 18 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Форма 1"
                                                          d="M2 5.5L5.83 8.91C6.21 9.24 6.78 9.24 7.16 8.91L15 2"
                                                          stroke="#FFFFFF" stroke-opacity="1.000000"
                                                          stroke-width="4.000000" stroke-linecap="round"/>
                                                </svg>Заработал первый миллион рублей в 16 лет.
                                            </li>
                                            <li>
                                                <svg width="18.000000" height="12.000000" viewBox="0 0 18 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Форма 1"
                                                          d="M2 5.5L5.83 8.91C6.21 9.24 6.78 9.24 7.16 8.91L15 2"
                                                          stroke="#FFFFFF" stroke-opacity="1.000000"
                                                          stroke-width="4.000000" stroke-linecap="round"/>
                                                </svg>В сфере трейдинга с 13 лет.

                                            </li>
                                            <li>
                                                <svg width="18.000000" height="12.000000" viewBox="0 0 18 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Форма 1"
                                                          d="M2 5.5L5.83 8.91C6.21 9.24 6.78 9.24 7.16 8.91L15 2"
                                                          stroke="#FFFFFF" stroke-opacity="1.000000"
                                                          stroke-width="4.000000" stroke-linecap="round"/>
                                                </svg>Вот уже как 5 лет я торгую и зарабатываю на финансовых рынках. В чем помогу и тебе!.
                                            </li>
                                            <li>
                                                <svg width="18.000000" height="12.000000" viewBox="0 0 18 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Форма 1"
                                                          d="M2 5.5L5.83 8.91C6.21 9.24 6.78 9.24 7.16 8.91L15 2"
                                                          stroke="#FFFFFF" stroke-opacity="1.000000"
                                                          stroke-width="4.000000" stroke-linecap="round"/>
                                                </svg>Торгую любые рынки и любой таймфрейм (форекс, акции, фьючерсы).
                                            </li>
                                            <li>
                                                <svg width="18.000000" height="12.000000" viewBox="0 0 18 12"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Форма 1"
                                                          d="M2 5.5L5.83 8.91C6.21 9.24 6.78 9.24 7.16 8.91L15 2"
                                                          stroke="#FFFFFF" stroke-opacity="1.000000"
                                                          stroke-width="4.000000" stroke-linecap="round"/>
                                                </svg>Совокупность моих активов превысила сумму в 350.000$ на момент 2024 года.
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={() => console.log('connect')}>Узнать больше обо мне <ArrowRightCircle
                                        size={25}/></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
