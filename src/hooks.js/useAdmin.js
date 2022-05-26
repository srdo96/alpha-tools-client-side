import { useEffect, useState } from "react";
import fetcher from "../api/axiosInstance";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetcher(`admin/${email}`).then((data) => {
        setAdmin(data?.data?.admin);
        setAdminLoading(false);
      });
    }
  }, [user]);
  return [admin, adminLoading];
};
export default useAdmin;
