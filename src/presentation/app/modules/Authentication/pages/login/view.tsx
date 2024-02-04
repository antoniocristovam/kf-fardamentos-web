// React
import { CpfInput } from 'adasi_components';
import { FormikValues } from 'formik';
import React, { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Form,
  Label,
  Input,
  Button,
  CardBody,
  Container,
  FormFeedback,
} from 'reactstrap';

// Assets
import AuthPageHeading from '../../components/authPageHeading';
import AuthWrapper from '../../components/authWrapper/AuthWrapper';

interface IPropsAuthentication {
  error: boolean;
  loader: boolean;
  passwordShow: boolean;
  validation: FormikValues;
  setPasswordShow: React.Dispatch<SetStateAction<boolean>>;
}

export const LoginView = ({
  validation,
  passwordShow,
  loader,
}: IPropsAuthentication) => {
  return (
    <React.Fragment>
      <AuthWrapper>
        <div className="auth-page-content mt-lg-5">
          <Container>
            <AuthPageHeading />
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Bem vindo!</h5>
                      <p className="text-muted">Faça o login para continuar</p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <div className="mb-3">
                          <Label htmlFor="cpf" className="form-label">
                            CPF
                          </Label>
                          <CpfInput
                            name="cpf"
                            handleChange={validation.handleChange}
                            inputId="cpf"
                            placeholder="CPF"
                            value={validation.values.cpf}
                            className="form-control"
                            invalid={
                              !!(
                                validation.touched.cpf && validation.errors.cpf
                              )
                            }
                          />
                          {validation.touched.cpf && validation.errors.cpf ? (
                            <FormFeedback type="invalid">
                              {validation.errors.cpf}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link to="/forgot-password" className="text-muted">
                              Esqueceu a senha?
                            </Link>
                          </div>

                          <Input
                            name="password"
                            value={validation.values.password || ''}
                            type={passwordShow ? 'text' : 'password'}
                            className="form-control pe-5"
                            placeholder="Senha"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              !!(
                                validation.touched.password &&
                                validation.errors.password
                              )
                            }
                          />
                        </div>

                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                            checked={validation.values.remember}
                            onChange={validation.handleChange}
                          />
                          <Label
                            className="form-check-label user-select-none"
                            htmlFor="remember"
                          >
                            Lembrar de mim
                          </Label>
                        </div>

                        <div className="mt-4">
                          <Button
                            style={{
                              backgroundColor: '#246e95',
                              border: 'none',
                            }}
                            // color="#246e95"
                            className="btn w-100"
                            type="submit"
                            disabled={loader}
                          >
                            {loader ? 'Carregando...' : 'Entrar'}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>

                {/* <div className="mt-4 text-center">
                  <p className="mb-0">
                    Ainda não possui cadastro?{' '}
                    <Link
                      to="/cadastro"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                      Cadastre-se
                    </Link>{' '}
                  </p>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </AuthWrapper>
    </React.Fragment>
  );
};
