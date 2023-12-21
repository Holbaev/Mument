import $api from "../http/api";
import axios from "axios";

export async function getTracks(data) {
  return $api.get(`/tracks/`, data);
}

export async function searchTracks(searchValue, data) {
  if (!searchValue) return [];
  return await $api.get(`/tracks?q=${searchValue}`, data);
}
