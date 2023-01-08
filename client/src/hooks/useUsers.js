import React, { useState, useCallback, useEffect } from "react";
import { httpGetAllUsers, httpSignup, httpGetUserById } from "./requests";

export default function useUsers() {
  const [users, saveUsers] = useState([]);
  const [user, saveUser] = useState({});

  const getUsers = useCallback(async () => {
    const fetchedUsers = await httpGetAllUsers();
    saveUsers(fetchedUsers);
  }, []);
  const signup = useCallback(async (data) => {
    const res = await httpSignup(data);
    return res;
  }, []);

  const getUser = useCallback(async (id) => {
    const fetchedUser = await httpGetUserById(id);
    return fetchedUser;
  }, []);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return { users, signup, getUser, user };
}
