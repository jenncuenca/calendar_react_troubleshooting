// axios is used for rest api's
import axios from 'axios';
// this is to make it easier to get, save, and delete articles.
const profileApi = {
  getProfiles: function() {
    return axios.get("/api/profile");
  },
  // Saves a new article to the db
  saveProfile: function(profileObj) {
    return axios.post("/api/profile", profileObj);
  },
  // Deletes an article from the db
  deleteProfile: function(id) {
    return axios.delete(`/api/profile/${id}`);
  }
};

export default profileApi