import { FiLogOut } from "react-icons/fi";

const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      className="btn btn-danger d-flex align-items-center gap-2 fw-bold shadow-sm"
      onClick={handleLogout}
    >
      <FiLogOut className="fs-5" />
      Logout
    </button>
  );
};

export default LogoutButton;
