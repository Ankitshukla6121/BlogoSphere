# Airbnb-Inspired Application

## Overview
This is an Airbnb-inspired web application that allows users to add, update, delete, and view properties. It also features a Google Maps integration to view nearby listings, providing an interactive and user-friendly experience.

## Features
- **Property Management**: Users can add, update, and delete property listings.
- **Nearby Listings**: View properties on an interactive map using Google Maps API.
- **User Authentication**: Secure login and registration mechanisms for reliable access.
- **Responsive Design**: Built with EJS templates and styled using Tailwind CSS for a seamless experience across devices.
- **RESTful APIs**: Efficient backend operations for property and user data management.

## Tech Stack
- **Frontend**: EJS, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Google Maps API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airbnb-inspired-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd airbnb-inspired-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     PORT=your_preferred_port
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open the app in your browser:
   ```
   http://localhost:PORT
   ```

## Usage
- **Sign up/Login**: Create an account or log in to access features.
- **Add Properties**: List your property by providing details and location.
- **View Nearby Listings**: Explore properties visually on the map.
- **Manage Listings**: Update or delete your existing properties.

## Folder Structure
```
├── public
│   ├── css
│   ├── js
├── routes
│   ├── api
│   ├── views
├── views
│   ├── partials
│   ├── pages
├── models
├── controllers
├── .env
├── app.js
├── package.json
```

## Future Enhancements
- Add payment gateway integration.
- Implement user reviews and ratings for properties.
- Add advanced search filters for better property exploration.

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact
For any inquiries or support, contact me at: ankitshukla4510@gmail.com
