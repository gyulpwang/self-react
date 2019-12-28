import React from 'react';
import '../../components/css/custom.css';

const Campus = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">Campus</h2>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">교내활동</h3>
                        <div className="subheading mb-3">학부생조교</div>
                        <p>1학년 컴퓨터 프로그래밍 C언어 수업 조교</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">2015.03 ~ 2015.12</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;