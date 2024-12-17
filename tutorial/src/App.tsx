import { useState } from "react";
import Profile from "./Components/Profile";
import "./App.css";

// Definition types for user and API response
interface UserProp {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
  };
  login: {
    username: string;
  };
}

interface UserApiResponse {
  results: UserProp[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

function App() {
  const [User, DisplayUser] = useState<UserProp | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const FetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Network error, please check your network.");
      }

      const result: UserApiResponse = await response.json();
      const user = result.results[0];
      {
        loading && <p>Loading...</p>;
      }
      DisplayUser(user);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Random user profiles.</h1>
      <button className="button-12" onClick={FetchUsers}>
        Generate Random User
      </button>

      {error && <p>Error fetching data: {error}</p>}

      {User && (
        <div className="profile-container">
          <div className="profile-column">
            <Profile
              gender={User.gender}
              name={User.name}
              location={User.location}
              email={User.email}
              dob={User.dob}
              phone={User.phone}
              cell={User.cell}
              picture={User.picture}
              login={User.login} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
