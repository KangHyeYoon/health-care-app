import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button";

const DoctorSignup = () => {
    //휴대전화
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log(id, name, phone, major, email, password, gender);

    fetch("http://localhost:8080/doctor/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data : {
            doctor_id: id,
            name: name,
            gender: gender,
            email: email,
            password: password,
            phone: phone,
            major: major,
            code: null
        }
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result === "OK") {
          alert("회원가입 성공!");
          navigate('/doctor');
        }
        if (response.result === "Fail") {
          alert(response.content);
        }
        else {
            alert('잘못된 시도입니다');
        }
      });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const cancleHandler = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">이름</label>
        <br />
        <input name="name" type="text" value={name} onChange={onChangeName} />
      </div>
      <div>
        <label htmlFor="gender">성별</label>
        <br />
        <select name="gender" value={gender} onChange={onChangeGender}>
            <option value="female">여자</option>
            <option value="male">남자</option>
        </select>
      </div>
      <div>
        <label htmlFor="id">아이디</label>
        <br />
        <input name="id" type="text" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <br />
        <input name="email" type="email" value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <label htmlFor="major">전공</label>
        <br />
        <input name="major" type="text" value={major} onChange={onChangeMajor} />
      </div>
      <div>
        <label htmlFor="phone">휴대폰</label>
        <br />
        <input name="phone" type="tel" value={phone} onChange={onChangePhone} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="password-check">비밀번호 체크</label>
        <br />
        <input
          name="password-check"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordChk}
        />
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div>
        <Button type="submit" htmlType="submit" onClick={onSubmit}>
          가입하기
        </Button>
        <Button style={{ backgroundColor: "ccc" }} onClick={cancleHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default DoctorSignup;