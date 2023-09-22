import React, { useState } from "react";
import "../Screen1.css"; // Import your CSS or use inline styles
import Logo from "../HomeScreen/Logo";
import "./ProfileSetup.css";
import dropdown from "../Images/dropdown.png";

function ProfileSetup() {
    // const navigate = useNavigate();

    //  const navigateToVerification = () => {
    //    navigate('/verify'); // Navigate to the About page
    // };

  const [formData, setFormData] = useState({
    name : "",
    timeZone:"",
    bio : "",
    prmLang : "",
    secLang : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, e.g., send the data to an API
    console.log(formData);
  };
  
  return (

    <div className="row">
      <div className="d-flex">
        <div className="col-md-5 containerLeft">
          <div className="container">
            <h2 className="pl-5 pr-5" style={{fontFamily: 'GilroyBold', marginTop: 80, fontSize: 50,
              marginLeft: 50
          }}>
            Step into a World of Musical Talent and Creativity
            </h2>
            <br/>
            <p className="" style={{fontFamily: 'GilroyLight', marginLeft: 50, 
            marginBottom: 130}}>Embark on a Journey of Musical Discovery: 
            Where Your Talents Shine and Your Music Career Thrives.</p>
          </div>
          <p style={{fontFamily: 'GilroyBold', marginLeft: 60, marginBottom:0}}>Step 3</p>
          <p className="fs-4" style={{fontFamily: 'GilroyBold', marginLeft: 60,  marginBottom:0}}>Personal Info</p>
          <p style={{fontFamily: 'GilroyLight', marginLeft: 60, marginBottom:0}}>
          Share a few details about yourself, including your name and a profile picture.
          </p>
          <div className="line-container">
            <div
              className="horizontal-line"
              style={{ backgroundColor: "black" }}
            ></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"
            style={{ backgroundColor: "black" }}></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
          </div>
        </div>

        <div className="container" 
        style={{marginTop:30}}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <Logo/>
            </div>
              <div style={{display: "grid"}}>
              < div className="row justify-content-center">
                <div className="col-md-7">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            id="username"
                            name="username"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="timeZome">Time Zone</label>
                        <select
                            className="form-control"
                            // placeholder="Enter your password"
                            id="timezone"
                            name="timezone"
                            value={formData.timeZone}
                            onChange={handleChange}
                            // required
                            
                        >
                            <option value="Pakistan (GMT+5)">Pakistan (GMT+5)</option>
                            <option value="Time Zone 2">Time Zone 2</option>
                            <option value="Time Zone 3">Time Zone 3</option>
                            <option value="Time Zone 4">Time Zone 4</option>
                            <option value="Time Zone 5">Time Zone 5</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            required

                            style={{height: 150}}
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="timeZome">Primary Language</label>
                        <select
                            className="form-control"
                            // placeholder="Enter your password"
                            id="prmLang"
                            name="prmLang"
                            value={formData.prmLang}
                            onChange={handleChange}
                            // required
                            
                        >
                            <option value="English">English</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                        </div>

                        <div className="form-group">
                        <label htmlFor="timeZome">Secondary Language</label>
                        <select
                            className="form-control"
                            // placeholder="Enter your password"
                            id="seclang"
                            name="seclang"
                            value={formData.secLang}
                            onChange={handleChange}
                            // required
                            
                        >
                            <option value="English">English</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                        </div>

                        <div className="d-flex btn-block">
                            <button className="btn btn-primary back">
                                Back
                            </button>
                            <button className="btn btn-primary next">
                                Next
                            </button>
                        </div>
                    </form>
                    
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default ProfileSetup;
