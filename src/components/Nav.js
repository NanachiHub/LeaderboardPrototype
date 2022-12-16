import React, { useState } from 'react';
import { Menu, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';

import MenuData from './MenuData';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Row from './Row';
import Col from './Col';
import About from './About';
import NotFound from './NotFound';

function Nav() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState('/');
  const navigate = useNavigate()

  function onClick(e) {
    console.log('click ', e);
    navigate(e.key)
    setCurrent(e.key)
  };

  return (
    <>
      <Menu theme="dark" onClick={onClick}
      mode="horizontal" items={MenuData} />
      <Content />
    </>
  );
};

function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='/row' element={<Row />} />
      <Route path='/col' element={<Col />} />
      <Route path='/about' element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Nav;