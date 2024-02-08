// import React, {useState, useEffect} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';


const dummyList = [
  {
    id : 1,
    author : "김고은",
    content : "안뇽",
    emotion : 4,
    created_date : new Date().getTime()
  },
  {
    id : 2,
    author : "김고은",
    content : "안뇽2",
    emotion : 4,
    created_date : new Date().getTime()
  },
  {
    id : 3,
    author : "김고은",
    content : "안뇽3",
    emotion : 4,
    created_date : new Date().getTime()
  },
  {
    id : 4,
    author : "김고은",
    content : "안뇽4",
    emotion : 4,
    created_date : new Date().getTime()
  }
]
const App = () => {
  return (
    <div className="App">
   <DiaryEditor/>
   <DiaryList diaryList = {dummyList}/>
    </div>
  );
};

export default App;
