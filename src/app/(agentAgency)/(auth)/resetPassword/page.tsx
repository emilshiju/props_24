"use client";
import { useState, useEffect, use } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import resetPasswordSchema from "@/src/util/validation/changePassword";
import { resetPasswordValues } from "@/src/type/validation_type/formTypes";
import { changePasswordApi } from "@/src/lib/api_service_client/user_service/resetPassword";
import toast from "react-hot-toast";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Loader from "@/src/components/loader";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  const [showLoader, setLoader] = useState(false);

  const initialValues = { password: "", confirmPassword: "" };

  const handleSubmit = async (
    values_data: resetPasswordValues,
    formikHelpers: FormikHelpers<resetPasswordValues>
  ) => {
    if (!token) {
      toast.error("went wrong");
      return;
    }

    const ress = await changePasswordApi(values_data, token);

    if (ress.status) {
      router.push("/login");
    } else {
      toast.error(ress.data);
    }
  };

  return (
    <>
      {showLoader && <Loader />}

      <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Reset Password
            </h2>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
                      />
                      <div className="h-1">
                        {errors.password && touched.password ? (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div>
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm text-black"
                      />
                      <div className="h-1">
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.confirmPassword}
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
                    <div className="relative flex justify-center text-sm">
                      {/* <span className="bg-white px-2 text-gray-500">Don't have an account?</span> */}
                    </div>
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

export default ResetPassword;
