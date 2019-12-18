import React from 'react';
import { Link } from 'react-router';
import '../components/css/custom.css';

const History = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                <h2 className="mb-5">History</h2>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            {/* <h4>Latest News</h4> */}
                            <ul className="timeline">
                                <li>
                                    <Link to="http://www.commerceware.co.kr/index.do" target="_blank">회사</Link>
                                    <Link to="#" target="_blank" className="float-right">2016.08 ~ </Link>
                                    <p>웹 개발자로서의 시작. 선호하는 개발 종류와 스타일을 깨닫다. 커머스 개발에 매료되다.</p>
                                </li>
                                <li>
                                    <Link to="http://www.iibi.or.kr" target="_blank">교육원</Link>
                                    <Link to="#" target="_blank" className="float-right">2018.02 ~ 2018.08</Link>
                                    <p>Java와의 첫 만남. 웹 개발에 빠져들다.</p>
                                </li>
                                <li>
                                    <Link to="https://www.skuniv.ac.kr/" target="_blank">대학교</Link>
                                    <Link to="#" target="_blank" className="float-right">2012.03 ~ 2016.02</Link>
                                    <p>전자공학 관련 하드웨어 언어를 주로 배우다. 프로그래밍에 눈 뜨다.</p>
                                </li>
                                <li>
                                    <Link to="#" target="_blank">초중고</Link>
                                    <Link to="#" target="_blank" className="float-right">2000 ~ 2011</Link>
                                    <p>초등학교에서 홈페이지 제작을 통해 처음 프로그래밍을 접하다.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;