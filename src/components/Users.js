import '../pages/Users.css';

function Users() {
    return (
        <div className="wrapper">
            <a id="admin">
                <div className="user_panel">
                    <div className="wrapper">
                        <div className="photo"><i className="far fa-user"></i></div>
                        <div className="title">Admin</div>
                    </div>
                </div>
            </a>
            <a id="allUsers" href="about.html">
                <div className="user_panel">
                    <div className="wrapper">
                        <div className="photo"><i className="far fa-user"></i></div>
                        <div className="title">Everyone else</div>
                    </div>
                </div>
            </a>
	    </div>
    );
  }
  
  export default Users;