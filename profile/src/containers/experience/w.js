import React from 'react';

const W = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">W쇼핑</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">W쇼핑 TV APP 리뉴얼</h3>
                        <div className="subheading mb-3">Backend | Java, Oracle | TV</div>
                        <p>- 기존 TV API를 보완하고 MC 연동과 관련하여 신규 API를 개발 중입니다.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2019.09 ~ | 커머스웨어 | 사원</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">W쇼핑 KCP 결제 연동 및 PG 이중화</h3>
                        <div className="subheading mb-3">Frontend, Backend | Java, Oracle, JavaScript, jQuery, VTL | Mobile, PC</div>
                        <p>- KCP 결제 연동을 진행하며 결제, 전체 취소 · 환불, 공통 통보, 계좌 인증, 영수증 조회 기능을 개발했습니다.</p>
                        <p>- KICC와 KCP 두 PG사에 대한 이중화를 작업했습니다.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2019.07 ~ 2019.10 | 커머스웨어 | 사원</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">W쇼핑 스마일페이 연동</h3>
                        <div className="subheading mb-3">Frontend, Backend | Java, Oracle, JavaScript, jQuery, VTL | Mobile, PC</div>
                        <p>- 주문 과정을 파악하고 간편결제 연동방식에 대해 이해하는 기회가 되었습니다.</p>
                        <p>- 결제 및 전체 취소, 영수증 조회 기능을 개발하였습니다.</p>
                        <p>- 복합 과세 계산 로직을 정비하여 개념을 익혔습니다.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2019.01 ~ 2019.04 | 커머스웨어 | 사원</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">W쇼핑 PC몰 구축 프로젝트</h3>
                        <div className="subheading mb-3">Frontend, Backend | Java, Oracle, JavaScript, jQuery, VTL | PC</div>
                        <p>- 로그인 및 본인인증 기능 개발을 진행했습니다.</p>
                        <p>- 상품상세 개발을 통해 상품 속성에 대한 상세한 이해를 할 기회를 가졌습니다.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2018.10 ~ 2018.12 | 커머스웨어 | 사원</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">W쇼핑 운영</h3>
                        <div className="subheading mb-3">Frontend, Backend | Java, Oracle, JavaScript, jQuery, VTL | Mobile, PC, TV</div>
                        <p>- 고객, 전시, 프로모션, 주문 등의 개발로 전반적인 업무 시스템을 경험 중입니다.</p>
                        <p>- TV 및 CORE에 대한 개발로 보다 심도 있게 업무를 파악하고 외부 인터페이스에 대해 익힐 수 있었습니다.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2018.02 ~ | 커머스웨어 | 사원</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default W;