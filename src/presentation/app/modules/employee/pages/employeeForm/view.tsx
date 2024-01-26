import HeaderContainer from 'presentation/app/components/header-container';
import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import ReactSelect from 'react-select';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Label,
  Button,
  CardBody,
  Container,
  CardFooter,
  CardHeader,
} from 'reactstrap';

interface IProps {
  navigate: NavigateFunction;
}

const EmployeeFormView = ({ navigate }: IProps) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Funcionário" />
        </Container>
        <Card>
          <CardHeader>
            <h5 className="fs-17 m-0">
              {/* {id ? 'Editar Funcionário' : 'Novo Funcionário'} */}
              Novo Funcionário
            </h5>
          </CardHeader>
          <Form>
            <CardBody className="pb-0">
              <HeaderContainer name={'DADOS PRINCIPAIS'} />
            </CardBody>
            <CardBody className="py-0">
              <Row>
                <Col md={5}>
                  <Label htmlFor="nane" className="form-label ">
                    Nome
                  </Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="nome" className="form-label">
                    CPF
                  </Label>
                  <Input
                    name="CPF"
                    placeholder="CPF"
                    type="text"
                    className="form-control"
                  />
                </Col>
                <Col md={4}>
                  <Label htmlFor="cargo" className="form-label">
                    Cargo
                  </Label>
                  <ReactSelect />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={3}>
                  <Label htmlFor="password" className="form-label">
                    Senha
                  </Label>
                  <Input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="password" className="form-label">
                    Confirmar senha
                  </Label>
                  <Input
                    name="password"
                    placeholder="Confirmar senha"
                    type="password"
                    className="form-control"
                  />
                </Col>
              </Row>
            </CardBody>

            <CardBody className="pt-4 pb-0">
              <HeaderContainer name={'CONTATOS'} />
            </CardBody>

            <CardBody className="pt-0">
              <Row>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Telefone
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Telefone"
                    className="form-control"
                  />
                </Col>
              </Row>
            </CardBody>

            <CardFooter>
              <Row className="d-flex justify-content-end align-items-center">
                <Col xs="2" md="2">
                  <div className="form-group d-flex justify-content-end align-items-center">
                    <Button
                      color="transparent"
                      className="btn btn-link me-2 text-decoration-underline"
                      onClick={() => navigate('/funcionario')}
                    >
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      salvar
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardFooter>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default EmployeeFormView;
