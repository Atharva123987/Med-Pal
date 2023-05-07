import { Link } from "react-router-dom";
import "./sidenav.css";
import { AiOutlineHome, AiOutlineAreaChart} from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { useLogout } from "../hooks/useLogout";
import { BsInfoCircle } from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";
import { FaRegHospital } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Sidenav = () => {
  const { logout } = useLogout();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="sidenav">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Manage Medicines</Tooltip>}
        >
          <Link to="/medicines" onClick={scrollToTop}>
            <GiMedicines />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>View Charts</Tooltip>}
        >
          <Link to="/charts" onClick={scrollToTop}>
            <AiOutlineAreaChart />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>View Appointments</Tooltip>}
        >
          <Link to="/appointments" onClick={scrollToTop}>
            <FaRegHospital />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>View Reports</Tooltip>}
        >
          <Link to="/reports" onClick={scrollToTop}>
            <TbReport />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Search Doctors Nearby</Tooltip>}
        >
          <Link to="/search">
            <MdPersonSearch />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Go to Home</Tooltip>}
        >
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>About Us</Tooltip>}
        >
          <Link to="/about" onClick={scrollToTop}>
            <BsInfoCircle />
          </Link>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Logout</Tooltip>}
        >
          <Link to="/" onClick={handleLogout}>
            <CgLogOut />
          </Link>
        </OverlayTrigger>

      </div>
    </>
  );
};

export default Sidenav;
