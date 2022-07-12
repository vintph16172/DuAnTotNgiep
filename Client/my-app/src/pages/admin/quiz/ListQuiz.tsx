import React, { useState } from 'react';
import { Table, Breadcrumb, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Key, TableRowSelection } from 'antd/es/table/interface';
import AdminPageHeader from '../../../Component/AdminPageHeader';
import { Link } from 'react-router-dom';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

type Props = {}

const ListQuiz = (props: Props) => {


  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys: Key[] = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys: Key[] = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  }

  return (
    <div>
      <AdminPageHeader />
      <Button type="primary"  className="my-6" >
            <Link to={`/admin/quiz/add`}>Thêm Quiz</Link>

      </Button>

      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default ListQuiz