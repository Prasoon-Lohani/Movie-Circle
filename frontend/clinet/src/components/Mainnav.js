import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  // const history = useNavigate();

  // useEffect(() => {
  //   if (value === 9) history("/movies");
  //   else if (value === 1) history("/trending");
  //   else if (value === 2) history("/myprofile");
  //   else if (value === 3) history("/search");
  // }, [value, history]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        zIndex: 100,

        justifyContent: "center",
      }}
    >
      <div className="root">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to={"/movies"}>
            <BottomNavigationAction
              label="Movies"
              icon={<MovieIcon />}
            ></BottomNavigationAction>
          </Link>

          <Link to={"/trending"}>
            <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
          </Link>
          <Link to={"/myprofile"}>
            <BottomNavigationAction label="My Profile" icon={<PersonIcon />} />
          </Link>
          <Link to={"/search"}>
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          </Link>
        </BottomNavigation>
      </div>
    </Box>
  );
}
