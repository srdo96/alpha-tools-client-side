import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import fetcher from "../../api/axiosInstance";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [{ displayName, email }, loading] = useAuthState(auth);
  const [editEducation, setEditEducation] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editLinkedIn, setEditLinkedIn] = useState(false);
  const [update, setUpdata] = useState("");

  const { data, refetch, isLoading } = useQuery("user", () =>
    fetcher(`user/${email}`)
  );

  if (loading || isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  const { education, location, phone, linkedIn } = data?.data;

  const handleUpdate = (name) => {
    console.log("e", name);
    const data = {
      [name]: update,
    };
    fetcher.put(`user/${email}`, data).then((res) => {
      toast.success("Update Successful");
      refetch();
    });
  };
  
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
          {/* Name */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {displayName}
            </dd>
          </div>

          {/* email */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
              {email}
            </dd>
          </div>

          {/* Education */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Education</dt>
            {editEducation ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  type="text"
                  onChange={(e) => setUpdata(e.target.value)}
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-gray-50 text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Education"
                />
                <span
                  onClick={(e) => {
                    handleUpdate(e.target.id);
                    setEditEducation(false);
                  }}
                  id="education"
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
                <p>{education}</p>
                <span
                  onClick={() => setEditEducation(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>

          {/* Location */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            {editLocation ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  onChange={(e) => setUpdata(e.target.value)}
                  type="text"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Location"
                />
                <span
                  onClick={(e) => {
                    handleUpdate(e.target.id);
                    setEditLocation(false);
                  }}
                  id="location"
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
                <p>{location}</p>
                <span
                  onClick={() => setEditLocation(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>

          {/* Phone */}
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            {editPhone ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  onChange={(e) => setUpdata(e.target.value)}
                  type="text"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-gray-50 text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your Phone Number"
                />
                <span
                  onClick={(e) => {
                    handleUpdate(e.target.id);
                    setEditPhone(false);
                  }}
                  id="phone"
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
                <p>{phone}</p>
                <span
                  onClick={() => setEditPhone(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 mr-32 cursor-pointer ml-5"
                >
                  Edit
                </span>
              </dd>
            )}
          </div>

          {/* LinkedIn profile */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              LinkedIn profile
            </dt>
            {editLinkedIn ? (
              <dd className="lg:flex lg:gap-2">
                <input
                  onChange={(e) => setUpdata(e.target.value)}
                  type="text"
                  class="   border border-t-0 border-x-0 border-gray-300 w-full pt-px px-4  bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none  "
                  placeholder="Your LinkedIn profile"
                />
                <span
                  onClick={(e) => {
                    handleUpdate(e.target.id);
                    setEditLinkedIn(false);
                  }}
                  id="linkedIn"
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
                <p>{linkedIn} </p>
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
