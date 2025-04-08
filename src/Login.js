import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css'; // Import your main CSS file
// import './RideDetails.css'; // Import the CSS for RideDetailsPage

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome XYZ!</h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="home-main">
        <Link to="/share-ride" className="home-button-link">
          <button className="home-button share-ride">
            Share a ride <span role="img" aria-label="car with people">🚗👥</span>
          </button>
        </Link>
        <button className="home-button list-stay">
          List a stay <span role="img" aria-label="house">🏠</span>
        </button>
        <button className="home-button search-stay">
          Search a stay <span role="img" aria-label="magnifying glass over house">🔎🏠</span>
        </button>
      </main>
    </div>
  );
}

function RideCreatedSuccessPage() {
  const navigate = useNavigate();

  const handlePostIt = () => {
    navigate('/home');
  };

  return (
    <div className="ride-created-container">
      <header className="ride-created-header">
        <h1>Ride created successfully</h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="ride-created-main">
        <div className="ride-details">
          <h2>Ride details:</h2>
          <p>Leaving from: - XYZ</p>
          <p>Going to: - XYZ</p>
          <p>more ride details...</p>
        </div>
        <button className="post-it-button" onClick={handlePostIt}>
          POST IT!
        </button>
      </main>
    </div>
  );
}

function CreateRidePage() {
  const [passengerCount, setPassengerCount] = useState(1);
  const navigate = useNavigate();

  const incrementCount = () => {
    setPassengerCount(passengerCount + 1);
  };

  const decrementCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(passengerCount - 1);
    }
  };

  const handleCreateRide = () => {
    navigate('/ride-created');
  };

  return (
    <div className="create-ride-container">
      <header className="create-ride-header">
        <h1>Create a ride <span role="img" aria-label="car with people">🚗👥</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="create-ride-main">
        <div className="input-group">
          <label htmlFor="leaving-from">Leaving from</label>
          <input type="text" id="leaving-from" />
        </div>
        <div className="input-group">
          <label htmlFor="going-to">Going to</label>
          <input type="text" id="going-to" />
        </div>
        <div className="input-group">
          <label htmlFor="select-date">Select Date</label>
          <input type="date" id="select-date" />
        </div>
        <div className="input-group">
          <label htmlFor="no-of-person">No. of Person</label>
          <div className="passenger-counter">
            <button type="button" onClick={decrementCount}>
              <span role="img" aria-label="minus">-</span>
            </button>
            <span className="passenger-count">{passengerCount}</span>
            <button type="button" onClick={incrementCount}>
              <span role="img" aria-label="plus">+</span>
            </button>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="approx-fare">Approx. Fare amount</label>
          <input type="text" id="approx-fare" placeholder="Enter amount" />
        </div>
        <button type="submit" className="create-button" onClick={handleCreateRide}>
          Create
        </button>
      </main>
    </div>
  );
}

function BookRidePage() {
  const { rideId } = useParams();
  // In a real application, fetch ride details based on rideId
  const bookedRide = {
    id: rideId,
    driver: 'Rohan Sharma',
    from: 'exact from location',
    to: 'to exact location',
    fare: 'Rs. 200',
    car: 'Hyundai i20',
    pickupTime: '10:00 AM', // Example data
  };
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic (e.g., API call)
    alert(`Booking confirmed for ride ID: ${rideId}`);
    navigate('/booking-confirmation'); // Navigate to a confirmation page
  };

  return (
    <div className="book-ride-container">
      <header className="book-ride-header">
        <h1>Confirm your booking <span role="img" aria-label="check mark">✔️</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="book-ride-main">
        <div className="booking-details">
          <h2>Booking Details</h2>
          <p>Ride ID: <span className="info">{bookedRide.id}</span></p>
          <p>Driver: <span className="info">{bookedRide.driver}</span></p>
          <p>From: <span className="info">{bookedRide.from}</span></p>
          <p>To: <span className="info">{bookedRide.to}</span></p>
          <p>Fare: <span className="info">{bookedRide.fare}</span></p>
          <p>Car: <span className="info">{bookedRide.car}</span></p>
          <p>Pickup Time: <span className="info">{bookedRide.pickupTime}</span></p>
          {/* Add more details as needed */}
        </div>

        <div className="payment-options">
          <h2>Payment Options</h2>
          {/* Implement payment gateway integration or options here */}
          <p>Payment will be processed upon confirmation.</p>
          {/* Example payment buttons */}
          <button className="payment-button">Pay with UPI</button>
          <button className="payment-button">Pay with Card</button>
          <button className="payment-button">Pay with Wallet</button>
        </div>

        <button className="confirm-button" onClick={handleConfirmBooking}>
          Confirm Booking <span role="img" aria-label="arrow right">➡️</span>
        </button>
        <Link to={`/ride-detail/${bookedRide.id}`} className="back-link">
          Back to Ride Details
        </Link>
      </main>
    </div>
  );
}

function BookingConfirmationPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className="booking-confirmation-container">
      <header className="booking-confirmation-header">
        <h1>Booking Confirmed! <span role="img" aria-label="party popper">🎉</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="booking-confirmation-main">
        <p className="confirmation-message">
          Your ride has been successfully booked. You will receive a notification with driver details shortly.
        </p>
        {/* Display booking details here if needed */}
        <button className="go-home-button" onClick={handleGoHome}>
          Go to Home
        </button>
      </main>
    </div>
  );
}

function RideDetailPage() {
  const { rideId } = useParams();
  // In a real application, fetch detailed ride information based on rideId
  const rideDetails = {
    id: rideId,
    driver: 'Rohan Sharma',
    age: 21,
    experience: 'Professional',
    memberSince: 2021,
    bio: 'Passionate about safe and comfortable rides. Enjoy chatting but also respect your need for quiet. Non-smoker, music preference: soft jazz.',
    pets: 'Allowed (in carrier)',
    cancellationPolicy: 'Full refund if cancelled 24 hours before departure.',
    from: 'Exact Pickup Location, Landmark A',
    to: 'Exact Drop-off Location, Near Landmark B',
    date: '2025-04-15',
    time: '10:30 AM',
    availableSeats: 2,
    fare: 'Rs. 200',
    car: 'Hyundai i20, White Color',
    rating: 4.8, // Example rating
    reviews: [
      { user: 'Priya', comment: 'Great ride! Smooth and on time.', rating: 5 },
      { user: 'Amit', comment: 'Comfortable car and friendly driver.', rating: 4 },
    ],
  };
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book-ride/${rideId}`);
  };

  return (
    <div className="ride-detail-container">
      <header className="ride-detail-header">
        <h1>Ride Details <span role="img" aria-label="magnifying glass">🔎</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="ride-detail-main">
        <section className="driver-info-section">
          <h2>Driver Information</h2>
          <div className="driver-profile">
            <span className="profile-icon-large">👤</span>
            <p className="driver-name">{rideDetails.driver}</p>
            <p>Age: {rideDetails.age}</p>
            <p>Experience: {rideDetails.experience}</p>
            <p>Member Since: {rideDetails.memberSince}</p>
            <p>Rating: {rideDetails.rating} <span role="img" aria-label="star">⭐</span> ({rideDetails.reviews.length} reviews)</p>
          </div>
          <div className="driver-bio">
            <h3>Bio</h3>
            <p>{rideDetails.bio}</p>
          </div>
        </section>

        <section className="ride-info-section">
          <h2>Ride Information</h2>
          <p>From: <span className="info">{rideDetails.from}</span></p>
          <p>To: <span className="info">{rideDetails.to}</span></p>
          <p>Date: <span className="info">{rideDetails.date}</span></p>
          <p>Time: <span className="info">{rideDetails.time}</span></p>
          <p>Available Seats: <span className="info">{rideDetails.availableSeats}</span></p>
          <p>Fare: <span className="info">{rideDetails.fare}</span></p>
          <p>Car: <span className="info">{rideDetails.car}</span></p>
          <p>Pets: <span className="info">{rideDetails.pets}</span></p>
          <p>Cancellation Policy: <span className="info">{rideDetails.cancellationPolicy}</span></p>
        </section>

        <section className="reviews-section">
          <h2>Reviews</h2>
          {rideDetails.reviews.length > 0 ? (
            <ul>
              {rideDetails.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.user}:</strong> {review.comment} ({review.rating} <span role="img" aria-label="star">⭐</span>)
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </section>

        <button className="book-now-button" onClick={handleBookNow}>
          Book Now <span role="img" aria-label="arrow right">➡️</span>
        </button>
        <Link to="/select-ride" className="back-link">
          Back to Select Ride
        </Link>
      </main>
    </div>
  );
}

function SelectRidePage() {
  const navigate = useNavigate();
  // Dummy ride data (replace with your actual data fetching)
  const rides = [
    { id: 1, driver: 'Rohan Sharma', from: 'exact from location', to: 'to exact location', fare: 'Rs. 200', car: 'Hyundai i20' },
    { id: 2, driver: 'Rohit Oturkar', from: 'another from location', to: 'another to location', fare: 'Rs. 250', car: 'Maruti Swift' },
    // ... more rides
  ];

  const handleViewDetails = (rideId) => {
    navigate(`/ride-detail/${rideId}`);
  };

  return (
    <div className="select-ride-container">
      <header className="select-ride-header">
        <h1>Select your ride <span role="img" aria-label="car with people">🚗👥</span></h1>
        <div className="filter-section">
          <span>Filter</span>
          <select>
            <option>Price</option>
            <option>Rating</option>
            {/* Add more filter options */}
          </select>
        </div>
        <div className="profile-icon">👤</div>
      </header>
      <main className="select-ride-main">
        {rides.map(ride => (
          <div key={ride.id} className="ride-card">
            <div className="driver-info">
              <span className="profile-icon-small">👤</span>
              <p className="driver-name">{ride.driver}</p>
            </div>
            <p>From: <span className="location">{ride.from}</span></p>
            <p>Fare: <span className="fare">{ride.fare}</span></p>
            <p>To: <span className="location">{ride.to}</span></p>
            <p><span role="img" aria-label="car">🚗</span> {ride.car}</p>
            <Link to={`/ride-detail/${ride.id}`} className="view-details-button">
              View Details
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

function SearchRidePage() {
  const navigate = useNavigate();
  const [passengerCount, setPassengerCount] = useState(1);

  const incrementCount = () => {
    setPassengerCount(passengerCount + 1);
  };

  const decrementCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(passengerCount - 1);
    }
  };

  const handleSearchRide = () => {
    navigate('/select-ride');
  };

  return (
    <div className="search-ride-container">
      <header className="search-ride-header">
        <h1>Search a ride <span role="img" aria-label="car with people">🚗👥</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="search-ride-main">
        <div className="input-group">
          <label htmlFor="leaving-from">Leaving from</label>
          <input type="text" id="leaving-from" />
        </div>
        <div className="input-group">
          <label htmlFor="going-to">Going to</label>
          <input type="text" id="going-to" />
        </div>
        <div className="input-group">
          <label htmlFor="select-date">Select Date</label>
          <input type="date" id="select-date" />
        </div>
        <div className="input-group">
          <label htmlFor="no-of-person">No. of Person</label>
          <div className="passenger-counter">
            <button type="button" onClick={decrementCount}>
              <span role="img" aria-label="minus">-</span>
            </button>
            <span className="passenger-count">{passengerCount}</span>
            <button type="button" onClick={incrementCount}>
              <span role="img" aria-label="plus">+</span>
            </button>
          </div>
        </div>
        <button type="submit" className="search-button" onClick={handleSearchRide}>
          Search
        </button>
      </main>
    </div>
  );
}

function ShareRidePage() {
  return (
    <div className="share-ride-container">
      <header className="share-ride-header">
        <h1>Share a ride <span role="img" aria-label="car with people">🚗👥</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="share-ride-main">
        <Link to="/create-ride" className="share-ride-button-link">
          <button className="share-ride-button create-ride">
            Create a ride
          </button>
        </Link>
        <Link to="/search-ride" className="share-ride-button-link">
          <button className="share-ride-button search-ride">
            Search a ride
          </button>
        </Link>
      </main>
    </div>
  );
}

function ProfilePage() {
  const navigate = useNavigate();

  const handleProfileSetup = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="logo-area">
        <h1>Connect X</h1>
      </div>
      <div className="profile-setup-form">
        <h2>Setup your Profile</h2>
        <p>Hello XYZ</p>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact number</label>
          <input type="tel" id="contact" name="contact" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <p className="password-note">
          <small>NOTE: Password must contain alphanumeric characters.</small>
        </p>
        <button type="submit" className="signup-button" onClick={handleProfileSetup}>
          Signup
        </button>
      </div>
    </div>
  );
}

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className="logo-area">
        <h1>Connect X</h1>
      </div>
      <div className="signup-form">
        <h2>Signup</h2>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact number</label>
          <input type="tel" id="contact" name="contact" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <p className="password-note">
          <small>NOTE: Password must contain alphanumeric characters.</small>
        </p>
        <button type="submit" className="signup-button" onClick={handleSignup}>
          Signup
        </button>
        <p className="login-link">
          Already have an account? <Link to="/">Log In!</Link>
        </p>
      </div>
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="logo-area">
        <h1>Connect X</h1>
      </div>
      <div className="login-form">
        <h2>Login!</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit" className="login-button" onClick={handleLogin}>
          Log In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up!</Link>
        </p>
      </div>
    </div>
  );
}

function ListStayPage() {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState('');
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');
  const [deposit, setDeposit] = useState('');
  const [personCount, setPersonCount] = useState('');
  const [petsAllowed, setPetsAllowed] = useState('');
  const [genderPreference, setGenderPreference] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleCreateListing = () => {
    // In a real application, you would send this data to your backend
    console.log({
      roomType,
      location,
      rent,
      deposit,
      personCount,
      petsAllowed,
      genderPreference,
      additionalDetails,
    });
    alert('Listing created!'); // Just for demonstration
    navigate('/home'); // Redirect to home after (simulated) creation
  };

  return (
    <div className="list-stay-container">
      <header className="list-stay-header">
        <h1>List a stay <span role="img" aria-label="house">🏠</span></h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="list-stay-main">
        <h2>Provide your details: -</h2>
        <div className="input-group">
          <label htmlFor="room-type">Room Type:</label>
          <input
            type="text"
            id="room-type"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            placeholder="e.g., 2 BHK"
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Baner"
          />
        </div>
        <div className="input-group">
          <label htmlFor="rent">Rent:</label>
          <input
            type="number"
            id="rent"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            placeholder="e.g., 21,000/-"
          />
        </div>
        <div className="input-group">
          <label htmlFor="deposit">Deposit (if any):</label>
          <input
            type="text"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            placeholder="e.g., NIL"
          />
        </div>
        <div className="input-group">
          <label htmlFor="person-count">No. of person rm:</label>
          <input
            type="number"
            id="person-count"
            value={personCount}
            onChange={(e) => setPersonCount(e.target.value)}
            placeholder="e.g., 4"
          />
        </div>
        <div className="input-group">
          <label htmlFor="pets">Pets:</label>
          <select
            id="pets"
            value={petsAllowed}
            onChange={(e) => setPetsAllowed(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Allowed">Allowed</option>
            <option value="Not Allowed">Not Allowed</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="gender-preference">Gender preference:</label>
          <select
            id="gender-preference"
            value={genderPreference}
            onChange={(e) => setGenderPreference(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Male/Female">Male/Female</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Any">Any</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="additional-details">Few more details:</label>
          <textarea
            id="additional-details"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            placeholder="few more info"
          />
        </div>
        <button className="create-button" onClick={handleCreateListing}>
          Create
        </button>
      </main>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/share-ride" element={<ShareRidePage />} />
        <Route path="/create-ride" element={<CreateRidePage />} />
        <Route path="/ride-created" element={<RideCreatedSuccessPage />} />
        <Route path="/search-ride" element={<SearchRidePage />} />
        <Route path="/select-ride" element={<SelectRidePage />} />
        <Route path="/ride-detail/:rideId" element={<RideDetailPage />} />
        <Route path="/book-ride/:rideId" element={<BookRidePage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/list-stay" element={<ListStayPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;