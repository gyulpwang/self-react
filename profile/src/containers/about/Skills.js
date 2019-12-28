import React from 'react';

const Skills = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
            <h2 className="mb-5">Skills(보유기술)</h2>
            <div className="subheading mb-3">Frontend</div>
                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-check"></i>JavaScript</li>
                    <li><i className="fa-li fa fa-check"></i>jQuery</li>
                    <li><i className="fa-li fa fa-check"></i>NetJS(ExtJS)</li>
                    <li><i className="fa-li fa fa-check"></i>HTML</li>
                    <li><i className="fa-li fa fa-check"></i>CSS</li>
                    <li><i className="fa-li fa fa-check"></i>ReactJS</li>
                </ul>
                <div className="subheading mb-3">Backend</div>
                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-check"></i>Java</li>
                    <li><i className="fa-li fa fa-check"></i>JSP</li>
                    <li><i className="fa-li fa fa-check"></i>VTL</li>
                </ul>
                <div className="subheading mb-3">Database</div>
                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-check"></i>Oracle</li>
                </ul>
                <div className="subheading mb-3">Tool</div>
                <ul className="fa-ul mb-0">
                    <li><i className="fa-li fa fa-check"></i>Eclipse</li>
                    <li><i className="fa-li fa fa-check"></i>PL/SQL Developer</li>
                    <li><i className="fa-li fa fa-check"></i>Jenkins</li>
                    <li><i className="fa-li fa fa-check"></i>SVN</li>
                    <li><i className="fa-li fa fa-check"></i>SecureCRT</li>
                    <li><i className="fa-li fa fa-check"></i>Visual Studio Code</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;