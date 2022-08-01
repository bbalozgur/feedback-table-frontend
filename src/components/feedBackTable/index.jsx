import { useEffect, useState, memo } from 'react';
import { Card, Table } from 'antd';

const columns = [
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'feedback',
        dataIndex: 'feedback',
        key: 'feedBack',
      },
      {
        title: 'host',
        dataIndex: 'host',
        key: 'host',
      },
];

const getClearLocationPath = () => {
  return window.location.pathname.split('').splice(1, window.location.pathname.length - 1).join('');
}

const FeedBackTable = (isFeedback) => {
    const [feedBackData, setFeedBackData] = useState([]);

    useEffect(() => {
      const locationPath = getClearLocationPath();
        fetch(`${process.env.REACT_APP_FEEDBACK_SERVICE}/v1/feedback/${locationPath}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
          })
        .then(response => response.json())
        .then(data => setFeedBackData(data))
        .catch(err => console.error(err));
    }, [isFeedback]);

    return (
        <>
            <Card title="FeedBack Page List" key="1">
                <Table columns={columns} dataSource={feedBackData} pagination={false} key="table-1" />
            </Card>
        </>
    );
};

export default memo(FeedBackTable);