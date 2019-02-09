import axios from 'axios';

// allow base url to be set as environment variable or localhost:3001
const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

class MusicAPI {
  static async request(endpoint, params = {}, verb = "get") {
    // for now, hardcode a token for user "testuser"
    let token = localStorage.getItem("token")

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`, { params: { token, ...params } });
    }

    try {
      let data = (await q).data;
      return data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** GET request to login route to request an auth token */
  static async authorize() {
    try {
      const res = await this.request(`login`);
      return res;
    } catch (err) {
      return { errors: err };
    }
  }

  /** get a list of jobs */
  static async search(query) {
    const res = await this.request(`search`, { query });
    return res;
  }
}

export default MusicAPI;