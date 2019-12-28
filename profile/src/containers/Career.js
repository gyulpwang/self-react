import React from 'react';
import { Link } from 'react-router';
import '../components/css/custom.css';

import cware from '../components/img/about/cware.gif';
import sku from '../components/img/about/sku.jpg';
import soongeui from '../components/img/about/soongeui.png';

const Career = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h2 className="mb-5">Career</h2>
                <div className="card-container">
                    <div className="card about-card-style card-item">
                        <img src={cware} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">커머스웨어</h5>
                            <p className="card-text">경력 | 2016.08 ~ 재직 중 | 대리</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Frontend 및 Backend 개발</li>
                            <li className="list-group-item">외부 인터페이스(EP, 셀러툴, PG) 연동</li>
                            <li className="list-group-item">설계서, 명세서, 매뉴얼 등 작성 및 현행화 작업</li>
                        </ul>
                        <div className="card-body">
                            <Link href="http://www.commerceware.co.kr/index.do" target="_blank" className="card-link">http://www.commerceware.co.kr</Link>
                        </div>
                    </div>
                    <div className="card about-card-style card-item">
                        <img src={sku} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">서경대학교</h5>
                            <p className="card-text">학력 | 2012.03 ~ 2016.02 | 서울 | 졸업</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">전공	전자공학</li>
                            <li className="list-group-item">학점	4.05 / 4.5</li>
                            <li className="list-group-item">논문&졸업작품	Unity2D를 이용한 액션 · 퍼즐 게임 제작</li>
                        </ul>
                        <div className="card-body">
                            <Link href="https://www.skuniv.ac.kr" target="_blank" className="card-link">https://www.skuniv.ac.kr</Link>
                        </div>
                    </div>
                    <div className="card about-card-style card-item">
                        <img src={soongeui} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">숭의여자고등학교</h5>
                            <p className="card-text">학력 | 2009.03 ~ 2012.02 | 서울 | 졸업</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">계열	문과</li>
                        </ul>
                        <div className="card-body">
                            <Link href="http://soongeui.hs.kr/index.do" target="_blank" className="card-link">http://soongeui.hs.kr/index.do</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;