// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn...
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import { getTest } from "./api/testApi";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     getTest()
//       .then((res) => {
//         setData(res);
//         console.log("API response:", res);
//       })
//       .catch((err) => {
//         console.error("API failed:", err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>React + Django API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { createItem } from "./api/itemApi";

// function App() {
//   const [form, setForm] = useState({
//     name: "",
//     role: "",
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const res = await createItem(form);
//       setResult(res);
//       console.log("Saved:", res);
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React → Django → Postgres Form</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           name="role"
//           placeholder="Role"
//           value={form.role}
//           onChange={handleChange}
//         />
//         <br />

//         <button type="submit">
//           {loading ? "Saving..." : "Save"}
//         </button>
//       </form>

//       <hr />

//       <pre>
//         {result ? JSON.stringify(result, null, 2) : "No data yet"}
//       </pre>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { createPost } from "./api/itemApi";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    discription: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createPost(form);
      setResult(res);
      console.log("Saved:", res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Posts Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" onChange={handleChange} />
        <br />

        <input name="email" placeholder="email" onChange={handleChange} />
        <br />

        <input name="subject" placeholder="subject" onChange={handleChange} />
        <br />

        <textarea name="message" placeholder="message" onChange={handleChange} />
        <br />

        <textarea name="discription" placeholder="description" onChange={handleChange} />
        <br />

        <button type="submit">Save</button>
      </form>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;