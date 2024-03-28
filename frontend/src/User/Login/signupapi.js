import axios from "axios";

const signupapi = async ({ user, pass, pass1, mail, setIsSliding, setsignup, setsignup1 }) => {
  const data = {
    username: user,
    email: mail,
    password: pass,
  };

  if (user && pass && pass1 && mail) {
    if (pass === pass1) {
      try {
        const response = await axios.post('http://localhost:5100/register', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert('Successfully registered... Please Login in...');
          setIsSliding(false);
        } else {
          setsignup(true);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      setsignup(true);
    }
    setsignup1(false);
  } else {
    setsignup1(true);
  }
};

export default signupapi;
