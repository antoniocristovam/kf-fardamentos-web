import './styles/styles.scss';
import { Container, Row, Spinner } from 'reactstrap';

export const Loading = () => {
  return (
    <div className="loader-container">
      <Container fluid>
        <Row>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Spinner color="primary" type="grow" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
