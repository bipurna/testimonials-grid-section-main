import React from "react";
import "./Grids-Card.css";
import daniel from '../images/image-daniel.jpg';
import jonathan from '../images/image-jonathan.jpg';
import jeanette from '../images/image-jeanette.jpg';

import patrick from '../images/image-patrick.jpg';
import kira from '../images/image-kira.jpg';

function GridsCard() {
  return (
    <div className="Container">
      <div className="left-cards ">
        <div className="left-cards__top">
          <div className="card-flex-2 card">
            <div className="header">
              <div className="Photo">
                <img src={daniel} alt="person" />
              </div>
              <div className="details">
                <h3>Daniel Clifford</h3>
                <p>Verified Graduate</p>
              </div>
            </div>
            <div className="idea-section">
              <h2>
                {" "}
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny’s worth.{" "}
              </h2>
              <p>
                {" "}
                “ I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </p>
            </div>
          </div>
          <div className="card-flex-1 card">
            <div className="header">
              <div className="Photo">
                <img src={jonathan} alt="person" />
              </div>
              <div className="details">
                <h3>Jonathan Walters</h3>
                <p>Verified Graduate</p>
              </div>
            </div>
            <div className="idea-section">
              <h2>The team was very supportive and kept me motivated</h2>
              <p>
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p>
            </div>
          </div>
        </div>
        <div className="left-cards__bottom">
          <div className="card-flex-1 card ">
            <div className="header">
              <div className="Photo">
                <img src={jeanette} alt="person" />
              </div>
              <div className="details">
                <h3>Jeanette Harmon</h3>
                <p>Verified Graduate</p>
              </div>
            </div>
            <div className="idea-section">
              <h2>An overall wonderful and rewarding experience</h2>
              <p>
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </p>
            </div>
          </div>
          <div className="card-flex-2 card">
            <div className="header">
              <div className="Photo">
                <img src={patrick} alt="person" />
              </div>
              <div className="details">
                <h3>Patrick Abrams</h3>
                <p>Verified Graduate</p>
              </div>
            </div>
            <div className="idea-section">
              <h2>
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </h2>
              <p>
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-card card">
        <div className="header">
          <div className="Photo">
            <img src={kira} alt="person" />
          </div>
          <div className="details">
            <h3>Kira Whittle</h3>
            <span>Verified Graduate</span>
          </div>
        </div>
        <div className="idea-section">
          <h2>Such a life-changing experience. Highly recommended!</h2>
          <p>
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridsCard;
