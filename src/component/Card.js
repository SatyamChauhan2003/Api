import axios from "axios";
import { useEffect, useState } from "react";
import "./Card.css";
const Card = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        setValue(response.data);
      });
  }, []);
  return (
    <>
      <div className="main-card--cointainer">
        {value &&
          value.map((props) => {
            const { id, first_name, last_name, avatar, employment,username,email,gender,date_of_birth,phone_number } = props;
            return (
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span>
                      <img src={avatar} alt="user img" width="170px" />
                    </span>
                    <span className="card-author">
                      <h5>
                         {first_name} {last_name}
                      </h5>
                    </span>
                    <p className="card-title">
                      {employment.title}
                    </p>
                  </div>
                  <div className="card-back">
                  <h2>More Information</h2>
                  <hr></hr>
                  <h4>username: {username}</h4>
                  <h4>E-mail: {email}</h4>
                  <h4>Gender: {gender}</h4>
                  <h4>DOB: {date_of_birth}</h4>
                  <h4>Phone: {phone_number}</h4>
                  </div>
                </div>
              </div>
            );
          })}
       
      </div>
    </>
  );
};

export default Card;
