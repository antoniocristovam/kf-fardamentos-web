import HeaderContainer from 'presentation/app/components/header-container';
import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';

interface IProps {
  navigate: NavigateFunction;
}

const ClientFormView = ({ navigate }: IProps) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Cliente" />
        </Container>
        <Card>
          <CardHeader>
            <h5 className="fs-17 m-0">
              {/* {id ? 'Editar Funcionário' : 'Novo Funcionário'} */}
              Novo Cliente
            </h5>
          </CardHeader>
          <Form>
            <CardBody className="pb-0">
              <HeaderContainer name={'DADOS PRINCIPAIS DO CLIENTE'} />
            </CardBody>
            <CardBody className="py-0">
              <Row>
                <Col md={6}>
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
                    CPF ou CNPJ
                  </Label>
                  <Input
                    name="CPF"
                    placeholder="CPF ou CNPJ"
                    type="text"
                    className="form-control"
                  />
                </Col>
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
              </Row>
            </CardBody>
            <CardBody className="pt-4 pb-0">
              <HeaderContainer name={'Contato'} />
            </CardBody>
            <CardBody className="pt-0">
              <Row>
                <Col md={4}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Telefone 1
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Telefone 1"
                    className="form-control"
                  />
                </Col>
                <Col md={4}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Telefone 2
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Telefone 2"
                    className="form-control"
                  />
                </Col>
                <Col md={4}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Telefone 3
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Telefone 3"
                    className="form-control"
                  />
                </Col>
              </Row>
            </CardBody>

            <CardBody className="py-0">
              <HeaderContainer name={'Endereço'} />
            </CardBody>

            <CardBody className="pt-0">
              <Row>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    CEP
                  </Label>
                  <Input
                    name="email"
                    type="number"
                    placeholder="CEP"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Cidade
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Rua
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Rua"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Bairro
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Bairro"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={2}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    UF
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="UF"
                    className="form-control"
                  />
                </Col>
                <Col md={2}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Número
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Número"
                    className="form-control"
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Ponto de referência
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Ponto de referência"
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

export default ClientFormView;
