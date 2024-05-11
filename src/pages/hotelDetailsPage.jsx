import React from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function HotelDetails() {

  const Locate=useLocation();
  
  const UID=Locate.state.userid;
  
  const URL=`http://localhost:4000/api/hotels/${UID}`;
  const ownerURL=`http://localhost:4000/api/serviceUsers/${UID}`;

  const [updatedName, setUpdatedName] = useState("");
  const [availablity, setAvailability] = useState(false);
  const [description,setDescription] =useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [noRooms, setNoRooms] = useState(0);
  const [photo, setPhoto] = useState("");
  
  const [price, setPrice] = useState(0);
  const [displayAvailablity, setDisplayAvailablity] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [joinedTime, setJoinedTime] = useState("");
  const [email, setEmail] = useState(0);
  const [phoneNo, setPhoneNo] = useState("");
  
  useEffect(() => {
    const getHotel = async () => {
      try {
        await axios.get(URL)
        .then((response)=>{setName(response.data.hotelName);
          setAvailability(response.data.availability);
          //setEmail(response.data.email);
          setDescription(response.data.des);
          setLocation(response.data.location);
          setPhoto(response.data.photourl);
          setNoRooms(response.data.numberOfRooms);
          setPrice(response.data.price);
          
          
        })
          
        } catch (e) {
        console.log(e);
      }
    };
    getHotel();
    const getOwnerDetails = async () => {
      try {
        await axios.get(ownerURL)
        .then((response)=>{
          setOwnerName(response.data.display_name);
          setJoinedTime(response.data.created_time);
          setEmail(response.data.email);
          setPhoneNo(response.data.phone_number);
          
          
        })
          
        } catch (e) {
        console.log(e);
      }
    };
    getOwnerDetails();
    if(availablity == true){
      setDisplayAvailablity("Yes");
    }else{
      setDisplayAvailablity("No");
    }
  }, [updatedName]);

  const convertTime = (joinedTime) => {
    if (!joinedTime || !joinedTime._seconds || !joinedTime._nanoseconds) {
      return "Invalid timestamp";
  }
  
  const firebaseTimestamp =joinedTime;
  const date = new Date(firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1e6);
  return date.toLocaleString();
  };
  
  return (
    <>
    
      <div className="w-full h-[250px]">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
          class="w-full h-full rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div class="flex flex-col items-center -mt-40">
        <img
          src={photo}
          class="w-40 h-40 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-5">
          <p className="text-2xl">{name}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700">
        {location}
        </p>
      </div>

      <div className="my-4 ">
        <div class="w-full flex flex-col 2xl:w-1/3">
          <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 class="text-xl text-gray-900 font-bold">Hotel Info</h4>
            <ul class="mt-2 text-gray-700 justify-center">
            <li class="flex border-b py-2">
                <span class="font-bold w-24">Avaiablity :</span>
                <span class="text-gray-700">{displayAvailablity}</span>
              </li>
              <li class="flex border-y py-2">
                <span class="font-bold w-24">Hotel name :</span>
                <span class="text-gray-700">{name}</span>
              </li>

              <li class="flex border-b py-2">
                <span class="font-bold w-24">Location : </span>
                <span class="text-gray-700">{location}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Description : </span>
                <span class="text-gray-700">{description}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Number of Rooms :</span>
                <span class="text-gray-700"> {noRooms} </span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Price :</span>
                <span class="text-gray-700"> {price}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <div class="w-full flex flex-col 2xl:w-1/3">
          <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 class="text-xl text-gray-900 font-bold">Owner Info</h4>
            <ul class="mt-2 text-gray-700 justify-center">
            <li class="flex border-b py-2">
                <span class="font-bold w-24">Name :</span>
                <span class="text-gray-700">{ownerName}</span>
              </li>
              <li class="flex border-y py-2">
                <span class="font-bold w-24">Email :</span>
                <span class="text-gray-700">{email}</span>
              </li>

              <li class="flex border-b py-2">
                <span class="font-bold w-24">Phone Number : </span>
                <span class="text-gray-700">{phoneNo}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Joined Date : </span>
                <span class="text-gray-700">{convertTime(joinedTime)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetails;