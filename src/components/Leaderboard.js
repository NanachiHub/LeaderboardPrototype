import React, { useState } from 'react';
import { Switch, Table } from 'antd';
import LeaderboardCol from './Data/LeaderboardCol';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

function Leaderboard() {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={LeaderboardCol}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      sticky
    />
  );
};
  
  export default Leaderboard;