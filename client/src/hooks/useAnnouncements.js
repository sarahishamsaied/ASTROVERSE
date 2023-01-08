import { useState, useEffect, useCallback } from "react";
import { httpGetAllAnnouncements } from "./requests";
export default function useAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAnnouncements = useCallback(async () => {
    try {
      setLoading(true);
      const response = await httpGetAllAnnouncements();
      setAnnouncements(response.reverse());
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAnnouncements();
  }, [getAnnouncements]);

  return { announcements, loading, error, getAnnouncements };
}
