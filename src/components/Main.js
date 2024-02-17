import React, { useReducer } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Header from './Header';
import Booking from './Booking';

const Main = () => {
    const fetchAPI = function(date){
        return result;
    }
    const submitAPI = function(formData){
        return true;
    }
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);
    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date())};
    }
    const navigate = useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
            <Route path='/' element={<Header/>}/>
        </Routes>
    </main>
  )
};

export default Main;