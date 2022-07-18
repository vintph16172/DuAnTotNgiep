import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Divider, Form, Input, Button, Checkbox, Upload, Select, Avatar, message } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import AdminPageHeader from '../../../Component/AdminPageHeader';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addQuizSlide, changeBreadcrumb, editQuizSlide } from '../../../features/Slide/quiz/QuizSlide';
import { getCategoryList } from '../../../features/Slide/category/CategorySlide';
import { CategoryType } from '../../../types/category';
import { detailQuiz } from '../../../api/quiz';
import { QuizType } from '../../../types/quiz';


type Props = {}

const FormQuiz = (props: Props) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm()
  const categories = useAppSelector(data => data.category.value)
  const [quiz, setQuiz] = useState<QuizType>()
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { id } = useParams();
  console.log(id);

  const onFinish = async (value) => {
    console.log(value);
    const key = 'updatable';

    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      if (id) {
        dispatch(editQuizSlide(value));
        message.success({ content: 'Sửa Thành Công!', key, duration: 2 });
        navigate("/admin/quiz");
      } else {
        dispatch(addQuizSlide(value));
        message.success({ content: 'Thêm Thành Công!', key, duration: 2 });
        navigate("/admin/quiz");
      }

    }, 2000);

  };

  const onFinishFailed = (errorInfo) => {
    message.error('Thêm Không Thành Công!');
  };

  const onReset = () => {
    form.resetFields();
  };


  useEffect(() => {
    if (id) {
      const getQuiz = async () => {
        const { data } = await detailQuiz(id)
        console.log("data edit",data);
        setQuiz(data)
        reset(data)
        form.setFieldsValue(data.quiz);

      }
      getQuiz()
    }

    dispatch(getCategoryList())
    dispatch(changeBreadcrumb("Thêm Quiz"))

  }, [])




  return (
    <div className="container">
      <AdminPageHeader />
      <div className="pb-6 mx-6">
        <Form layout="vertical" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {id ? <Form.Item label="_id" name="_id" hidden={true}>
            <Input />
          </Form.Item> : ""}

          <Form.Item
            label="Câu Hỏi"
            name="question"
            tooltip="Câu Hỏi dành cho Quiz"
            rules={[{ required: true, message: 'Không để Trống!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Danh mục Sản Phẩm"
            name="category"
            rules={[{ required: true, message: 'Không để Trống!' }]}
          >
            {id
              ? <Select >
                {categories?.map((item: CategoryType, index) => (
                  <Option key={index + 1} value={item._id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
              : <Select
                defaultValue={categories?.map((item: CategoryType, index) => {
                  if (item._id === quiz?.category) {
                    return <Option key={index + 1} value={item._id}>
                      {item.title}
                    </Option>
                  }
                })}
              >

                {categories?.map((item: CategoryType, index) => (
                  <Option key={index + 1} value={item._id}>
                    {item.title}
                  </Option>
                ))}
              </Select>}


          </Form.Item>

          <Form.Item
            label="Ảnh"
            name="image"
            rules={[{ required: true, message: 'Không để Trống!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Thời Gian Làm"
            name="timeLimit"
            rules={[{ required: true, message: 'Không để Trống!' }]}
          >
            <Input />
          </Form.Item>



          <Form.Item className='float-right'>
            <Button className='inline-block mr-2' type="primary" htmlType="submit" >
              {id ? "Sửa" : "Thêm"}
            </Button>
            <Button className='inline-block ' type="primary" danger  onClick={() => { onReset() }}>
              Reset
            </Button>
          </Form.Item>


        </Form>
      </div>




    </div>
  )
}

export default FormQuiz