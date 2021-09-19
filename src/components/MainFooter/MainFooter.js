import { Row } from 'react-bootstrap';
import { githubUrl, linkedinUrl } from '../../utils/constants';
import {} from './MainFooter.scss'

const Footer = () => {
    
    return (
        <div className="footer">
            <Row>
                <h3>
                    Created By Doğukan Şahintürk
                </h3>
            </Row>
            <Row>
                <ul className="social-network social-circle">
                    <li><a target="_blank" rel="noreferrer" href={githubUrl} className="github-icon" title="Github"><i className="fa fa-github"></i></a></li>
                    <li><a target="_blank" rel="noreferrer" href={linkedinUrl} className="linkedin-icon" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </Row>
        </div>
    )
};

export default Footer;
