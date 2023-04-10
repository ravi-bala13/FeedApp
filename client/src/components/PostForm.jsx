import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function PostForm(props) {
  const [formDetails, setFormDetails] = useState({
    user_id: "",
    content: "",
  });

  const [usersList, setUsersList] = useState(["bala"]);

  const backendUrl = "http://localhost:8080/";

  console.log("formDetails", formDetails);

  const onChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios(backendUrl + "users", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-type": "application/json" },
        body: formDetails,
      }).then((res) => console.log("Response", res));
    } catch (error) {
      console.log("Error in handleSubmit", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <Form.Group controlId="formPlace">
        {" "}
        {/* new form group for place */}
        <Form.Label>User</Form.Label>
        <Form.Control
          as="select"
          value={formDetails.user_id}
          name="user_id"
          onChange={onChange}
        >
          <option value="">Select a place</option>
          {usersList.map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="bio">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          rows={3}
          placeholder="Enter bio"
          value={formDetails.bio}
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
