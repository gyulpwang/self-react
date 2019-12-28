import React from 'react';
import '../components/css/custom.css';

const Certification = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                <h2 className="mb-5">Certification</h2>
                <div className="card-container">
                    <div className="card about-card-style card-item">
                        <div className="card-body">
                            <h5 className="card-title">정보처리기사</h5>
                            <p className="card-text">자격증</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">취득일	2016.07.15</li>
                        </ul>
                    </div>
                    <div className="card about-card-style card-item">
                        <div className="card-body">
                            <h5 className="card-title">TOEIC</h5>
                            <p className="card-text">외국어</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">취득일  2015.03.29</li>
                            <li className="list-group-item">점수  780</li>
                        </ul>
                    </div>
                    <div className="card about-card-style card-item">
                        <div className="card-body">
                            <h5 className="card-title">MOS Word 2007</h5>
                            <p className="card-text">자격증</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">취득일  2014.02.14</li>
                            <li className="list-group-item">등급	Expert</li>
                        </ul>
                    </div>
                    <div className="card about-card-style card-item">
                        <div className="card-body">
                            <h5 className="card-title">MOS PPT 2007</h5>
                            <p className="card-text">자격증</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">취득일  2013.07.19</li>
                            <li className="list-group-item">등급	Core</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certification;