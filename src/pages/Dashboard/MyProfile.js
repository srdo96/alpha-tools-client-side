import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [{ displayName, email }, loading] = useAuthState(auth);
  const [editEducation, setEditEducation] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editLinkedIn, setEditLinkedIn] = useState(false);
  const [update, setUpdata] = useState("");

  if (loading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg h-screen">
      <div className="flex justify-between">
        <div className="px-4 py-5 sm:px-6 ">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            My Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and information.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {displayName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
              {email}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Education</dt>
            {editEducation ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  type="text"
                  id="simple-email"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-gray-50 text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Education"
                />
                <span
                  href="#"
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Update
                </span>
                <span className="mx-2">/</span>
                <span
                  onClick={() => setEditEducation(false)}
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Cancel
                </span>
              </dd>
            ) : (
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                BSc in CSE
                <span
                  onClick={() => setEditEducation(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            {editLocation ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  type="text"
                  id="simple-email"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Location"
                />
                <span
                  href="#"
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Update
                </span>
                <span className="mx-2">/</span>
                <span
                  onClick={() => setEditLocation(false)}
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Cancel
                </span>
              </dd>
            ) : (
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                Dhaka
                <span
                  onClick={() => setEditLocation(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            {editPhone ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  type="text"
                  id="simple-email"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-gray-50 text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Phone Number"
                />
                <span
                  href="#"
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Update
                </span>
                <span className="mx-2">/</span>
                <span
                  onClick={() => setEditPhone(false)}
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Cancel
                </span>
              </dd>
            ) : (
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                01256598565
                <span
                  onClick={() => setEditPhone(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              LinkedIn profile
            </dt>
            {editLinkedIn ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  type="text"
                  id="simple-email"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your LinkedIn profile"
                />
                <span
                  href="#"
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Update
                </span>
                <span className="mx-2">/</span>
                <span
                  onClick={() => setEditLinkedIn(false)}
                  className="font-medium text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Cancel
                </span>
              </dd>
            ) : (
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                https://www.linkedin.com/
                <span
                  onClick={() => setEditLinkedIn(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>

          <div className="ml-4 flex-shrink-0"></div>
        </dl>
      </div>
    </div>
  );
};

export default MyProfile;
