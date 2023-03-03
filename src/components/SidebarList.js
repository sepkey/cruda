// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// //icons
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

// const SidebarList = ({ items, handleMenu, valueItem }) => {
//   const navLinks = [
//     {
//       title: "home",
//       icon: <DesktopWindowsOutlinedIcon />,
//       path: "/",
//       name: "HOME",
//     },
//     {
//       title: "Users",
//       icon: <StorefrontOutlinedIcon />,
//       path: "/users",
//       name: "USERS",
//     },
//     {
//       title: "Add user",
//       icon: <LocalOfferOutlinedIcon />,
//       path: "/add",
//       name: "ADDUSERS",
//     },
//   ];
//   console.log(valueItem);
//   const handleListItemClick = (item) => handleMenu(item);
//   return (
//     <List component="nav">
//       {navLinks.map(({ title, path, icon, name }) => (
//         <ListItemButton
//           key={title}
//           disableRipple
//           selected={valueItem === items.HOME}
//           onClick={() => handleListItemClick(items[name])}
//           component={NavLink}
//           to={path}
//           style={({ isActive }) => ({
//             backgroundColor: isActive && "#f1ed97",
//           })}
//         >
//           <ListItemIcon
//             style={{
//               color: "inherit ",
//             }}
//           >
//             {icon}
//           </ListItemIcon>
//           <ListItemText primary={<Typography>{title}</Typography>} />
//         </ListItemButton>
//       ))}
//     </List>
//   );
// };

// export default SidebarList;

import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
//icons
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

const SidebarList = ({ items, handleClick, clickedItem }) => {
  const navLinks = [
    {
      title: "home",
      icon: <DesktopWindowsOutlinedIcon />,
      path: "/",
      name: "HOME",
    },
    {
      title: "Users",
      icon: <StorefrontOutlinedIcon />,
      path: "/users",
      name: "USERS",
    },
    {
      title: "Add user",
      icon: <LocalOfferOutlinedIcon />,
      path: "/add",
      name: "ADDUSERS",
    },
  ];
  return (
    <List component="nav">
      {navLinks.map(({ title, icon, name }) => (
        <ListItemButton
          key={title}
          disableRipple
          selected={clickedItem === items[name]}
          onClick={() => handleClick(items[name])}
        >
          <ListItemIcon
            style={{
              color: "inherit ",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={<Typography>{title}</Typography>} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SidebarList;
