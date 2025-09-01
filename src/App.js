import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [data, setData] = useState([]);

  const studentNameHandler = (e) => {
    setStudentName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (studentName.trim() === "") {
      alert(" no data given");
    } else {
      const newdata = {
        id: Date.now(),
        value: studentName,
      };

      setData([...data, newdata]);
      setStudentName("");
    }
  };

  const deleteHandler = (id) =>{
        const newArray = data.filter( )
  }
  return (
    <>
      <center>
        <form onSubmit={submitHandler}>
          <label>add Student</label>
          <br />
          <input
            type="text"
            onChange={studentNameHandler}
            value={studentName}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </center>

      <div className="data">
        <div>
          <h1>all students</h1>
          <ul>
            {data.map((item) => (
              <>
                <li>{item.value}</li>
                <button>edit</button>
                <button onClick={deleteHandler(item.id)} >delete</button>
              </>
            ))}
          </ul>
        </div>
        <div>
          <h1>Present</h1>
        </div>
        <div>
          <h1>absent</h1>
        </div>
      </div>
    </>
  );
}

export default App;
