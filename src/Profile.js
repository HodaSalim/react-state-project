const styles = {
  backgroundColor: "lightGrey",
  fontFamily: "sans-serif",
  boxShadow: "5px 10px #888888",
  width: "40vw",
  margin: "0 auto",
  padding: "5%",
};

export function Profile({ profile, setProfile }) {
  if (profile.shows) {
    return (
      <div style={styles}>
        <h1>{profile.fullName}</h1>
        <p>{profile.bio}</p>
        <p>{profile.profession}</p>
        <img src={profile.imgSrc} alt="Hannah"></img>
      </div>
    );
  } else {
    console.log(profile);
    return (
      <button onClick={() => setProfile({ ...profile, shows: true })}>
        Click Me Buddy
      </button>
    );
  }
}
