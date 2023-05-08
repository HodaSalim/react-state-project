import React from "react";
import { Profile } from "./Profile";
import { useState } from "react";

const user = {
  fullName: "Hannah Sminth",
  bio: "a careere driven social media specialist that always aims to set the next trend to acheive your business objectives",
  profession: "Social Media Manager",
  imgSrc: "./Hannah.jpeg",
  shows: false,
};

function App() {
  const [profile, setProfile] = useState(user);
  return (
    <>
      <Profile profile={profile} setProfile={setProfile} />
    </>
  );
}

export default App;
