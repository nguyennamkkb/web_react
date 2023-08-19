import React, { useState } from 'react'
import authService from "./../../api/auth"
import Cookie from './../../plugin/cookie'
import Notification from './../../plugin/alert'; // Điều chỉnh đường dẫn tới component
import ObjLogin from 'plugin/bType';

const AuthView = () => {
  const [tab, setTab] = useState(0)
  const [loginForm, setLoginForm] = useState({
    phone: '0358737373',
    password: '123456'
  })

  const [registerForm, setRegisterForm] = useState({
    fullName: 'www',
    phone: '',
    email: '',
    password: '',
    rePassword: ''
  })
  let BForm
  const la = ObjLogin()
  const handleFormLoginChange = (
    newFormData: React.SetStateAction<{ phone: string; password: string }>
  ) => {
    setLoginForm(newFormData)
  }
  const handleFormRegisterChange = (
    newFormData: React.SetStateAction<{
      fullName: string
      phone: string
      email: string
      password: string
      rePassword: string
    }>
  ) => {
    setRegisterForm(newFormData)
  }

  const handleBtnLogin = () => {
    console.log(loginForm)
    authService.login(loginForm.phone, loginForm.password).then((result: any) => {
        console.log(result)
        
    }).catch((err) => {
        
    });
  }
  const handleBtnRegister = () => {
    console.log(registerForm)

  }

  if (tab == 0) {
    BForm = (
      <LoginForm
        formData={loginForm}
        onFormChange={handleFormLoginChange}
        btnLoginClick={handleBtnLogin}
      />
    )
  } else {
    BForm = (
      <RegisterForm
        formData={registerForm}
        onFormChange={handleFormRegisterChange}
        btnRegisterClick={handleBtnRegister}
      />
    )
  }

  
  return (
    <div className=" bg-fuchsia-100/10 w-11/12 h-auto m-auto p-2 ">
      <div className="flex justify-center border-b-2 border-red-100/20">
        <div
          className={
            tab == 0
              ? 'w-1/4 rounded-t-lg  text-center  bg-red-100/20 '
              : 'w-1/4  text-center rounded-t-lg '
          }
        >
          <button
            className="w-full h-full bg-transparent"
            onClick={() => setTab(0)}
          >
            Đăng nhập
          </button>
        </div>
        <div
          className={
            tab == 1
              ? 'w-1/4 rounded-t-lg  text-center  bg-red-100/20 '
              : 'w-1/4  text-center rounded-t-lg '
          }
        >
          <button
            className="w-full h-full bg-transparent"
            onClick={() => setTab(1)}
          >
            Đăng ký
          </button>
        </div>
      </div>
      <div className=" h-full">{BForm}</div>
    </div>
  )
}

const LoginForm = (props: any) => (
  <div className="w-3/3 m-auto mt-10">
    <div className="flex m-3">
      <div className="w-2/5 text-right mr-1">Tên đăng nhập</div>
      <div className="w-3/5 ">
        <input
          type="text"
          className="rounded-md pl-1"
          value={props.formData.phone}
          onChange={(e) =>
            props.onFormChange({ ...props.formData, phone: e.target.value })
          }
        />
      </div>
    </div>
    <div className="flex m-3">
      <div className="w-2/5 text-right mr-1">Mật khẩu</div>
      <div className="w-3/5">
        <input
          type="password"
          className="rounded-md  pl-1"
          value={props.formData.password}
          onChange={(e) =>
            props.onFormChange({ ...props.formData, password: e.target.value })
          }
        />
      </div>
    </div>
    <div className="flex m-3 justify-center">
      <button
        className="w-2/5 h-8 bg-red-100/20 rounded-lg text-white"
        onClick={() => props.btnLoginClick()}
      >
        Đăng nhập
      </button>
    </div>
  </div>
)
const RegisterForm = (props: any) => (
  <div>
    <div className="w-3/3 m-auto mt-10">
      <div className="flex m-3">
        <div className="w-2/5 text-right mr-1">Họ tên</div>
        <div className="w-3/5 ">
          <input
            type="text"
            className="rounded-md pl-1"
            value={props.formData.fullName}
            onChange={(e) =>
              props.onFormChange({
                ...props.formData,
                fullName: e.target.value
              })
            }
          />
        </div>
      </div>

      <div className="flex m-3">
        <div className="w-2/5 text-right mr-1">Số điện thoại</div>
        <div className="w-3/5 ">
          <input
            type="text"
            className="rounded-md pl-1"
            value={props.formData.phone}
            onChange={(e) =>
              props.onFormChange({ ...props.formData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex m-3">
        <div className="w-2/5 text-right mr-1">Email</div>
        <div className="w-3/5 ">
          <input
            type="text"
            className="rounded-md pl-1"
            value={props.formData.email}
            onChange={(e) =>
              props.onFormChange({ ...props.formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex m-3">
        <div className="w-2/5 text-right mr-1">Mật khẩu</div>
        <div className="w-3/5">
          <input
            type="password"
            className="rounded-md pl-1"
            value={props.formData.password}
            onChange={(e) =>
              props.onFormChange({
                ...props.formData,
                password: e.target.value
              })
            }
          />
        </div>
      </div>

      <div className="flex m-3">
        <div className="w-2/5 text-right mr-1">Mật khẩu trên</div>
        <div className="w-3/5">
          <input
            type="password"
            className="rounded-md pl-1"
            value={props.formData.rePassword}
            onChange={(e) =>
              props.onFormChange({
                ...props.formData,
                rePassword: e.target.value
              })
            }
          />
        </div>
      </div>

      <div className="flex m-3 justify-center">
        <button
          className="w-2/5 h-8 bg-red-100/20 rounded-lg text-white"
          onClick={() => props.btnRegisterClick()}
        >
          Đăng ký
        </button>
      </div>
    </div>
  </div>
)
export default AuthView
