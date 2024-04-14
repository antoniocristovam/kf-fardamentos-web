import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import Logo from '../../../../../config/assets/images/logo-kf.png';

const AuthPageHeading = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center mt-sm-5 mb-4 text-white-50">
          <div className="mb-3">
            <Link to="#" className="d-inline-block auth-logo">
              <img src={Logo} alt="" height="100" />
            </Link>
          </div>
          <p className="fs-15 fw-medium text-white">KF - Fardamentos</p>
        </div>
      </Col>
    </Row>
  );
};

export default AuthPageHeading;
