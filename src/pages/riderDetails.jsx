import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RiderDetails() {
  const Locate = useLocation();

  const DETAIL_ID = Locate.state.uid;

  const [updatedName, setUpdatedName] = useState("");

  const [name, setname] = useState("");
  const [drivinglicencenumber, setDrivinglicencenumber] = useState("");
  const [email, setEmail] = useState("");
  const [languages, setLanguages] = useState([]);
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [photo, setPhoto] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [joinedTime, setJoinedTime] = useState("");

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [color, setColor] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [gearType, setGearType] = useState("");
  const [vehiclePhoto, setvehiclePhoto] = useState("");
  const [model, setModel] = useState("");
  const [noPassengers, setNoPassengers] = useState("");

  const URL = `${
    import.meta.env.VITE_PRODUCTION_URL
  }/api/serviceUsers/${DETAIL_ID}`;
  const vehicleURL = `${
    import.meta.env.VITE_PRODUCTION_URL
  }/api/vehicles/${DETAIL_ID}`;
  useEffect(() => {
    const getServiceUser = async (uid) => {
      try {
        const responce = await axios.get(URL).then((response) => {
          setname(response.data.display_name);
          setDrivinglicencenumber(response.data.driving_licence_number);
          setEmail(response.data.email);
          setLanguages(response.data.languages);
          setLocation(response.data.location);
          setPhoneNo(response.data.phone_number);
          setPhoto(response.data.photo_url);
          setPhoneNo(response.data.phone_number);
          setVehicleNo(response.data.vehicle_number);
          setDrivinglicencenumber(response.data.vehicle_number);
          setJoinedTime(response.data.created_time);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getServiceUser();
    const getVehicleDetials = async (uid) => {
      try {
        const responce = await axios.get(vehicleURL).then((response) => {
          setCapacity(response.data.capaity);
          setCategory(response.data.categoty);
          setColor(response.data.color);
          setFuelType(response.data.fuel_type);
          setGearType(response.data.gear_type);
          setvehiclePhoto(response.data.imageurl);
          setNoPassengers(response.data.max_passenger);
          setModel(response.data.model);
        });
      } catch (e) {
        console.log(e);
      }
    };
    getVehicleDetials();
  }, [updatedName]);

  const convertTime = (joinedTime) => {
    if (!joinedTime || !joinedTime._seconds || !joinedTime._nanoseconds) {
      return "Invalid timestamp";
    }

    const firebaseTimestamp = joinedTime;
    const date = new Date(
      firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1e6
    );
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

      <div class="flex flex-col items-center -mt-20">
        <img
          src={photo}
          class="w-40 border-4 border-white rounded-full"
          width="10%"
        />
        <div className="flex items-center space-x-2 mt-2">
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
        <p className="text-sm text-gray-500"></p>
      </div>

      <div className="my-4 ">
        <div class="w-full flex flex-col 2xl:w-1/3">
          <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul class="mt-2 text-gray-700">
              <li class="flex border-y py-2">
                <span class="font-bold w-24">Full name :</span>
                <span class="text-gray-700">{name}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Email :</span>
                <span class="text-gray-700">{email}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Joined :</span>
                <span class="text-gray-700">{convertTime(joinedTime)}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Mobile :</span>
                <span class="text-gray-700">{phoneNo}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Location :</span>
                <span class="text-gray-700">{location}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Languages :</span>
                <span class="text-gray-700">
                  {languages[0]} {languages[1]} {languages[2]} {languages[3]}{" "}
                  {languages[4]}
                </span>
              </li>
              <li class="flex items-center border-b py-2 space-x-2">
                <span class="font-bold w-24">Vehicle No :</span>
                <span class="text-gray-700">{vehicleNo}</span>
              </li>
              <li class="flex items-center border-b py-2 space-x-2">
                <span class="font-bold w-24">Driving License No :</span>
                <span class="text-gray-700">{drivinglicencenumber}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="my-4 ">
        <div class="w-full flex flex-col 2xl:w-1/3">
          <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 class="text-xl text-gray-900 font-bold">Vehicle Info</h4>
            <ul class="mt-2 text-gray-700">
              <li class="flex border-y py-2">
                <span class="font-bold w-24">Capacity :</span>
                <span class="text-gray-700">{capacity}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Category :</span>
                <span class="text-gray-700">{category}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Color :</span>
                <span class="text-gray-700">{color}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Fuel Type :</span>
                <span class="text-gray-700">{fuelType}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">Gear Type :</span>
                <span class="text-gray-700">{gearType}</span>
              </li>
              <li class="flex border-b py-2">
                <span class="font-bold w-24">No of Maximum Passenges :</span>
                <span class="text-gray-700">{noPassengers}</span>
              </li>
              <li class="flex items-center border-b py-2 space-x-2">
                <span class="font-bold w-24">Model :</span>
                <span class="text-gray-700">{model}</span>
              </li>
              <li>
                <span class="font-bold w-24">Model :</span>
                <span class="text-gray-700">
                  <img
                    src={vehiclePhoto}
                    class="w-40 border-4 border-white "
                    width="30%"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RiderDetails;
