import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Navbar, Footer } from '../components';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData || !userData.token) {
          throw new Error('User not found');
        }
        const config = {
          headers: {
            Authorization: `Bearer ${userData.token}`
          }
        };

        const response = await axios.get(`http://localhost:3001/api/user/get-details/${userData.id}`, config);

        if (response.data.status === 'OK') {
          setUser(response.data.data);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);
  const handleEditProfile = () => {
   return;
  };
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <Skeleton height={400} width={400} />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <p>Error: {error}</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <p>User not found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <button onClick={handleEditProfile} className="btn btn-primary">Edit Profile</button>
      <div className="container my-5">
        <h1>Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p></p>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
