import { Link, Navigate } from "react-router-dom";
import "./Sidebar.css";
// import { useAuth } from "../../context/AuthContext"

function Sidebar() {
  // const { logout } = useAuth()

  function handleLogout() {
    //     logout()
    // navigate('/login')
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="sidebar">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/produtos">Produtos</Link>
        {/* <Link  to= '/cadastro'>Cadastro</Link> */}
      </nav>

      <button onClick={handleLogout} className="baseline-sidebar-text">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
