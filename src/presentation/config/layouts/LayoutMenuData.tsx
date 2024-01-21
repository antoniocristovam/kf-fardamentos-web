import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState('Dashboard');

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute('sub-items')) {
      const ul: any = document.getElementById('two-column-menu');
      const iconItems: any = ul.querySelectorAll('.nav-icon.active');
      const activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove('active');
        const id = item.getAttribute('sub-items');
        const getID = document.getElementById(id) as HTMLElement;
        if (getID) getID.classList.remove('show');
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove('twocolumn-panel');
    if (iscurrentState !== 'Dashboard') {
      setIsDashboard(false);
    }
    if (iscurrentState === 'Widgets') {
      history('/widgets');
      document.body.classList.add('twocolumn-panel');
    }
  }, [history, iscurrentState, isDashboard]);

  const menuItems: any = [
    {
      label: 'Menu',
      isHeader: true,
    },
    // {
    //   id: 'dashboard',
    //   label: 'Dashboards',
    //   icon: 'ri-dashboard-2-line',
    //   link: '/#',
    //   stateVariables: isDashboard,
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIsDashboard(!isDashboard);
    //     setIscurrentState('Dashboard');
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: 'Overview',
    //       label: 'Overview',
    //       link: '/dashboard',
    //       parentId: 'dashboard',
    //     },
    //   ],
    // },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: ' ri-dashboard-line',
      link: '/dashboard',
      click: function (e: any) {
        e.preventDefault();
        setIscurrentState('Widgets');
      },
    },
    {
      id: 'pedidos',
      label: 'Pedidos',
      icon: 'ri-edit-box-line',
      link: '/pedido',
      click: function (e: any) {
        e.preventDefault();
        setIscurrentState('Widgets');
      },
    },
    {
      id: 'clientes',
      label: 'Clientes',
      icon: 'ri-team-line',
      link: '/cliente',
      click: function (e: any) {
        e.preventDefault();
        setIscurrentState('Widgets');
      },
    },
    {
      id: 'funcionarios',
      label: 'Funcionários',
      icon: 'ri-group-line',
      link: '/funcionario',
      click: function (e: any) {
        e.preventDefault();
        setIscurrentState('Widgets');
      },
    },
    // {
    //   id: 'procedimentos',
    //   label: 'Procedimentos',
    //   icon: 'ri-honour-line',
    //   link: '/procedimentos',
    //   click: function (e: any) {
    //     e.preventDefault();
    //     setIscurrentState('Widgets');
    //   },
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
