/**
 * @ALERT - Note
 *
 * This component must wrap all HTML code every time a new page is created
 */

import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';

interface IPageWrapperProps {
  title: string;
  children: ReactNode;
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({
  title,
  children,
}) => {
  document.title = title;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title={title} />

          {children}
        </Container>
      </div>
    </React.Fragment>
  );
};
