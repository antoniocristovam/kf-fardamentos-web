import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from 'react-countup';

const CardInfoDashboard = () => {
  const tileBoxs2 = [
    {
      id: 1,
      label: 'PEDIDOS EM ANDAMENTOS',
      badge: 'ri-arrow-up-circle-line text-success',
      icon: 'ri-space-ship-line',
      counter: 197,
      decimals: 0,
      suffix: '',
      prefix: '',
    },
    {
      id: 2,
      label: 'PEDIDOS CONCLUÍDOS',
      badge: 'ri-arrow-up-circle-line text-success',
      icon: 'ri-exchange-dollar-line',
      counter: 489.4,
      decimals: 1,
      suffix: 'k',
      prefix: '$',
    },
    {
      id: 3,
      label: 'PEDIDOS EM ATRASOS',
      badge: 'ri-arrow-down-circle-line text-danger',
      icon: 'ri-pulse-line',
      counter: 32.89,
      decimals: 2,
      suffix: '%',
      prefix: '',
    },
    {
      id: 4,
      label: 'PEDIDOS CANCELADOS',
      badge: 'ri-arrow-up-circle-line text-success',
      icon: 'ri-trophy-line',
      counter: 1596.5,
      decimals: 1,
      prefix: '$',
      separator: ',',
      suffix: '',
    },
    {
      id: 5,
      label: 'PEDIDOS ENTREGUE',
      badge: 'ri-arrow-down-circle-line text-danger',
      icon: 'ri-service-line',
      counter: 2659,
      decimals: 0,
      separator: ',',
      suffix: '',
      prefix: '',
    },
  ];

  return (
    <Row>
      <Col xl={12}>
        <Card className="crm-widget">
          <CardBody className="p-0">
            <Row className="row-cols-md-3 row-cols-1">
              {(tileBoxs2 || []).map((item, key) => (
                <Col
                  className={item.id === 4 ? 'col-lg' : 'col-lg border-end'}
                  key={key}
                >
                  <div className="mt-3 mt-md-0 py-4 px-3">
                    <h5 className="text-muted text-uppercase fs-14">
                      {item.label}{' '}
                      <i
                        className={'fs-18 float-end align-middle ' + item.badge}
                      ></i>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <i className={'display-6 text-muted ' + item.icon}></i>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2 className="mb-0">
                          <span className="counter-value">
                            <CountUp
                              start={0}
                              prefix={item.prefix}
                              suffix={item.suffix}
                              separator={item.separator}
                              end={item.counter}
                              decimals={item.decimals}
                              duration={4}
                            />
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CardInfoDashboard;
