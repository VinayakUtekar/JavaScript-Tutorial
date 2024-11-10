import {Link} from "react-router-dom";

function NavBar()
{
  return(
    <>
      <center>
        <div className="nav">
	  <Link to="/">Home</Link>
	  <Link to="/create">Create Student</Link>
	  <Link to="/update">Update Student</Link>
        </div>
      </center>
    </>
  );
}

export default NavBar;