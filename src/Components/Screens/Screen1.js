import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
// import users from "../data.js";

export default function Screen1() {
  const { userId } = useParams();
  const [isValidUser, setIsValidUser] = useState(false);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];

    let role = "";
    users.forEach((user) => {
      if (user.id === userId) {
        role = user.role;
        return;
      }
    });

    if (
      userId !== null &&
      JSON.parse(localStorage.getItem("token")) === userId &&
      role === "admin"
    )
      setIsValidUser(true);
  }, [isValidUser, userId]);

  return (
    <React.Fragment>
      {isValidUser ? (
        <div>
          <div
            id="dashboardCards"
            className="d-flex flex-row flex-wrap justify-content-evenly"
          >
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
            <div className="card my-1">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </React.Fragment>
  );
}
