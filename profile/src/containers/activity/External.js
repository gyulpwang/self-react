import React from 'react';
import '../../components/css/custom.css';

const External = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">External</h2>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">대외활동</h3>
                        <div className="subheading mb-3">삼성 멘토링</div>
                        <p>삼성 임직원과 유사 학과의 타 대학 학생들과 팀을 이루어 각자의 정보와 의견을 공유하고, 진로 및 취업 상담 등의 멘토링 활동 진행</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2014.06 ~ 2015.08</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default External;