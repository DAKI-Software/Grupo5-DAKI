import * as React from "react";
import { Link } from "react-router-dom";

// UI Elements
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import BookIcon from "@mui/icons-material/Book";

const CustomListItemIcon = ({ children, ...restProps }) => (
  <ListItemIcon {...restProps} style={{ color: "#FFFFFFBF" }}>
    {children}
  </ListItemIcon>
);

const CustomLink = ({ label, path }) => (
  <Link
    to={path}
    style={{
      color: "white",
      textDecoration: "none",
      margin: "0",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
      display: "block",
    }}
  >
    {label}
  </Link>
);

const mainListPaths = [
  {
    icon: PersonIcon,
    path: "/profile",
    label: "Mi Perfil",
  },
  {
    icon: CreateIcon,
    path: "/tasks",
    label: "Tareas y Evaluaciones",
  },
  {
    icon: BookIcon,
    path: "/rooms",
    label: "Sala de Estudio",
  },
];

export const mainListItems = (
  <div>
    {mainListPaths.map((item, index) => (
      <ListItem button key={`ListItem-${index}`}>
        <CustomListItemIcon>
          <item.icon />
        </CustomListItemIcon>
        <CustomLink path={item.path} label={item.label} />
      </ListItem>
    ))}
  </div>
);
