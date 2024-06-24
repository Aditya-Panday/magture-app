import React from "react";

export default function NotFound() {
  return (
    <div
      className="container-fluid "
      style={{
        display: "grid",
        height: "100vh",
        justifyContent: "center",
        placeItems: "center",
      }}
    >
      <div>
        <h1>404 Page Not Found</h1>
        <p className="text-center">
          The page you are looking for does not exist
        </p>
      </div>
    </div>
  );
}
