import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const ChangeClub = () => {
    const storage = sessionStorage.getItem("userInfo");
    const getUser = JSON.parse(storage);
  const [value, setValue] = useState({
    changeClub: "",
    success: "",
  });
  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };
  const handleSubmit = (e) =>{
      e.preventDefault()
      const id = getUser?.id;
      fetch(`http://localhost:5000/user/clubChange/${id}`, {
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
    // get All club
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
      fetch(
        `http://localhost:5000/user/allClub`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setClubs(data));
    }, []);
  return (
    <>
      <div className="changePassword mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading text-center">Change Club</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {value.success && (
                <p className="alert alert-success">{value.success}</p>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>New Club</Form.Label>
                    <Form.Control
                      name="changeClub"
                      onChange={handleChange}
                      as="select"
                    >
                      <option>Select Club</option>
                      {clubs.map((data) => (
                        <option>
                          {data}
                        </option>
                      ))}
                    </Form.Control>
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

export default ChangeClub;
