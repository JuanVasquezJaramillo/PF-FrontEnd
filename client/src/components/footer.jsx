import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "../modules/footer.module.css";

export default function Footer() {
  const brandLinkStyles = {
    fontWeight: "bold",
    color: "#fff",
    width: "fit-content",

    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  };
  return (
    <div className={style.footerContainer}>
      <Typography variant="h6" style={brandLinkStyles}>
        <NavLink to="/">
          <h6 className={style.marca}>OnlyTrainers</h6>
        </NavLink>
      </Typography>
      <div>
        <p>© 2023 OnlyTrainers, Inc.</p>
      </div>
      <div className={style.icons}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
            alt="Facebook"
            width="30px"
            height="30px"
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
            alt="Instagram"
            width="30px"
            height="30px"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
            alt="Twitter"
            width="30px"
            height="30px"
          />
        </a>
      </div>
    </div>
  );
}
