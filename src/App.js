import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [data, setData] = useState([]);
  const [editStatus,setEditStatus] = useState(false);
  const [ editdata,setEditData] = useState([]);

  const studentNameHandler = (e) => {
    setStudentName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (studentName.trim() === "") {
      alert(" no data given");
    } else {

      editStatus ? updateData() : storeData();
    
    }
  };

  const storeData = () =>{
      const newdata = {
        id: Date.now(),
        value: studentName,
        isPresent :undefined,
      };

      setData([...data, newdata]);
      setStudentName("");
  }

  const updateData = () =>{
        const newData = data.map((item)=>{
            if(editdata.id === item.id){
              return {
                ...item,
                value : studentName
              }
            }
            return item;

          })
          setData(newData);
          setEditStatus(false);
          setStudentName('');
  }

  const deleteHandler = (id) =>{
        const newArray = data.filter((item)=> item.id !== id );

        setData(newArray);
  }

  const editHandler = (item) => {
    setEditStatus(true);
    setStudentName(item.value);
    setEditData(item);
    
  }

  const makePresentHandler = (item) =>{

    if(item.isPresent !== undefined){
      return alert (`This student is already in the ${item.isPresent === true ? "present list" : "in the absent list"}`)
    }

    const updatedStudentList = data.map(dataItem=>{
      if(dataItem.id  === item.id ){
        return {...dataItem ,isPresent: true};
      }

      return dataItem;
    })

    setData(updatedStudentList);

  }
  const makeAbsentHandler = (item) =>{
    
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
          <button type="submit">{editStatus ? "update" : "add"}</button>
        </form>
      </center>

      <div className="data">
        <div>
          <h1>all students</h1>
          <ul>
            {data.map((item) => (
              <>
                <li>{item.value}</li>
                <button onClick={()=>editHandler(item)}>edit</button>
                <button onClick={()=>deleteHandler(item.id)} >delete</button>
                <button onClick={()=>makePresentHandler(item)} >make present</button>
                <button onClick={()=>makeAbsentHandler(item)} >make absent</button>
              </>
            ))}
          </ul>
        </div>
        <div>
          <h1>Present</h1>
          <ul>
              {data.filter((item)=>item.isPresent === true).map((item)=>(

                <li>{item.value}</li>
              ))
              
              }

          </ul>
        </div>
        <div>
          <h1>absent</h1>
        </div>
      </div>
    </>
  );
}

export default App;
