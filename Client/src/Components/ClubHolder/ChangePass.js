import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
const ChangePass = () => {
    const storage = sessionStorage.getItem("club");
    const club = JSON.parse(storage);
  const [value, setValue] = useState({
    changePass: "",
    success: "",
  });
  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };

    // get club holder
  const [specificClubHolder, setSpecificClubHolder] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/user/specificClubHolder?user=${club?.club}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setSpecificClubHolder(data));
  }, []);

  const clubHolder = specificClubHolder.find(data=>data.username === club?.club)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = clubHolder?._id;
    fetch(`http://localhost:5000/user/club/passChange/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value)
    }).then(()=>{
      const values = {...value};
      values.success = "Password Change Successfully !"
      setValue(values)
    })
  }
  return (
    <>
      <div className="changePassword mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h2 className="heading text-center">Change Password</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 m-auto">
              {value.success && (
                <p className="alert alert-success">{value.success}</p>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      name="changePass"
                      onChange={handleChange}
                      type="password"
                      placeholder="New Password"
                    />
                  </Form.Group>
                </Form.Row>
                <br />
                <Button
                  className="form-control signupBtn"
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
