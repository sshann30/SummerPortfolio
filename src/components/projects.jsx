import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/shirt.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Merch Site</a></h3>
											<span>Concept in React for a Band or Merch</span>
											<p className="icon">		
												<span><a href="https://github.com/sshann30/Band-T-shirts">Github Link</a></span>
												<span><a href="https://powerful-journey-20024.herokuapp.com/">Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/omega.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Ωmega Chat (Project 3)</a></h3>
											<span>Fraternity Networking App</span>
											<p className="icon">
											<span><a href="https://github.com/mspenski/Omega-Chat"> Github Link</a></span>
											<span><a href="https://rocky-island-31181.herokuapp.com/"> Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/shady.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Shady Servers (Project 2)</a></h3>
											<span>Fortnite Player Finder</span>
											<p className="icon">
											<span><a href="https://github.com/sshann30/Project2RoughStart"> Github Link</a></span>
											<span><a href="https://salty-caverns-51624.herokuapp.com/"> Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/art.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Arti-Sense (Project 1)</a></h3>
											<span>Application</span>
											<p className="icon">
											<span><a href="https://github.com/sshann30/FirstProject"> Github Link</a></span>
											<span><a href="https://sshann30.github.io/FirstProject/"> Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/Train.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Train Scheduler</a></h3>
											<span>Firebase driven application for train times</span>
											<p className="icon">
											<span><a href="https://github.com/sshann30/Firebase-Assignment---Train-Scheduler"> Github Link</a></span>
											<span><a href="https://sshann30.github.io/Firebase-Assignment---Train-Scheduler/"> Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Trivia.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Trivia Game</a></h3>
											<span>A Chicago Sport Quiz</span>
											<p className="icon">
											<span><a href="https://github.com/sshann30/TriviaGame"> Github Link</a></span>
											<span><a href="https://sshann30.github.io/TriviaGame/"> Deployed Link</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
