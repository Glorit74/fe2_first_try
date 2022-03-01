import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

function Subscription({ isSubscribe, setIsSubscribe }) {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(true);

  const post = async () => {
    try {
      const response = await axios.post(
        'https://seriescharacters.com/api/newsletter',
        {
          email: email,
        }
      );
      setEmail('');
      setTimeout(() => {
        setIsSubscribe(false);
      }, 5 * 1000);
      console.log(response);
    } catch (error) {
      alert(Error);
    }
  };

  const checkValue = (em) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (em.match(mailFormat)) {
      setErrorMsg(false);
      return true;
    } else {
      setErrorMsg(true);
      return false;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSubscribe(true);
    }, 10 * 1000);
  }, []);

  return (
    <>
      {isSubscribe && (
        <div>
          <h1>Subscribe to our newsletter</h1>
          {isSubscribe && (
            <div className="subscribe_container">
              <TextField
                error={errorMsg}
                type="email"
                placeholder="name@mail.com"
                value={email.replace(/[>#&{}<;:?'"+!%/=()]/, '')}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  checkValue(e.target.value);
                }}
              />
              <button
                disabled={errorMsg}
                className={errorMsg ? 'button disabled' : 'button'}
                onClick={post}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Subscription;
