
# 🌦️ React Weather App

A **modern and responsive weather application** built using **React.js** and the **OpenWeatherMap API**. This app allows users to search for any city and view real-time weather data including temperature, humidity, wind speed, and weather conditions with beautiful icons.

---

## 🚀 Features

- 🔍 **Search Functionality** – Enter a city name to get the latest weather info.
- 🌡️ **Real-time Temperature** – Get the current temperature in Celsius.
- 💧 **Humidity & Wind** – Display of humidity and wind speed.
- 🖼️ **Weather Icons** – Dynamic icons that match the weather condition.
- 🌍 **Default City** – Loads weather for *London* by default on startup.
- 📱 **Responsive Design** – Mobile-friendly UI built with clean CSS.
- ⚙️ **API Integration** – Uses [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🧰 Tech Stack

- **React.js**
- **CSS3** (Custom styling)
- **OpenWeatherMap API**
- **FontAwesome & Bootstrap** (For optional UI enhancements)
- **Slick Carousel** (Installed for future use)

---

## 📂 Project Structure

```
src/
├── assets/               # Weather icons and images
│   └── search.png, clear.png, ...
├── components/
│   ├── Weather.jsx       # Main Weather component
│   └── Weather.css       # Weather component styles
├── App.js                # Root component
├── App.css               # Global app styles
├── index.js              # Entry point
├── index.css             # Base styles
```

---

## 🌐 API Used

- **OpenWeatherMap API**
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - API Key: Replace with your own for production use.
  - Current API Key in use (for testing):  
    ```
    49f0161906c5914ec93fad2b394472a4
    ```

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   cd react-weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Visit in your browser**:
   ```
   http://localhost:3000
   ```

---

## 🔐 Environment Setup

> **Important:** For security, move your API key to `.env` file and use `import.meta.env` or `process.env` depending on your setup.

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

Then update your fetch URL in the code like this:
```js
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
```

---

## 📌 Future Improvements

- 🌍 Add geolocation to fetch weather based on user's location.
- 🕒 Show forecast for multiple days.
- 🌓 Add theme support (light/dark mode).
- 🌐 Support multiple languages.

---

## 🙌 Author

**Mido Kha**  
Frontend Developer | React Enthusiast  
