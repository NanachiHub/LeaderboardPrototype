import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

function Col() {
  return (
    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
      <Button icon={<UploadOutlined />}>Upload Directory</Button>
    </Upload>
  );
};

export default Col;