import React from "react";

interface UserProp {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
  };
  login: {
    username: string; 
  };
}

const Profile: React.FC<UserProp> = ({
  gender,
  name,
  location,
  email,
  dob,
  phone,
  cell,
  picture,
  login, 
}) => {
  return (
    <div className="profile-card">
      <img
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        className="profile-image"
      />

      <h2 className="profile-name">
        {name.title} {name.first} {name.last}
      </h2>

      <p className="profile-info">
        <span className="font-semibold">Gender:</span> {gender}
      </p>
      <p className="profile-info">
        <span className="font-semibold">Location:</span>{" "}
        {location.street.number} {location.street.name}, {location.city},{" "}
        {location.state}, {location.country}, {location.postcode}
      </p>
      <p className="profile-info">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="profile-info">
        <span className="font-semibold">Age:</span> {dob.age} years old
      </p>
      <p className="profile-info">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="profile-info">
        <span className="font-semibold">Cell:</span> {cell}
      </p>
      <p className="profile-info">
        <span className="font-semibold">Username:</span> {login.username}
      </p>
    </div>
  );
};

export default Profile;
