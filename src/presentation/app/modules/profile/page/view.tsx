import classnames from 'classnames';
import { IUserModel } from 'presentation/app/hooks/useAuth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Nav,
  Row,
  Card,
  Form,
  Input,
  Label,
  NavItem,
  NavLink,
  TabPane,
  CardBody,
  Container,
  TabContent,
  CardHeader,
  CardFooter,
} from 'reactstrap';

//import images
import progileBg from '../../../../config/assets/images/background-fk-profile.jpg';

interface IProps {
  currentUser: IUserModel;
}

const ProfileView = ({ currentUser }: IProps) => {
  document.title = 'KF - Fardamentos | Perfil';

  const [activeTab, setActiveTab] = useState<string>('1');

  const tabChange = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <div className="position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg profile-setting-img">
                <img src={progileBg} className="profile-wid-img" alt="" />
              </div>
            </div>
            <Row>
              <Col xxl={3}>
                <Card className="mt-n5">
                  <CardBody className="p-4">
                    <div className="text-center">
                      <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                        <img
                          src={
                            'https://avatars.githubusercontent.com/u/84741807?v=4'
                          }
                          className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                          alt="user-profile"
                        />
                        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          >
                            <span className="avatar-title rounded-circle bg-light text-body">
                              <i className="ri-camera-fill"></i>
                            </span>
                          </Label>
                        </div>
                      </div>
                      <h5 className="mb-1">{currentUser?.user?.name}</h5>
                      <p className="text-muted mb-0">
                        {currentUser?.user?.role}
                      </p>
                    </div>
                  </CardBody>
                </Card>

                {/* <Card>
                  <CardBody>
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">
                          Complete Your Profile
                        </h5>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          to="#"
                          className="badge bg-light text-primary fs-12"
                        >
                          <i className="ri-edit-box-line align-bottom me-1"></i>{' '}
                          Edit
                        </Link>
                      </div>
                    </div>
                    <div className="progress animated-progress custom-progress progress-label">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: '30%' }}
                      >
                        <div className="label">30%</div>
                      </div>
                    </div>
                  </CardBody>
                </Card> */}
                {/* <Card>
                  <CardBody>
                    <div className="d-flex align-items-center mb-4">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">Portfolio</h5>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          to="#"
                          className="badge bg-light text-primary fs-12"
                        >
                          <i className="ri-add-fill align-bottom me-1"></i> Add
                        </Link>
                      </div>
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-body text-body">
                          <i className="ri-github-fill"></i>
                        </span>
                      </div>
                      <Input
                        type="email"
                        className="form-control"
                        id="gitUsername"
                        placeholder="Username"
                        defaultValue="@daveadame"
                      />
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-primary">
                          <i className="ri-global-fill"></i>
                        </span>
                      </div>
                      <Input
                        type="text"
                        className="form-control"
                        id="websiteInput"
                        placeholder="www.example.com"
                        defaultValue="www.velzon.com"
                      />
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-success">
                          <i className="ri-dribbble-fill"></i>
                        </span>
                      </div>
                      <Input
                        type="text"
                        className="form-control"
                        id="dribbleName"
                        placeholder="Username"
                        defaultValue="@dave_adame"
                      />
                    </div>
                    <div className="d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-danger">
                          <i className="ri-pinterest-fill"></i>
                        </span>
                      </div>
                      <Input
                        type="text"
                        className="form-control"
                        id="pinterestName"
                        placeholder="Username"
                        defaultValue="Advance Dave"
                      />
                    </div>
                  </CardBody>
                </Card> */}
              </Col>

              <Col xxl={9}>
                <Card className="mt-xxl-n5">
                  <CardHeader>
                    <Nav
                      className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => {
                            tabChange('1');
                          }}
                        >
                          <i className="fas fa-home"></i>
                          Dados pessoais
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => {
                            tabChange('2');
                          }}
                          type="button"
                        >
                          <i className="far fa-user"></i>
                          Alterar senha
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody className="p-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Form>
                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label htmlFor="name" className="form-label">
                                  Nome
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Nome"
                                  efaultValue={currentUser.user?.name}
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  CPF
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="phonenumberInput"
                                  placeholder="Telefone"
                                  efaultValue={currentUser.user?.cpf}
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Email
                                </Label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  defaultValue={currentUser.user?.email}
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Telefone
                                </Label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  defaultValue={currentUser.user.phoneNumber}
                                />
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>

                      <TabPane tabId="2">
                        <Form>
                          <Row className="g-2">
                            <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="oldpasswordInput"
                                  className="form-label"
                                >
                                  Senha atual*
                                </Label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="oldpasswordInput"
                                  placeholder="Senha atual"
                                />
                              </div>
                            </Col>

                            <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="newpasswordInput"
                                  className="form-label"
                                >
                                  Senha nova*
                                </Label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="newpasswordInput"
                                  placeholder="Senha nova"
                                />
                              </div>
                            </Col>

                            <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="confirmpasswordInput"
                                  className="form-label"
                                >
                                  Confirmar senha nova*
                                </Label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="confirmpasswordInput"
                                  placeholder="Confirmar senha nova"
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-success mt-2"
                                >
                                  Alterar senha
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                        <div className="mt-4 mb-3 border-bottom pb-2">
                          <h5 className="card-title">Histórico de login</h5>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-smartphone-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-15">iPhone 12 Pro</h6>
                            <p className="text-muted mb-0">
                              Caruaru, Pernambuco - March 16 at 2:47PM
                            </p>
                          </div>
                          <div>
                            <Link to="#">Logout</Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-tablet-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-15">Apple iPad Pro</h6>
                            <p className="text-muted mb-0">
                              Washington, United States - November 06 at 10:43AM
                            </p>
                          </div>
                          <div>
                            <Link to="#">Logout</Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-smartphone-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-15">Galaxy S21 Ultra 5G</h6>
                            <p className="text-muted mb-0">
                              Conneticut, United States - June 12 at 3:24PM
                            </p>
                          </div>
                          <div>
                            <Link to="#">Logout</Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                              <i className="ri-macbook-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-15">Dell Inspiron 14</h6>
                            <p className="text-muted mb-0">
                              Phoenix, United States - July 26 at 8:10AM
                            </p>
                          </div>
                          <div>
                            <Link to="#">Logout</Link>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                  <CardFooter>
                    <Col lg={12}>
                      <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-danger">
                          Cancelar
                        </button>
                        <button type="button" className="btn btn-soft-success">
                          Atualizar
                        </button>
                      </div>
                    </Col>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    </>
  );
};

export default ProfileView;
