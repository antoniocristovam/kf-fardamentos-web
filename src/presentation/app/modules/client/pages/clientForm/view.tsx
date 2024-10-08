import { FormikValues } from 'formik';
import HeaderContainer from 'presentation/app/components/header-container';
import BreadCrumb from 'presentation/config/partials/Common/BreadCrumb';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Form,
  Input,
  Label,
  Button,
  CardBody,
  Container,
  CardFooter,
  CardHeader,
  FormFeedback,
} from 'reactstrap';

interface IProps {
  id: string;
  currentAddress: number;
  validation: FormikValues;
  navigate: NavigateFunction;
  setCurrentAddress: (index: number) => void;
}

const ClientFormView = ({
  id,
  navigate,
  validation,
  currentAddress,
}: IProps) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Cliente" />
        </Container>
        <Card>
          <CardHeader>
            <h5 className="fs-17 m-0">
              {id ? 'Editar Cliente' : 'Novo Cliente'}
            </h5>
          </CardHeader>
          <Form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <CardBody className="pb-0">
              <HeaderContainer name={'DADOS PRINCIPAIS DO CLIENTE'} />
            </CardBody>
            <CardBody className="py-0">
              <Row>
                <Col md={6}>
                  <Label htmlFor="name" className="form-label ">
                    Nome
                  </Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                    value={validation.values.name}
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    invalid={
                      !!(validation.touched.name && validation.errors.name)
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.name}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col md={3}>
                  <Label htmlFor="cpf_cnpj" className="form-label">
                    CPF ou CNPJ
                  </Label>
                  <Input
                    type="text"
                    name="cpf_cnpj"
                    className="form-control"
                    placeholder="CPF ou CNPJ"
                    onBlur={validation.handleBlur}
                    value={validation.values.cpf_cnpj}
                    onChange={validation.handleChange}
                    invalid={
                      !!(
                        validation.touched.cpf_cnpj &&
                        validation.errors.cpf_cnpj
                      )
                    }
                  />
                  {validation.touched.cpf_cnpj && validation.errors.cpf_cnpj ? (
                    <FormFeedback type="invalid">
                      {validation.errors.cpf_cnpj}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col md={3}>
                  <Label htmlFor="email" className="form-label ">
                    Email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    value={validation.values.email}
                    onChange={validation.handleChange}
                    invalid={
                      !!(validation.touched.email && validation.errors.email)
                    }
                  />
                  {validation.touched.email && validation.errors.email ? (
                    <FormFeedback type="invalid">
                      {validation.errors.email}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
            </CardBody>
            <CardBody className="pt-4 pb-0">
              <HeaderContainer name={'Contato'} />
            </CardBody>
            <CardBody className="pt-0">
              <Row>
                <Col md={4}>
                  <Label htmlFor="firstPhoneNumber" className="form-label ">
                    Telefone 1
                  </Label>
                  <Input
                    type="text"
                    name="firstPhoneNumber"
                    placeholder="Telefone 1"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.firstPhoneNumber}
                    invalid={
                      !!(
                        validation.touched.firstPhoneNumber &&
                        validation.errors.firstPhoneNumber
                      )
                    }
                  />
                  {validation.touched.firstPhoneNumber &&
                  validation.errors.firstPhoneNumber ? (
                    <FormFeedback type="invalid">
                      {validation.errors.firstPhoneNumber}
                    </FormFeedback>
                  ) : null}
                </Col>
                <Col md={4}>
                  <Label htmlFor="secondPhoneNumber" className="form-label ">
                    Telefone 2
                  </Label>
                  <Input
                    type="number"
                    name="secondPhoneNumber"
                    placeholder="Telefone 2"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.secondPhoneNumber}
                  />
                </Col>
                <Col md={4}>
                  <Label htmlFor="thirdPhoneNumber" className="form-label ">
                    Telefone 3
                  </Label>
                  <Input
                    type="number"
                    name="thirdPhoneNumber"
                    placeholder="Telefone 3"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.thirdPhoneNumber}
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
                  <Label htmlFor="postalCode" className="form-label ">
                    CEP
                  </Label>
                  <Input
                    type="number"
                    name="postalCode"
                    placeholder="CEP"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={
                      validation.values.addresses[currentAddress].postalCode
                    }
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="city" className="form-label ">
                    Cidade
                  </Label>
                  <Input
                    name="city"
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    value={validation.values.addresses[currentAddress].city}
                    onChange={validation.handleChange}
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="street" className="form-label ">
                    Rua
                  </Label>
                  <Input
                    name="street"
                    type="text"
                    placeholder="Rua"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.addresses[currentAddress].street}
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="neighborhood" className="form-label ">
                    Bairro
                  </Label>
                  <Input
                    name="neighborhood"
                    type="text"
                    placeholder="Bairro"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={
                      validation.values.addresses[currentAddress].neighborhood
                    }
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={2}>
                  <Label htmlFor="state" className="form-label ">
                    UF
                  </Label>
                  <Input
                    name="state"
                    type="text"
                    placeholder="UF"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.addresses[currentAddress].state}
                  />
                </Col>
                <Col md={2}>
                  <Label htmlFor="number" className="form-label ">
                    Número
                  </Label>
                  <Input
                    name="number"
                    type="text"
                    placeholder="Número"
                    className="form-control"
                    onBlur={validation.handleBlur}
                    onChange={validation.handleChange}
                    value={validation.values.addresses[currentAddress].number}
                  />
                </Col>
                <Col md={3}>
                  <Label htmlFor="aditionalInformation" className="form-label ">
                    Ponto de referência
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="aditionalInformation"
                    onBlur={validation.handleBlur}
                    placeholder="Ponto de referência"
                    onChange={validation.handleChange}
                    value={
                      validation.values.addresses[currentAddress]
                        .aditionalInformation
                    }
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
                      className="btn btn-danger me-2"
                      onClick={() => navigate('/cliente')}
                    >
                      Voltar
                    </Button>
                    <Button color="primary" type="submit">
                      Salvar
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
