import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./StarRating";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={3}
    /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
