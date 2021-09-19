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
                <ul class="social-network social-circle">
                    <li><a target="_blank" rel="noreferrer" href={githubUrl} class="github-icon" title="Github"><i class="fa fa-github"></i></a></li>
                    <li><a target="_blank" rel="noreferrer" href={linkedinUrl} class="linkedin-icon" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </Row>
        </div>
    )
};

export default Footer;
