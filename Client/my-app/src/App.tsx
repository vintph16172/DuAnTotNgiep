import React from 'react';
import  './css/home.css'; 
import  './css/footer.css'; 
import  './css/header.css'; 
import  './css/welcome.css'; 
import  './css/learning.css'; 
import  './css/detailLearning.css'; 
import  './css/signin.css'; 
import  './css/signup.css'; 

// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import List from './pages/products/List';
import Welcome from './pages/Welcome';
import Learning from './pages/Learning';
import DetailLearning from './pages/DetailLearning';
import Contact from './pages/Contact';
import FileUser from './pages/FileUser';
import User from './pages/User';
// import Login from './Component/user/Login';
import SignUp from './Component/user/SignUp';
import ThongKe from './Component/user/ThongKe';
import ExeQuiz from './pages/ExeQuiz';
import ExeSpeak from './pages/ExeSpeak';
import ExeWriteAndListen from './pages/ExeWriteAndListen';
import Login from './Component/user/Login';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='learning' element={<Learning/>} />
          <Route path='detailLearning' element={<DetailLearning/>} />
          <Route path='detailLearning/quiz' element={<ExeQuiz/>}/>
          <Route path='detailLearning/speak' element={<ExeSpeak/>}/>
          <Route path='detailLearning/writeAndListen' element={<ExeWriteAndListen/>}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="fileuser" element={<FileUser />}/>
          <Route path="user" element={<User />}/>
        </Route>


        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="product" />} />
          <Route path="product" >
            <Route index element={<List />} />
          </Route>
        </Route>

        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>

      </Routes>



    </div>
  );
}

export default App;
