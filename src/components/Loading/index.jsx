import React from 'react';
import { LoadingOutlined } from '@ant-design/icons'

function Loading(props) {
  return (
    <div className="loading__children flex__center__center">
      <LoadingOutlined />
    </div>
  );
}

export default Loading;