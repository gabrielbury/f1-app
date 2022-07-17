const f1 = require('f1-api')

class RacesService {
  async getRaces() {
    return await f1.getSeasonRacesSchedule(new Date().getFullYear());
  }
}

export default new RacesService();