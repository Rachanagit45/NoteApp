import { useEffect, useState } from 'react';
import '../components/index.css';
const NoteApp = () => {
  const [notelist, setNoteList] = useState([{value:"ABC"}]);
  const addNotes=()=>{
    const newNoteList=[...notelist,{value:""}];
    newNoteList.push({value:""});
    setNoteList(newNoteList);
  }
  const handleTextChange=(value,index)=>{
    const newNoteList=notelist?.map((note,ind)=>{
      if(ind==index){
        return{
          ...note,
          value:value,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
  };
  // const [data]=useData();
  // const ref=useRef();
  // const callBackfunction=()=>{
  //   alert("Call Backfunction");
  // };
  // const ClickOutside=useClickAway(ref,callBackfunction)
  // useEffect(() => {
  //   if (data) {
  //     setNoteList(data);
  //   }
  // }, [data]);
  return (
    <div style={{padding:"10px"}}>
      <h1 className="heading">Note App</h1>
      <p className="info-text">Double click on a note to remove it</p>
      <div className="flex flex-wrap justify-start items-center gap-10">
      {notelist?.map((note,index)=>{
        
        return(
          <div key={index} className="flex flex-col gap-1">
            <label>Note {index}</label>
            <textarea 
            value={note?.value}
            rows={7}
            onChange={(event)=>{
              const value=event.target.value;
              handleTextChange(value,index)
            }}
            className="bg-gray-200 rounded-md p-5"
            ></textarea>
            </div>
        )
      })}
      {/* <div className="app" id="app" > onClick={ClickOutside}
        <textarea
          cols="30"
          rows="10"
          class="note"
          placeholder="Empty Note"
        ></textarea>
        
      </div> */}
      <button className="btn" id="btn" onClick={()=>{
        addNotes();
      }}>+</button>
        </div>
    </div>
  );
};
export default NoteApp;