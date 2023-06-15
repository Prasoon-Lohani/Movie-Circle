import React from "react";
import SimpleBottomNavigation from "../../components/Mainnav";
import Review from "../../components/reviews";
// import Login from "../../components/Login/Login";
import notes from "../../Data/notes";
import "./Myprofile.css";
import Logout from "../../components/Logout/Logout";
const Myprofile = () => {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  return (
    <>
      <div className="m">
        <Review title={"Welcome back Dhruv"}>
          <Logout />

          <h2
            style={{
              marginLeft: 10,
              marginBottom: 6,
            }}
            size="lg"
          >
            My Review's
          </h2>

          {notes.map((note) => (
            <div className="mai">
              <span
                className="titl"
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>

              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">Date</footer>
              </blockquote>
            </div>
          ))}
        </Review>
      </div>
      <SimpleBottomNavigation />
    </>
  );
};

export default Myprofile;
