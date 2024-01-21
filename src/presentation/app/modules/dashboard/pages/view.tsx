import CardInfoDashboard from 'presentation/app/components/card-info-dashboard';
import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React from 'react';
import { Container } from 'reactstrap';

const DashboardView = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" />
        </Container>
        {/* <Card> */}
        <CardInfoDashboard />
        {/* </Card> */}
      </div>
    </React.Fragment>
  );
};

export default DashboardView;
