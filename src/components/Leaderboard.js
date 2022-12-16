import React, { useState } from 'react';
import { Table } from 'antd';
import LeaderboardCol from './Data/LeaderboardCol';
import { Select, Space } from 'antd';

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

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
    <>
      <Space>
        <Select
          showSearch
          placeholder="Select a language"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'en',
              label: 'English',
            },
            {
              value: 'zh-chs',
              label: 'Simplified Chinese',
            },
            {
              value: 'de',
              label: 'German',
            },
          ]}
        />
        <Select
          showSearch
          placeholder="Select a dimension"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 'd1',
              label: 'd1',
            },
            {
              value: 'd2',
              label: 'd2',
            },
            {
              value: 'd3',
              label: 'd3',
            },
          ]}
        />
        <Select
          showSearch
          placeholder="Select a task"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: 't1',
              label: 't1',
            },
            {
              value: 't2',
              label: 't2',
            },
            {
              value: 't3',
              label: 't3',
            },
          ]}
        />
      </Space>
      <Table
        columns={LeaderboardCol}
        dataSource={data}
        scroll={{
          x: 1500,
        }}
        sticky
      />
    </>
  );
};
  
  export default Leaderboard;