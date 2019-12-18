import React from 'react';
import '../components/css/custom.css';

const About = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h2 className="mb-5">About</h2>
                경력	커머스웨어  2016.08 ~ 재직 중 | 사원
                	Frontend 및 Backend 개발
                	외부 인터페이스(EP, 셀러툴, PG) 연동
                	설계서, 명세서, 매뉴얼 등 작성 및 현행화 작업


                학력	서경대학교  2012.03 ~ 2016.02 | 서울 | 졸업
                        전공	전자공학
                        학점	4.05 / 4.5
                        논문&졸업작품	Unity2D를 이용한 액션 · 퍼즐 게임 제작
                
                        숭의여자고등학교  2009.03 ~ 2012.02 | 서울 | 졸업
                        계열	문과

            </div>
        </section>
    );
};

export default About;