"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import loginSchema from "@/src/util/validation/login_scehma";
import {
  confirmEmailValues,
  LoginValues,
} from "@/src/type/validation_type/formTypes";
import { loginUserApi } from "@/src/lib/api_service_client/user_service/auth_handler";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/src/components/loader";
import ConfirmEmailScehma from "@/src/util/validation/confirmEmail_scehma";
import { confirmEmailApi } from "@/src/lib/api_service_client/user_service/resetPassword";

const ConfirmEmail = () => {
  const router = useRouter();

  const [showLoader, setLoader] = useState(false);

  const [showTextBox, setTextBox] = useState(false);

  const initialValues = { role: "", email: "" };

  const handleSubmit = async (
    values_data: confirmEmailValues,
    formikHelpers: FormikHelpers<confirmEmailValues>
  ) => {
    setLoader(true);

    const response = await confirmEmailApi(values_data);

    formikHelpers.resetForm();
    setLoader(false);

    if (response.status) {
      setTextBox(true);
    } else {
      toast.error(response.data);
    }
  };

  return (
    <>
      {showTextBox && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Check Your Email
            </h2>
            <p className="text-gray-600">
              A password reset link has been sent to your email address.
            </p>
            <p className="text-gray-600 mt-2">
              Please check your inbox and click the link to reset your password.
            </p>
          </div>
        </div>
      )}

      {showLoader && <Loader />}

      <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Confirm Email
            </h2>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={ConfirmEmailScehma}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Choose your role
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        id="role"
                        name="role"
                        onChange={handleChange}
                        className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-700 bg-white appearance-none"
                      >
                        <option value="" disabled hidden></option>
                        <option value="agent">I am an Agent</option>
                        <option value="agencies">I represent an Agency</option>
                      </Field>
                      <div className="h-1">
                        {errors.role && touched.role ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.role}
                          </div>
                        ) : null}
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-mail address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <div className="h-1">
                        {errors.email && touched.email ? (
                          <div className="text-red-500 text-xs mt-1 ">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    >
                      confirm
                    </button>
                  </div>
                </Form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm"></div>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
