import HeaderContainer from 'presentation/app/components/header-container';
import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React from 'react';
import {} from 'react-router-dom';
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

const EmployeeFormView = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Funcionário" />
        </Container>
        <Card>
          <CardHeader>
            <h5 className="fs-17 m-0">
              {/* {id ? 'Editar Funcionário' : 'Novo Unidade'} */}
              Novo Funcionário
            </h5>
          </CardHeader>
          <Form
          // autoComplete="off"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   validation.handleSubmit();
          //   return false;
          // }}
          >
            <CardBody className="pb-0">
              <HeaderContainer name={'DADOS PRINCIPAIS'} />
            </CardBody>
            <CardBody className="pb-0">
              <Row>
                <Col md={4}>
                  <Label htmlFor="nane" className="form-label ">
                    Nome
                  </Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                    // value={validation.values.cnes}
                    // onBlur={validation.handleBlur}
                    // onChange={validation.handleChange}
                    // invalid={
                    //   !!(validation.touched.cnes && validation.errors.cnes)
                    // }
                  />
                  {/* {validation.touched.cnes && validation.errors.cnes ? (
                    <FormFeedback type="invalid">
                      {validation.errors.cnes}
                    </FormFeedback>
                  ) : null} */}
                </Col>
                <Col md={4}>
                  <Label htmlFor="nome" className="form-label">
                    CPF
                  </Label>
                  <Input
                    name="CPF"
                    placeholder="CPF"
                    type="text"
                    className="form-control"
                    // value={validation.values.nome}
                    // onBlur={validation.handleBlur}
                    // onChange={validation.handleChange}
                    // invalid={
                    //   !!(validation.touched.nome && validation.errors.nome)
                    // }
                  />
                  {/* {validation.touched.nome && validation.errors.nome ? (
                    <FormFeedback type="invalid">
                      {validation.errors.nome}
                    </FormFeedback>
                  ) : null} */}
                </Col>
                <Col md={4}>
                  <Label htmlFor="email" className="form-label">
                    Email
                  </Label>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="text"
                    className="form-control"
                    // value={validation.values.nome}
                    // onBlur={validation.handleBlur}
                    // onChange={validation.handleChange}
                    // invalid={
                    //   !!(validation.touched.nome && validation.errors.nome)
                    // }
                  />
                  {/* {validation.touched.nome && validation.errors.nome ? (
                    <FormFeedback type="invalid">
                      {validation.errors.nome}
                    </FormFeedback>
                  ) : null} */}
                </Col>
              </Row>
            </CardBody>

            <CardBody className="pt-4 pb-0">
              <HeaderContainer name={'CONTATOS'} />
            </CardBody>
            <CardBody>
              <Row>
                <Col md={6}>
                  <Label htmlFor="numberAddress" className="form-label ">
                    Email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    // value={validation.values.email}
                    // onBlur={validation.handleBlur}
                    // onChange={validation.handleChange}
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
                      // onClick={() => navigate('/unidades')}
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
