import styles from "./Footer.module.css";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made with{" "}
      <FavoriteRoundedIcon
        sx={{ color: "#ff0000", paddingLeft: 0.5, paddingRight: 0.5 }}
      />{" "}
      by
      <a className={styles.name_tag} href="https://github.com/kabomboExe">
        Kai F.
      </a>
    </div>
  );
};

export default Footer;
