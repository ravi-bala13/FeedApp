// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// const UserForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [bio, setBio] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="bio">
//         <Form.Label>Bio</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           placeholder="Enter bio"
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default UserForm;
