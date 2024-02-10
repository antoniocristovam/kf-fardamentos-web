import React from 'react';
import { Button, Col, Modal, CardBody, Row } from 'reactstrap';
import Lottie from 'react-lottie';
import animationTrash from '../../../../animation/animation-trash.json';
interface IProps {
  isOpen: boolean;
  handleDelete: () => void;
  goBack: () => void;
}

export const ModalDelete = ({ goBack, handleDelete, isOpen }: IProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationTrash,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        handleDelete();
      }}
      centered
      id="zoomIn"
      zIndex={10000}
      backdrop={'static'}
      modalClassName="zoomIn"
    >
      <Col lg={12}>
        <CardBody className="p-3">
          <Col className="text-center mb-2">
            <Lottie options={defaultOptions} height={150} width={150} />
          </Col>

          <Row className="text-center">
            <h5 className="mb-3">Você tem certeza que deseja excluir?</h5>
            <p className="text-muted mb-4">Tem certeza que deseja excluir?</p>
          </Row>

          <Row className="d-flex justify-content-center" lg={6}>
            <Col xs={3} md={3} lg={3}>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => goBack()}
              >
                Cancelar
              </button>
            </Col>
            <Col xs={3} md={3} lg={3}>
              <Button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete()}
              >
                Excluir
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Col>
    </Modal>
  );
};
