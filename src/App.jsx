import { useState } from "react";
import { useGuests } from "./hooks/useGuests";

function App() {
  const { guests, loading, error } = useGuests();
  const [selectedGuest, setSelectedGuest] = useState(null);

  const handleSelect = (guest) => {
    setSelectedGuest(guest);
  };

  const handleBack = () => {
    setSelectedGuest(null);
  };

  if (loading) return <p>Loading Guests...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">Guest Directory</h1>

      {!selectedGuest ? (
        <ul className="guest-list">
          {guests.map((guest) => (
            <li
              key={guest.id}
              className="guest-card"
              onClick={() => handleSelect(guest)}
            >
              <strong>{guest.name}</strong> - {guest.email}
            </li>
          ))}
        </ul>
      ) : (
        <div className="guest-details">
          <h2>{selectedGuest.name}</h2>
          <p>
            <strong>Email:</strong> {selectedGuest.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedGuest.phone}
          </p>
          <p>
            <strong>Job:</strong> {selectedGuest.job}
          </p>
          <p>
            <strong>Bio:</strong> {selectedGuest.bio}
          </p>

          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
