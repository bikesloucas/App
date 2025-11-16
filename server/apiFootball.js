import axios from "axios";

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";

const headers = {
  "x-apisports-key": API_KEY,
  "x-apisports-host": "v3.football.api-sports.io",
};

export async function getMatchesByLeague(leagueId, season) {
  const url = `${BASE_URL}/fixtures?league=${leagueId}&season=${season}`;

  try {
    const response = await axios.get(url, { headers });
    return response.data.response;
  } catch (error) {
    console.error("Erro ao obter jogos:", error.message);
    return [];
  }
}

export async function getTeamsByLeague(leagueId, season) {
  const url = `${BASE_URL}/teams?league=${leagueId}&season=${season}`;

  try {
    const response = await axios.get(url, { headers });
    return response.data.response;
  } catch (error) {
    console.error("Erro ao obter equipas:", error.message);
    return [];
  }
}
