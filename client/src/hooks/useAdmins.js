import React, { useState, useCallback, useEffect } from "react";
import {
  httpAdminLogin,
  httpGetAllAdmins,
  httpGetUserById,
  httpGetRegisteredUsersMonthly,
  httpAssignRole,
  httpAddNewAstronaut,
} from "./requests";

export default function useAdmins() {
  const [admins, saveAdmins] = useState([]);
  const getAdmins = useCallback(async () => {
    const fetchedAdmins = await httpGetAllAdmins();
    saveAdmins(fetchedAdmins);
  }, []);
  const getUser = useCallback(async (id) => {
    const fetchedAdmin = await httpGetUserById(id);
    return fetchedAdmin;
  }, []);
  const adminLogin = useCallback(async (data) => {
    const res = await httpAdminLogin(data);
    return res;
  }, []);
  const getRegisteredUsers = useCallback(async () => {
    const fetchedUsers = await httpGetRegisteredUsersMonthly();
    return fetchedUsers;
  }, []);
  const assignRole = useCallback(async (data) => {
    const res = await httpAssignRole(data);
    return res;
  }, []);
  const addNewAstronaut = useCallback(async (astronaut) => {
    const res = await httpAddNewAstronaut(astronaut);
    console.log(res);
    return res;
  }, []);
  useEffect(() => {
    getAdmins();
  }, [getAdmins]);
  return {
    admins,
    getUser,
    adminLogin,
    getRegisteredUsers,
    assignRole,
    addNewAstronaut,
  };
}
