import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import cert_aws_sysops from '../assets/cert/cert_aws_sysops.png';
import cert_aws_solutions from '../assets/cert/cert_aws_solutions.png';
import cert_aws_developer from '../assets/cert/cert_aws_developer.png';
import cert_ccna from '../assets/cert/cert_ccna.png';
import cert_rhcsa from '../assets/cert/cert_rhcsa.png';
import cert_jamf300 from '../assets/cert/cert_jamf300.png';
import cert_jamf200 from '../assets/cert/cert_jamf200.png';
import cert_aPlus from '../assets/cert/cert_aPlus.png';
import cert_isaca from '../assets/cert/cert_isaca.png';
import cert_udacity from '../assets/cert/cert_udacity.png';
import cert_sbu from '../assets/cert/cert_sbu.png';

const certificationsModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '70%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
class Certification extends Component {
    state = {
        certifications: false,
    };
    openCertificationsModal = () => {
        this.setState({ certifications: true });
    };
    closeCertificationsModal = () => {
        this.setState({ certifications: false });
    };
    render() {
        return (
            <Fragment>
                <div id="certifications" className="certifications">
                    <div>
                        Certifications -
                        <a
                            href="#certifications"
                            onClick={() => this.openCertificationsModal()}
                        >
                            Learn More
                        </a>
                        <Modal
                            isOpen={this.state.certifications}
                            onRequestClose={this.closeCertificationsModal}
                            style={certificationsModalStyles}
                            ariaHideApp={false}
                        >
                            <ul className="cert_ul">
                                <li>
                                    <span className="cert_title">
                                        AWS Sysops
                                    </span>
                                    - I learned the technologies involved with
                                    AWS with respect to automating and scaling
                                    the infrastructure.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        AWS Solutions Architect
                                    </span>
                                    - I learned a broad overview of what AWS has
                                    to offer for infrastructure.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        AWS Developer
                                    </span>
                                    - I learned the technologies involved with
                                    AWS providing the tools for developers to
                                    deploy scalable sites.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        Cisco CCNA
                                    </span>
                                    - At one point I wanted to go into
                                    networking, I was amazed at how the internet
                                    works. I was certified twice.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        Red Hat RHCSA
                                    </span>
                                    - I also wanted to learn linux because there
                                    are so many customizations that can be
                                    applied to make the my workflow more
                                    efficient. This was one of the hardest exams
                                    as I had to effectively memorize the man
                                    pages. My current development setup owes
                                    muce to this experience. Currently I use
                                    Debian with i3 window manager, with tmux and
                                    vim.
                                </li>
                                <li>
                                    <span className="cert_title">JAMF300</span>-
                                    I learned how to administer JAMF.
                                </li>
                                <li>
                                    <span className="cert_title">JAMF200</span>-
                                    I learned how to use JAMF to manage macOS
                                    and iOS.
                                </li>
                                <li>
                                    <span className="cert_title">A+</span>- I
                                    achieved the A+ certification to start my
                                    career in IT, to formally learn the
                                    intricacies of computers.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        Isaca Cybersecurity
                                    </span>
                                    - This was provided through employer to
                                    further understand the current cybersecurity
                                    landscape.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        Udacity Nanodegree
                                    </span>
                                    - I took the React nanodegree course to
                                    further my development with web programming.
                                </li>
                                <li>
                                    <span className="cert_title">
                                        Stony Brook University
                                    </span>
                                    - I received a B.S. in Biochemistry with a
                                    minor in Business Management.{' '}
                                </li>
                            </ul>
                        </Modal>
                    </div>
                </div>
                <div className="list-certifications">
                    <div className="cert-rowOne">
                        <div className="cert-img">
                            <img src={cert_aws_sysops} alt="cert_aws_sysops" />
                        </div>
                        <div className="cert-img">
                            <img
                                src={cert_aws_solutions}
                                alt="cert_aws_solutions"
                            />
                        </div>
                        <div className="cert-img">
                            <img
                                src={cert_aws_developer}
                                alt="cert_aws_developer"
                            />
                        </div>
                        <div className="cert-img">
                            <img src={cert_ccna} alt="cert_ccna" />
                        </div>
                    </div>
                    <div className="cert-rowTwo">
                        <div className="cert-img">
                            <img src={cert_rhcsa} alt="cert_rhcsa" />
                        </div>
                        <div className="cert-img">
                            <img src={cert_jamf300} alt="cert_jamf300" />
                        </div>
                        <div className="cert-img">
                            <img src={cert_jamf200} alt="cert_jamf200" />
                        </div>
                        <div className="cert-img">
                            <img src={cert_aPlus} alt="cert_aPlus" />
                        </div>
                        <div className="cert-img">
                            <img src={cert_isaca} alt="cert_isaca" />
                        </div>
                    </div>
                    <div className="cert-rowThree">
                        <div className="cert-img">
                            <img src={cert_udacity} alt="cert_udacity" />
                        </div>
                        <div className="cert-img">
                            <img src={cert_sbu} alt="cert_sbu" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Certification;
