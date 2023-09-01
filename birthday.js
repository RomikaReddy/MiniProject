import React, { useState,useEffect } from "react";
import "./birthday.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';
function Birthday() {
    // State variables
    const [isHovered, setIsHovered] = useState(false);// To track hover state
    const [birthdayUsers, setBirthdayUsers] = useState([]);//To store birthday user data
    
        // Event handlers for mouse enter and leave
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {

        setIsHovered(false);
    };

    // Fetch birthday user data from the server on component mount
    useEffect(() => {
        fetch("http://localhost:5001/api/birthday")
            .then(response => response.json())
            .then(data => setBirthdayUsers(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="birthday-container">
            <div
                className={`birthday-icon ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
             <FontAwesomeIcon icon={faCakeCandles} size="2xl" style={{color: "#1b0977",}} /> 
            
            </div>
            {isHovered && (
                <div className="profile-card">
                    {/* Profile card content */}
                    
                    <h2 className="moving-text">Today's Birthday</h2>
                    <ul>
                    {birthdayUsers.length === 0 ? (
                            <div className="moving-text">No Cakes and Candles</div>
                        ) : (
                            birthdayUsers.map(user => (
                                <div key={user.emp_id}>
                                    <div className="flex">
                                        <div className="profileImage">
                                            <img src="profile.png" alt="profile" style={{ maxWidth: 50 }} />
                                            <div className="names">
                                                <span className="username">{user.name}</span>
                                                <div className="designation"><h6>{user.designation}</h6></div>
                                                
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Birthday;
                        
