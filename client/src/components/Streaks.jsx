import { Button, Toast } from "react-bootstrap";
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiFillDownCircle, AiFillFire } from 'react-icons/ai'
import { useEffect, useState } from "react";
import axios from 'axios'
import { useAuthContext } from "../hooks/useAuthContext";
import { BiHappy, BiSad } from "react-icons/bi";
import LoadingCircle from "./SkeletonLoaders/LoadingCircle";

const Streaks = ({ setShowAlreadyAddedToast, setShowStreakAddedToast }) => {
  const { user } = useAuthContext();
  const [streakNumber, setStreakNumber] = useState(null);

  useEffect(() => {
    handleFetchStreak();
  }, [])

  const handleFetchStreak = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://medpal-backend.onrender.com/api/streaks",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.currentStreak)
        setStreakNumber(response.data.currentStreak)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const handleIncrementStreak = async (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://medpal-backend.onrender.com/api/streaks/increment",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.currentStreak)
        setShowStreakAddedToast(true)
        setStreakNumber(response.data.currentStreak)
    handleFetchStreak();

      })
      .catch((error) => {
        if (error.response.status === 400) {
          setShowAlreadyAddedToast(true);
        }
        
      });
  }

  const fireStyle = streakNumber !== 0
    ? {
      color: "red"
    }
    : { color: "grey" };


    // if(!streakNumber){
    //   console.log(streakNumber)
    //   return(
    //     <>
    //   <legend align='center'>Streak</legend>
    //     <LoadingCircle/>
    //     </>
    //   )
    // }

  return (

    <div className="dash-component d-flex flex-column justify-content-between align-items-center ">


      <legend align='center'>Streak</legend>
      <div style={{ fontSize: "3rem"}} className="d-flex justify-content-center align-items-center">
        <AiFillFire style={fireStyle} />
        <span style={fireStyle}>{streakNumber}</span>
      </div>
   

      <Button variant='info' onClick={(e) => handleIncrementStreak(e)} style={{ color: "white" }}>I took all my medicines today!  <BiHappy /></Button>


    </div>
  )
}
export default Streaks;