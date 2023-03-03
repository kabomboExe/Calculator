import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.menu_left}>
                <Link to="/"><div className={styles.logo}></div></Link>
            </div>
            <div className={styles.menu_right}>
                <Link className={styles.menu_item} to="/"><CalculateOutlinedIcon ></CalculateOutlinedIcon></Link>
                <Link className={styles.menu_item} to="/currency"><CurrencyExchangeOutlinedIcon ></CurrencyExchangeOutlinedIcon></Link>

            </div>

        </div>
    );
}

export default Header;