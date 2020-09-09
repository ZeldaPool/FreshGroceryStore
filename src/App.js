import React from 'react';
import './App.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const App = () => {
	return (
		<div className="py-0 px-0 my-0 mx-0">
			<Navbar className="navheadcon" expand="lg">
				<Navbar.Brand href="#home">
					<h2 className="navbarhead">Fresh Grocery</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="NNN" />
				<Navbar.Collapse id="NNN">
					<Nav className="mr-auto" />
					<Button className="btn btn-light border-0" href="">
						Log in
					</Button>
					<Nav className="mr-4 mt-2" />
					<Button className="btn btn-success border-0" href="">
						Sign-Up
					</Button>
				</Navbar.Collapse>
			</Navbar>

			<div class="jumbotron jumbotron-fluid text-center">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<div class="container">
							<h1 className="display-4 mt-5">
								Stay Home <span className="d-none d-md-inline">-</span> We'll Deliver
							</h1>
							<p className="lead mb-5">Get your groceries delivered in less than an hour</p>

							<div className="row justify-content-around">
								<div className="col-12 col-md-10">
									<div class="input-group mb-3">
										<input type="text" class="form-control" placeholder="Search for a location" />
										<div class="input-group-append">
											<button class="d-none d-md-block btn btn-success" type="button">
												Search
											</button>
										</div>
									</div>

									<div className="row justify-content-around cities">
										<div className="col-11">
											<div className="row justify-content-around">
												<p>NEW YORK</p>
												<p>LOS ANGELES</p>
												<p>CHICAGO</p>
												<p>HOUSTON</p>
												<p>PHOENIX</p>
												<p>PHILADELPHIA</p>
												<p>SAN ANTIONO</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="container-fluid px-0">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div>
							<div className="row justify-content-left justify-content-lg-center">
								<div className="col-8 ml-5 ml-lg-0 mb-5 mb-md-0">
									<h4 className="hash">#GroceryDeliveredSafe</h4>
									<h2 className="boldhash">Hygenically Packed, Safely Delivered</h2>

									<button className="btn btn-success mt-5">Get Started</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<img className="img-fluid heightcl" src={require('./mask1.png')} />
					</div>
				</div>
			</section>

			<div className="row justify-content-around mt-5 text-left tick">
				<div className="col-9 mb-2 mb-md-0 col-md-2">
					<span class="iconify redicon" data-icon="octicon:check-circle-fill-16" data-inline="false" />
					<h3>Zero touch delivery options</h3>
				</div>
				<div className="col-9 mb-2 mb-md-0 col-md-2">
					<span class="iconify redicon" data-icon="octicon:check-circle-fill-16" data-inline="false" />
					<h3>Regular Cleaning of warehouses</h3>
				</div>
				<div className="col-9 col-md-2">
					<span class="iconify redicon" data-icon="octicon:check-circle-fill-16" data-inline="false" />
					<h3>Fever screening of all executives</h3>
				</div>
			</div>

			<section className="container-fluid px-0 margwun">
				<div className="text-center pt-5">
					<h4 className="hash">Here's what you need</h4>
					<h1 className="boldhash">Quick Searches</h1>
				</div>

				<div className="d-flex flex-column flex-lg-row align-items-center justify-content-around text-center mt-4 maintxt">
					<div>
						<img className="img-fluid" src={require('./11.png')} />
						<h4>Grocery</h4>
					</div>
					<div>
						<img className="img-fluid" src={require('./bb.PNG')} />
						<h4>Vegetables and Fruits</h4>
					</div>
					<div>
						<img className="img-fluid" src={require('./cc.PNG')} />
						<h4>Personal Care</h4>
					</div>
					<div>
						<img className="img-fluid" src={require('./dd.PNG')} />
						<h4>Home and Kitchen</h4>
					</div>
					<div>
						<img className="img-fluid" src={require('./ee.PNG')} />
						<h4>Beverages</h4>
					</div>
				</div>
				<div className="row align-items-center justify-content-around text-center mt-4 pb-5">
					<Button className="btn btn-success border-0" href="">
						Explore More
					</Button>
				</div>
			</section>

			<section className="container-fluid px-0">
				<div className="row align-items-center justify-content-around text-center mt-4 pb-5">
					<div className="col-12 col-lg-4">
						<h4 className="hash">Get Delivered in 3 easy steps</h4>
						<h1 className="boldhash">Here's how it works</h1>
						<img className="img-fluid mb-3" src={require('./hand.png')} />
						<h3 className="boldhash">1. Request in the app</h3>
						<h4 className="sectiontxt">
							Set your delivery location, Choose your groceries from a wide range of 5000+ products
						</h4>
						<div className="row align-items-center justify-content-around text-center mt-4 pb-5">
							<Button className="btn btn-success border-0" href="">
								GOOGLE PLAY
							</Button>
							<Button className="btn btn-danger border-0" href="">
								APP STORE
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="container-fluid px-0">
				<div className="row align-items-center text-center marg">
					<div className="col-md-6 order-2 order-md-1">
						<div className="row justify-content-center">
							<div className="col-10 col-lg-8 cont mb-5 mb-md-0">
								<h3 className="boldhash">2. Schedule and pay</h3>
								<h4 className="sectiontxt">
									Schedule the delivery at your convenient time and pay digitally
								</h4>
							</div>
						</div>
					</div>
					<div className="col-md-6 order-1 order-md-2">
						<img className="img-fluid" src={require('./arms.png')} />
					</div>
				</div>
				<div className="row align-items-center text-center marg">
					<div className="col-md-6 ">
						<img className="img-fluid" src={require('./legs.png')} />
					</div>
					<div className="col-md-6 ">
						<div className="row justify-content-center">
							<div className="col-10 col-lg-8 cont mb-5 mb-md-0">
								<h3 className="boldhash">3. It's delivered and rate us</h3>
								<h4 className="sectiontxt">
									Collect groceries at your doorstep and tell us about our service
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container-fluid px-0 margwun">
				<div className="text-center pt-5">
					<h4 className="hash">We choose fresh Grocery</h4>
					<h1 className="boldhash">Because we are in it together</h1>
				</div>

				<div className="row align-items-center justify-content-around text-center mt-4 mx-5 pb-5 together">
					<div className="col-12 col-md-3">
						<img className="img-fluid" src={require('./ff.PNG')} />
						<h3>No Minimum Order</h3>
						<h4 className="sectiontxt">Collect groceries at your doorstep and tell us about our service</h4>
					</div>
					<div className="col-12 col-md-3">
						<img className="img-fluid" src={require('./gg.PNG')} />
						<h3>Live Order Tracking</h3>
						<h4 className="sectiontxt">Collect groceries at your doorstep and tell us about our service</h4>
					</div>
					<div className="col-12 col-md-3">
						<img className="img-fluid" src={require('./hh.PNG')} />
						<h3>24 x 7 Delivery</h3>
						<h4 className="sectiontxt">Collect groceries at your doorstep and tell us about our service</h4>
					</div>
				</div>
			</section>

			<div className="row justify-content-around mt-5 ml-5 ml-md-0 text-left end">
				<div className="col-12 col-md-2 mb-5 mb-md-0">
					<h3 className="navbarhead">Fresh Grocery</h3>
					<h4 className="sectiontxt">Help Center </h4>
					<h4 className="sectiontxt">English (International) </h4>

					<Button className="btn d-none d-md-flex btn-success border-0 mt-5 mb-3" href="">
						GOOGLE PLAY
					</Button>
					<Button className="btn d-none d-md-flex btn-danger border-0" href="">
						APP STORE
					</Button>
				</div>
				<div className="col-12 col-md-2 mb-5 mb-md-0">
					<h3>About Us</h3>
					<h4 className="sectiontxt">My Account </h4>
					<h4 className="sectiontxt">Categories </h4>
					<h4 className="sectiontxt">Cities </h4>
					<h4 className="sectiontxt">Become a partner </h4>
					<h4 className="sectiontxt">Blog </h4>
					<h4 className="sectiontxt">Careers </h4>
				</div>
				<div className="col-12 col-md-2">
					<h3>Questions?</h3>
					<h4 className="sectiontxt">Frequently Asked Questions </h4>
					<h4 className="sectiontxt">Contact Us </h4>

					<Button className="btn d-md-none btn-success border-0 mr-3" href="">
						GOOGLE PLAY
					</Button>
					<Button className="btn d-md-none btn-danger border-0" href="">
						APP STORE
					</Button>

					<p className="d-md-none mt-3">SOCIAL MEDIA ICONS</p>
				</div>
			</div>
			<hr />

			<div className="row justify-content-around ml-5 ml-md-0 text-left text-md-center endone">
				<div className="col-12 col-md-4 order-2 order-md-1">
					<p>@ 2020 Appening Infotech Pvt Ltd</p>
				</div>
				<div className="col-12 col-md-4 order-1 order-md-2">
					<div className="row justify-content-around d-block d-md-flex">
						<p>Privacy</p>
						<p>Accessibility</p>
						<p>Terms</p>
					</div>
				</div>
				<div className="col-4 order-3 d-none d-md-inline">
					<p>SOCIAL MEDIA ICONS</p>
				</div>
			</div>
		</div>
	);
};

export default App;
