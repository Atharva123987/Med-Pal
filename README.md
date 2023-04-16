# MedPal - Your Personal Medical Tracker 🩺

MedPal is a personal medical tracker that lets users manage their well-being online by helping them record and monitor their health particulars. The vision behind MedPal is to empower every Indian with full control over their medical data.

## Features

- Store and analyze lab vitals in charts for easy insights 📊
- Manage medicine inventory and get daily reminders 💊
- Securely store and access lab reports and prescriptions with web viewer 🗊
- Keep track of medical appointments with the integrated calendar 📅
- Search for nearby doctors using geolocation 👨‍⚕️
- Responsive design for seamless experience on mobile devices 📱

## Tech Stack

- React with Bootstrap (Front-end)
- Express and Node.js (Back-end)
- MongoDB (Database)
- Vercel (Front-end hosting)
- Render (Back-end hosting)
- Google Cloud Platform (Cloud Storage Bucket, VM Instance, and Cloud Cluster)

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository

```
git clone https://github.com/atharva123987/medpal.git
```

2. Navigate to the project directory

```
cd medpal
```

3. Install dependencies for both the frontend and backend

```
cd client
npm install
cd ../server
npm install
```

4. Create a `.env` file in the backend directory and add the following variables:

```
MONGODB_URI=<your_mongodb_connection_string>
PORT = <your_port_number>
SECRET = <for_bcrypt_hashing>
```

Note : You also might need to get google cloud api json file for using a GCP bucket

5. Start the frontend and backend servers in separate terminal windows

```
# In the frontend directory
npm start

# In the backend directory
npm run dev
```

Visit `http://localhost:3000` to view the application in your browser.

## Deployment 🔗

The frontend is deployed on [Vercel](https://vercel.com/),and the backend is deployed on [Render](https://medpal-backend.onrender.com/api). The reminder cronjob on [Github](https://github.com/spursycoder/Medpal-remainder-script). To deploy your own version, follow the instructions provided by the respective platforms.






