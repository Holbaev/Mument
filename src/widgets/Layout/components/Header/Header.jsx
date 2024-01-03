import React from "react";
import styles from "./Header.module.scss";
import Controls from "../../../../shared/Controls/Controls";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import PopoverPop from "../../../../shared/Popover/Popover";
import { useState , useEffect} from "react";
import { loguot } from "../../../../shared/service/Register";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({toggleMenu}) => {
  // states
  const [data] = useState([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isScrolled, setIsScrolled] = useState(false);
  // functions
  const handleTogglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const handleLogout = async () => {
    try {
      const response = await loguot();
      console.log(response.data);
      localStorage.removeItem("token");
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header  className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Controls />
      {token ? (
        <div className={styles.header_icons}>
          <button className={styles.header_icon}>
            <FontAwesomeIcon icon={faBell} className={styles.icon} />
          </button>
          <PopoverPop
            isOpen={isPopoverOpen}
            positions={["bottom", "right"]}
            padding={10}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div className={styles.content}>
                <button className={styles.content_text} onClick={() => navigate("/profile/")}>Профиль</button>
                <hr color="gray" />
                <button className={styles.content_text} onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            }
          >
            <button
              className={styles.header_icon}
              onClick={handleTogglePopover}
            >
              <FontAwesomeIcon icon={faPerson} className={styles.icon} />
            </button>
          </PopoverPop>
           <button className={styles.burger_icon} onClick={toggleMenu}>
            <FontAwesomeIcon className={styles.icon} icon={faBars}/>
           </button>
        </div>
      ) : (
        <div className={styles.header_btns}>
          <button
            className={styles.login_btn}
            onClick={() => navigate("/register/")}
          >
            Sign up
          </button>
          <button
            className={styles.register_btn}
            onClick={() => navigate("/login/")}
          >
            Log in
          </button>
          <button className={styles.burger_icon} onClick={toggleMenu}>
            <FontAwesomeIcon className={styles.icon} icon={faBars}/>
           </button>
        </div>
      )}
    </header>
  );
};

export default Header;
