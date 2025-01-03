"use client";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@mui/material";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      window.location.pathname = "/";
    }
  }, [session]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4">
      <p>Login to access your account</p>
      <Button
        sx={{
          bgcolor: "white",
          color: "black",
          fontWeight: 700,
          display: "flex",
          gap: 2,
        }}
        onClick={() => signIn()}
      >
        Login with OAuth
        <img
          src="https://dyci7co52mbcc.cloudfront.net/public/google-color_30413.png"
          alt="google"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};

export default LoginPage;
