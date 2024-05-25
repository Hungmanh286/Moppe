// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import { AuthContext } from "../context/AuthContext";
// import axios from 'axios';



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:3001/api/user/sign-in', {
//         email,
//         password
//       });
//       if (response.data.message === "SUCCESS") {
//         console.log('Login successful:', response.data);
//         login({ email }); // Assuming you use email for login
//         alert('Login successful!');
//         navigate('/');
//       } else {
//         throw new Error(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError(error.response?.data?.message || 'An error occurred during login. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="my-3">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <div className="my-3">
//                 <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
//               </div>
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={loading}>
//                   {loading ? 'Logging in...' : 'Login'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/api/user/sign-in', {
        email,
        password
      });

      if (response.data.message === "SUCCESS") {
        console.log('Login successful:', response.data);

        const userData = {
          email,
          token: response.data.access_token,
          id : response.data.id
        };
        localStorage.setItem('user', JSON.stringify(userData));

        login({ email }); // Cập nhật trạng thái đăng nhập
        alert('Login successful!');
        navigate('/'); // Điều hướng về trang chủ
      } else {
        throw new Error(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
