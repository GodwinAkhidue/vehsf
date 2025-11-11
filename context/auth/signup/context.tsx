"use client";
import { createContext, useContext, useState } from "react";
import data_default from "./data_default";
import axios from "axios";
import { server_url } from "@/constants/server_url";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignupContext = createContext<any>(undefined);

export function SignupContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<any>(data_default);
  const [profilePicture, setProfilePicture] = useState<any>();
  const [resumeCv, setResumeCv] = useState<any>();
  const router = useRouter();

  const volunteer_signup = async (setLoading: any) => {
    setLoading(true);

    let profile_picture: any = {};

    let resume_cv: any = {};

    try {
      if (profilePicture?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          profilePicture.formData
        );
        if (res.data.success === true) {
          profile_picture = res.data.file;
        }
      }

      if (resumeCv?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          resumeCv.formData
        );
        if (res.data.success === true) {
          resume_cv = res.data.file;
        }
      }

      const api = axios.create({
        baseURL: server_url,
        withCredentials: true,
      });

      const res = await api.post(`/api/auth/signup/volunteer`, {
        data,
        profile_picture,
        resume_cv,
      });

      if (res.data.success === false) {
        toast.warn(res.data.message);
      } else if (res.data.success === true) {
        toast.success("Registration Successful");
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Could not connect to server");
    }

    setLoading(false);
  };

  const donor_signup = async (setLoading: any) => {
    setLoading(true);

    let profile_picture: any = {};

    let resume_cv: any = {};

    try {
      if (profilePicture?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          profilePicture.formData
        );
        if (res.data.success === true) {
          profile_picture = res.data.file;
        }
      }

      if (resumeCv?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          resumeCv.formData
        );
        if (res.data.success === true) {
          resume_cv = res.data.file;
        }
      }

      const api = axios.create({
        baseURL: server_url,
        withCredentials: true,
      });

      const res = await api.post(`/api/auth/signup/donor`, {
        data,
        profile_picture,
        resume_cv,
      });

      if (res.data.success === false) {
        toast.warn(res.data.message);
      } else if (res.data.success === true) {
        toast.success("Registration Successful");
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Could not connect to server");
    }

    setLoading(false);
  };

  const ngo_signup = async (setLoading: any) => {
    setLoading(true);

    let profile_picture: any = {};

    let resume_cv: any = {};

    try {
      if (profilePicture?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          profilePicture.formData
        );
        if (res.data.success === true) {
          profile_picture = res.data.file;
        }
      }

      if (resumeCv?.formData) {
        const res = await axios.post(
          `${server_url}/api/cloudinary/upload/form-data`,
          resumeCv.formData
        );
        if (res.data.success === true) {
          resume_cv = res.data.file;
        }
      }

      const api = axios.create({
        baseURL: server_url,
        withCredentials: true,
      });

      const res = await api.post(`/api/auth/signup/ngo/initialize`, {
        data,
        profile_picture,
        resume_cv,
      });

      if (res.data.success === false) {
        toast.warn(res.data.message);
      } else if (res.data.success === true) {
        router.push(res.data.url);
      }
    } catch (err) {
      toast.error("Could not connect to server");
    }

    setLoading(false);
  };

  const ngo_signup_verify_transaction = async (
    setLoading: any,
    reference: any
  ) => {
    setLoading(true);

    try {
      const api = axios.create({
        baseURL: server_url,
        withCredentials: true,
      });

      const res = await api.post(`/api/auth/signup/ngo/complete`, {
        reference
      });

      if (res.data.success === false) {
        toast.warn(res.data.message);
      } else if (res.data.success === true) {
        toast.success("Registration Successful");
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Could not connect to server");
    }

    setLoading(false);
  };

  return (
    <SignupContext.Provider
      value={{
        data,
        setData,
        profilePicture,
        setProfilePicture,
        resumeCv,
        setResumeCv,
        volunteer_signup,
        donor_signup,
        ngo_signup,
        ngo_signup_verify_transaction,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignupContext() {
  const context = useContext(SignupContext);
  return context;
}
