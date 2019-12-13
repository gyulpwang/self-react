import React from 'react';

const Education = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌</h3>
                        <div className="subheading mb-3">inflearn</div>
                        <div>리액트(React) 기초, 일부 ES6 문법 사용. 전화번호부 앱 제작</div>
                        <p>Github : https://github.com/gyulpwang/inflearn-react.git</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2019.11</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">인터렉티브한 UI개발을 위한 ReactJS 프로그래밍 무료 재직자 교육</h3>
                        <div className="subheading mb-3">방송정보국제교육원</div>
                        <div>리액트(React) 기초, 일부 ES6 문법 사용. 미니 프로젝트 진행</div>
                        <p>Github : https://github.com/gyulpwang/kic-react.git</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2019.11</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">자바기반웹어플리케이션개발자</h3>
                        <div className="subheading mb-3">방송정보국제교육원</div>
                        <div>Java, HTML, CSS, JSP, JavaScript, jQuery, BootStrap, JSTL, Servlet, MyBatis, Spring, DataBase, 전자정부프레임워크, 안드로이드 학습 및 응용</div>
                        <p>개인 프로젝트 : 커핌 (TODO 설명필요)</p>
                        <p>팀 프로젝트 : 키위 (TODO 설명필요)</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2016.02.12 ~ 2016.08.11</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;