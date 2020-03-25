import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
	        </button>
				<p className="navbar-brand"><span className="glyphicon glyphicon-picture"></span> IMGS</p>
			</div>
			<div class="collapse navbar-collapse" id="bs-nav-demo">
				<ul class="nav navbar-nav">
					<li className="nav-link"><Link to="/">Home</Link></li>
					<li className="nav-link"><Link to="/articles-list">Articles</Link></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li className="nav-link"><Link to="/staff">Staff</Link></li>
					<li className="nav-link"><Link to="/myinfo">Login</Link></li>
				</ul>
			</div>
		</div>
	</nav>

);

export default NavBar;