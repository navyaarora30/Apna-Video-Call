// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const withAuth = (WrappedComponent) => {
//   const AuthComponent = (props) => {
//     const router = useNavigate();

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           router("/auth", { replace: true });
//         }
//       }, 50); // wait for login to finish

//       return () => clearTimeout(timer);
//     }, [router]);

//     return <WrappedComponent {...props} />;
//   };

//   return AuthComponent;
// };

// export default withAuth;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("withAuth check token:", token);

      if (!token) {
        console.log("Redirecting to /auth because token missing");
        router("/auth", { replace: true });
      } else {
        console.log("Token present, staying on page");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
