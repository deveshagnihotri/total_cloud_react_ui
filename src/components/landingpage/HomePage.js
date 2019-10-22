import React, { useState } from 'react';
import './HomePage.css';
import { Redirect } from 'react-router-dom';
import { Data } from '../assets';

function HomePage() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  if (isClicked) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="homepage-container">
      <div className="homepage-container routes">
        <p>Homeage > Use case categories</p>
      </div>
      <div className="homepage-secondContainer">
        <div className="secondContainer-first">
          <span>
            <h3>
              <b>Templates</b>
            </h3>
          </span>
          <p>
            Worklow is a logical flow of event, data and actions to achieve{' '}
            <br /> a particular output whether an insight, a compliance check, a
            <br />
            report remedation, or some form action
          </p>
          <span
            className="secondContainer-button"
            onClick={() => handleClick()}
          >
            SIGN UP
          </span>
        </div>
        <div className="secondContainer-second">
          <div>
            <h1>IMAGE</h1>
          </div>
        </div>
      </div>
      <div className="homepage-thirdContainer">
        <span>
          <h1 className="thirdContainer-heading">Benefits</h1>
        </span>
        <div className="thirdContainer-items">
          <div className="item-1 item">
            <img src={Data.noCodeIcon} />
            <h5>
              <b>No Code</b>
            </h5>
            <p>
              Use pre built node to
              <br />
              achieveany use case
            </p>
          </div>
          <div className="item-2 item">
            <img src={Data.billshock} />
            <h5>
              <b>Pay Less</b>
            </h5>
            <p>
              No pay a % of your cloud
              <br />
              spend.Pay only for what you run
            </p>
          </div>
          <div className="item-3 item">
            <img src={Data.shipmore} />
            <h5>
              <b>Ship More</b>
            </h5>
            <p>
              Go from idea to live in
              <br />
              minutes
            </p>
          </div>
        </div>
        <div className="secondContainer-startedButton">
          <span className="secondContainer-button btn">
            <h5>Get Started</h5>
          </span>
        </div>

        <div className="fourthContainer">
          <span>
            <h1>Templates Categories</h1>
          </span>
          <div className="fourthContainer-items">
            <div className="fourth-item-first">
              <span>By Services</span>
              <span>By Solution</span>
              <span>By Functionality</span>
              {/* <span className=" search-field">
                <input
                  type="search"
                  placeholder="Seacrch Templates By Keywords"
                />
              </span> */}
            </div>
            <div className="fourth-item-container">
              <span>ec2</span>
              <div className="fourth-item-second">
                <div className="item-second-first">
                  <p> div</p>
                </div>
                <div className="item-second-sec">
                  <p> div</p>
                </div>
                <div className="item-second-third">
                  <p> div</p>
                </div>
                <div className="item-second-third">
                  <p> div</p>
                </div>
                <div className="item-second-third">
                  <p> div</p>
                </div>
              </div>
              <span className="load-more-span">Load More</span>
            </div>
            <span>RDS</span>
            <div className="fourth-item-second">
              <div className="item-second-first">
                <p> div</p>
              </div>
              <div className="item-second-sec">
                <p> div</p>
              </div>
              <div className="item-second-third">
                <p> div</p>
              </div>
              <div className="item-second-third">
                <p> div</p>
              </div>
              <div className="item-second-third">
                <p> div</p>
              </div>
            </div>

            <div>
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
