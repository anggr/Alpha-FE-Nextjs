import { useRouter } from "next/router";
import React from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    let ignore = true;
    React.useEffect(() => {
      if (ignore) validate();
      return () => {
        ignore = false;
      };
    }, []);
    const validate = async () => {
      const token = await localStorage.getItem("_q");
      if (!token) {
        router.push("/auth/login");
      }
    };
    return <Component />; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default withAuth;