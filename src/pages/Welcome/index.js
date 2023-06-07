import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import ImgeProductWrapper from "../../components/DashboardTemplate/ImgeProduct/ImageProductWrapper";

export default function Welcome() {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="container py-3">
      {isLogin ? (
        <Link to={`dashboard/home`} className="btn btn-primary me-3">
          Dashboard
        </Link>
      ) : (
        <Link to={`/login`} className="btn btn-primary me-3">
          Sign in
        </Link>
      )}

      <h1 className="text-center display-1 mt-5">Welcome to Shopily</h1>
      <ImgeProductWrapper className="mt-5" src="https://frankfurt.apollo.olxcdn.com/v1/files/uds5nio8oct82-UZ/image;s=1080x972" />
    </div>
  );
}
