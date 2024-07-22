import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  DarkMode,
  WbSunny,
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
} from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import Welcome from "./welcome";

function Root() {
  const [Mymode, setMymode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const handlemode = () => {
    setMymode(Mymode === "light" ? "dark" : "light");
    localStorage.setItem("mode", `${Mymode}`);
  };

  const darkTheme = createTheme({
    palette: {
      mode: Mymode,
    },
    custom: {
      active: {
        color: "blue", // Custom color for active step
      },
    },
  });

  let location = useLocation();
  const navigate = useNavigate();

  const steps = ["STEP 1", "STEP 2", "STEP 3", "STEP 4"];
  const subtitles = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "80%",
            maxWidth: "1000px",
            minHeight: "80vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            overflow: "hidden",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* frist section */}
          <Box
            sx={{
              width: { xs: "100%", md: 240 },
              flexShrink: 0,
              boxSizing: "border-box",
              bgcolor: "background.paper",
              color: "#fff",
              backgroundImage: {
                xs: 'url("https://res.cloudinary.com/dfkn5xnul/image/upload/v1721670617/bg-sidebar-mobile_s77fbc.svg")',
                md: 'url("https://res.cloudinary.com/dfkn5xnul/image/upload/v1721670618/bg-sidebar-desktop_l9od45.svg")',
              },
              backgroundSize: "cover",
              p: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-end" },
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              display: { xs: "block", sm: "flex" },
              flexDirection: { xs: "row", md: "column" },
              height: { xs: "150px", md: "auto" },
              position: { xs: "relative", md: "relative" },
            }}
          >
            {/* display: flex;
        align-items: flex-end;
        flex-wrap: nowrap;
        justify-content: flex-start; */}
            <IconButton
              sx={{
                padding: "5px",
                width: 50,
                height: 50,
                margin: { xs: "0 auto 10px auto", md: "7px auto" },
                display: "flex",
                color: "#fff",
                position: { xs: "absolute", md: "static" },
                top: { xs: 110, md: "auto" },
                zIndex: "100",
                right: { xs: 10, md: "auto" },
              }}
              size="large"
              edge="start"
              color="inherit"
              onClick={handlemode}
            >
              {Mymode === "light" ? <WbSunny /> : <DarkMode />}
            </IconButton>
            <List
              sx={{
                display: { xs: "flex", md: "block" },
                flexDirection: { xs: "row", md: "column" },
                justifyContent: { xs: "space-between", md: "flex-start" },
                p: 2,
                mt: 4,
              }}
            >
              {steps.map((step, index) => {
                const isActive =
                  location.pathname ===
                  `/${step.replace(/\s+/g, "").toLowerCase()}`;

                return (
                  <ListItem
                    key={step}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      minWidth: { xs: 20, md: 240 },
                      justifyContent: { xs: "center", md: "flex-end" },
                      p: 0,
                      display: { xs: "flex", md: "flex" },
                    }}
                    disablePadding
                    onClick={() =>
                      navigate(`/${step.replace(/\s+/g, "").toLowerCase()}`)
                    }
                  >
                    <ListItemButton
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        flexDirection: { xs: "row", md: "column" },
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      <ListItemIcon>
                        {index === 0 ? (
                          <LooksOne
                            sx={{
                              color: isActive ? "gold" : "inherit",
                              borderRadius: "50px",
                            }}
                          />
                        ) : index === 1 ? (
                          <LooksTwo
                            sx={{
                              color: isActive ? "gold" : "inherit",
                              borderRadius: "50px",
                            }}
                          />
                        ) : index === 2 ? (
                          <Looks3
                            sx={{
                              color: isActive ? "gold" : "inherit",
                              borderRadius: "50px",
                            }}
                          />
                        ) : (
                          <Looks4
                            sx={{
                              color: isActive ? "gold" : "inherit",
                              borderRadius: "50px",
                            }}
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={step}
                        secondary={subtitles[index]}
                        sx={{
                          display: { xs: "none", md: "block" },
                          maxWidth: "75px",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* second div */}
          <Box
            sx={{
              flexGrow: 1,
              p: 3,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              {location.pathname === "/" && <Welcome />}
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Root;
