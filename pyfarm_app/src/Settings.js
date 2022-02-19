class Settings {
  static smallWidth = 600;
  static mediumWidth = 1200;

  static getApiUrl() {
    let urlMap = {
      localhost: "http://localhost:5000/api/",
    };

    return urlMap[window.location.hostname];
  }
}

export default Settings;
