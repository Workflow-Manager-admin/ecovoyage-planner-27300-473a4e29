import React, { useState } from 'react';
import './App.css';

/**
 * EcoVoyage Main Container
 * Implements homepage with navigation, hero, planner search, highlights, guides, community, carbon calculator, and profile/CTA.
 */
// PUBLIC_INTERFACE
function App() {
  // (For demonstration, search and state logic are minimal.)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Handles the eco-planner destination search.
   * Accepts any destination and gives special feedback for Indian destinations.
   */
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();

    if (!trimmed) {
      setSearchResult({ error: "Please enter a destination to search." });
      return;
    }

    // Check if destination is in India (basic: contains "<city>, India" or is an Indian state/city)
    // A more robust version could use a geolocation API, but for now, cover basics.
    const indianStatesAndCities = [
      "delhi", "mumbai", "kolkata", "chennai", "bengaluru", "bangalore",
      "hyderabad", "ahmedabad", "pune", "jaipur", "lucknow", "kanpur", "nagpur",
      "indore", "thane", "bhopal", "visakhapatnam", "pimpri", "patna", "vadodara",
      "ghaziabad", "ludhiana", "agra", "nashik", "faridabad", "meerut", "rajkot",
      "varanasi", "srinagar", "aurangabad", "dhanbad", "amritsar", "navi mumbai",
      "allahabad", "ranchi", "howrah", "coimbatore", "jabalpur", "gwalior", "vijayawada",
      "jodhpur", "madurai", "raipur", "kota", "guwahati", "chandigarh", "solapur",
      "hubli", "mysore", "tiruchirappalli", "bareilly", "aligarh", "tiruppur", "moradabad",
      "gurgaon", "jalandhar", "bhubaneswar", "salem", "warangal", "ghantali", "thane",
      "kerala", "tamil nadu", "maharashtra", "uttar pradesh", "punjab", "rajastan", "gujarat", 
      "karnataka", "madhya pradesh", "west bengal", "andhra pradesh", "odisha", "assam", "himachal pradesh",
      "uttarakhand", "chhattisgarh", "goa", "sikkim", "tripura", "manipur", "meghalaya", "mizoram", "nagaland"
    ];
    const lower = trimmed.toLowerCase();
    const isIndian = lower.includes('india') ||
      indianStatesAndCities.some(name => lower.includes(name));

    if (isIndian) {
      setSearchResult({
        message: `Great! We support many eco-friendly destinations in India. Exploring: "${searchTerm}".`
      });
    } else {
      setSearchResult({
        message: `Searching for: "${searchTerm}" (Global eco-destinations coming soon!)`
      });
    }
    
    // Here you could add backend lookup, API calls, etc.
  };

  return (
    <div className="app" style={{ background: "#f9f9f9", color: "#232A26" }}>
      {/* Top Navigation */}
      <nav className="navbar" style={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px 0 rgba(46,139,87,0.05)"
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="logo" style={{ color: "#2E8B57", fontWeight: 700 }}>
            <span className="logo-symbol" style={{fontWeight:800, fontSize:"1.6rem", color: "#3AB795"}}>&#127757;</span>
            EcoVoyage Planner
          </div>
          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <a href="#planner" style={navLinkS}>Planner</a>
            <a href="#guides" style={navLinkS}>Guides</a>
            <a href="#community" style={navLinkS}>Community</a>
            <a href="#profile" style={navLinkS}>Profile</a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: 90 }}>
        {/* HERO + Eco Planner Search */}
        <section className="hero" style={{
          background: "linear-gradient(135deg,#E7F9F0 0%,#F4FFF7 100%)",
          borderRadius: "0 0 36px 36px",
          boxShadow: "0 12px 32px -10px #3AB79510",
          paddingTop: 110, paddingBottom: 55, marginBottom: 22
        }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className="subtitle" style={{ color: "#2E8B57" }}>
              Sustainable Travel Starts Here
            </h2>
            <h1 className="title" style={{ color: "#2E8B57", marginBottom: 8 }}>
              Plan Your Eco-Friendly Adventure
            </h1>
            <div className="description" style={{ color: "#5B7663" }}>
              Explore green destinations, calculate your footprint, and discover tips to travel responsibly.
            </div>
            {/* Planner Search */}
            <form onSubmit={handleSearch} style={{
              display: "flex", margin: "0 auto", maxWidth: 400, marginTop: 28, marginBottom: 10,
              background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #2E8B5720",
              padding: 5, border: "1.5px solid #3AB795"
            }}>
              <input
                type="text"
                value={searchTerm}
                placeholder="Where do you want to go?"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "12px",
                  borderRadius: "8px 0 0 8px",
                  fontSize: "1.09rem",
                  background: "transparent",
                  color: "#1B3B2C"
                }}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-large"
                type="submit"
                style={{
                  background: "#2E8B57",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "0 24px",
                  borderRadius: "0 8px 8px 0",
                  border: "none",
                  fontSize: "1.09rem",
                  cursor: "pointer"
                }}>
                Plan!
              </button>
            </form>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="planner" style={{ background: "#fff", padding: "38px 0", borderRadius: "18px", margin: "0 auto 32px", boxShadow: "0 4px 32px -14px #2E8B5720", maxWidth: 910 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#3AB795", fontSize: "1.5rem", fontWeight: 600, marginBottom: 8 }}>
              Top Eco Destinations
            </h3>
            <p style={{ color: "#537566", marginBottom: 28, fontSize: "1.08rem" }}>
              Highlighting nature-loving, sustainable travel spots around the globe.
            </p>
            <div style={{
              display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap"
            }}>
              {ecoDestinations.map(d => (
                <div key={d.title} style={{
                  background: "#E7F9F0",
                  borderRadius: "14px",
                  boxShadow: "0 1px 8px #3AB79522",
                  minWidth: 150,
                  maxWidth: 210,
                  flex: 1,
                  padding: "18px 12px 14px 12px",
                  margin: "8px 2px",
                  textAlign: "center",
                  border: `2.5px solid ${d.accent || "#3AB795"}`
                }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 7 }}>{d.icon}</div>
                  <div style={{ color: "#2E8B57", fontWeight: 600 }}>{d.title}</div>
                  <div style={{ color: "#5B7663", fontSize: "0.97rem", marginTop: 5 }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Guides & Tips */}
        <section id="guides" style={{ background: "#F4FFF7", padding: "34px 0", borderRadius: "12px", margin: "0 auto 32px", maxWidth: 910 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#F4A259", fontWeight: 700, fontSize: "1.36rem", marginBottom: 12 }}>
              Sustainability Tips & Guides
            </h3>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"
            }}>
              {sustainabilityTips.map(t => (
                <div key={t.title} style={{
                  flex: "1 1 220px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 1px 8px #3AB79519",
                  minWidth: 180,
                  maxWidth: 255,
                  padding: "16px 12px",
                  textAlign: "left",
                }}>
                  <div style={{ fontWeight: 600, color: "#2E8B57", marginBottom: 3 }}>{t.title}</div>
                  <div style={{ color: "#232A26", fontSize: "1rem" }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Support & Local Experiences */}
        <section id="community" style={{ background: "#fff", padding: "36px 0", borderRadius: "12px", margin: "0 auto 32px", maxWidth: 910, boxShadow: "0 4px 32px -14px #2E8B5720" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#3AB795", fontWeight: 600, fontSize: "1.22rem", marginBottom: 14 }}>
              Support Local Communities
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
              {localExperiences.map(x => (
                <div key={x.title} style={{
                  flex: "1 1 210px",
                  background: "#F4FFF7",
                  borderRadius: "9px",
                  minWidth: 170,
                  maxWidth: 280,
                  padding: "15px 12px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px #2E8B5759"
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: 4 }}>{x.icon}</div>
                  <div style={{ fontWeight: 600, color: "#2E8B57" }}>{x.title}</div>
                  <div style={{ color: "#4D7A66", fontSize: "0.98rem", marginTop: 2 }}>{x.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carbon Footprint Calculator preview */}
        <section style={{
          background: "#3AB795",
          color: "#fff",
          borderRadius: "12px",
          padding: "34px 0",
          margin: "0 auto 32px",
          maxWidth: 910,
          textAlign: "center",
          boxShadow: "0 2px 12px #00875e32"
        }}>
          <div className="container">
            <div style={{ fontWeight: 600, fontSize: "1.14rem", marginBottom: 7 }}>Estimate Your Carbon Footprint</div>
            <div style={{ marginBottom: 12 }}>
              Calculate the impact for your planned trips & offset your emissions.
            </div>
            <button className="btn btn-large"
              style={{
                background: "#2E8B57",
                color: "#FFF",
                fontWeight: 600,
                border: "none",
                borderRadius: "7px"
              }}>
              Try Calculator
            </button>
          </div>
        </section>

        {/* Profile / Progress Tracking */}
        <section id="profile" style={{
          background: "#F4FFF7",
          borderRadius: "12px",
          padding: "28px 0 22px 0",
          margin: "0 auto 35px",
          maxWidth: 910
        }}>
          <div className="container" style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <div style={{
              flex: "1 1 200px",
              textAlign: "center",
              background: "#fff",
              borderRadius: 9,
              boxShadow: "0 1px 8px #3AB79520",
              padding: "17px 7px 15px 7px",
              minWidth: 180,
              maxWidth: 250
            }}>
              <div style={{ fontSize: "2.4rem", marginBottom: 5 }}>👤</div>
              <div style={{ fontWeight: 600, color: "#2E8B57" }}>Your Profile</div>
              <div style={{ color: "#5B7663", fontSize: "0.98rem", margin: "7px 0" }}>Create or update your traveler profile and track your eco-journey!</div>
              <button className="btn" style={{
                background: "#F4A259",
                color: "#fff",
                fontWeight: 500,
                border: "none",
                borderRadius: "7px"
              }}>
                Manage Profile
              </button>
            </div>
            <div style={{
              flex: "1 1 200px",
              textAlign: "center"
            }}>
              <div style={{
                background: "#E7F9F0",
                borderRadius: "50%",
                width: 72,
                height: 72,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 13px"
              }}>
                <span style={{ fontSize: "1.7rem", color: "#F4A259" }}>🌱</span>
              </div>
              <div style={{ fontWeight: 700, color: "#3AB795", fontSize: "1.2rem" }}>Sustainability Score</div>
              <div style={{ color: "#294B33", marginTop: 4, fontWeight: 500 }}>
                <span style={{ fontSize: "2rem", color: "#2E8B57" }}>72</span>/100
              </div>
              <div style={{ color: "#7F8C8D", fontSize: "0.93rem", marginTop: 7 }}>
                Based on your trip choices & saved guides.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer style={{
        background: "#232A26",
        color: "#fff",
        textAlign: "center",
        padding: "14px 0",
        borderTop: "1px solid #E7F9F0"
      }}>
        <div style={{ fontWeight: 500 }}>
          EcoVoyage Planner &copy; {new Date().getFullYear()} &mdash; Travel Green 🌿
        </div>
      </footer>
    </div>
  );
}

// Theme and navigation link style helpers
const navLinkS = {
  color: "#2E8B57",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1.05rem",
  padding: "6px 14px",
  borderRadius: "6px",
  transition: "background 0.15s",
};
  
const ecoDestinations = [
  { title: "Costa Rica", icon: "🏞️", desc: "Rainforests, wildlife, eco-lodges.", accent: "#2E8B57" },
  { title: "Slovenia", icon: "🛶", desc: "Green capital, trails & lakes.", accent: "#3AB795" },
  { title: "New Zealand", icon: "⛰️", desc: "Nature, hiking, Maori culture.", accent: "#F4A259" },
  { title: "Bhutan", icon: "🧘‍♂️", desc: "Low-impact tourism, happiness focus.", accent: "#2E8B57" },
];

const sustainabilityTips = [
  { title: "Go Local", desc: "Choose local guides & businesses for reduced carbon and richer experiences." },
  { title: "Low Impact Transport", desc: "Opt for trains, cycling, or walking when available." },
  { title: "Eco Lodging", desc: "Stay at hotels with sustainability certifications and responsible practices." },
  { title: "Pack Light", desc: "Reduce weight to minimize your travel footprint (and save fees!)." },
];

const localExperiences = [
  { title: "Fair Trade Coffee Tour", icon: "☕", desc: "Visit farms supporting sustainable farm-to-cup journeys." },
  { title: "Community Homestay", icon: "🏠", desc: "Experience local culture & support families directly." },
  { title: "Conservation Volunteering", icon: "🦋", desc: "Join local conservation projects and give back." },
  { title: "Cycling the City", icon: "🚲", desc: "Guided eco-tours on two wheels." },
];

export default App;