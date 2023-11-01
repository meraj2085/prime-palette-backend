# Prime Palette

Prime Palette is a painting service website that offers distinct dashboards for administrators, regular users, and super administrators. Users have the flexibility to select services from various categories and schedule appointments. Administrators are empowered to either approve or reschedule appointments and maintain control over website activities through a secure dashboard. Super administrators are responsible for managing the administrators.

## Tech Stack

<div align="left">  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="40" /></a>  
<span style="margin: 0 10px;">&nbsp;</span>
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="40" /></a>  
<span style="margin: 0 10px;">&nbsp;</span>
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="65" /></a>  
<span style="margin: 0 10px;">&nbsp;</span>
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="60" /></a>  
</div>

## Functional Requirements

### User

- User can login, signup and log out.
- User can manage and update their profile.
- Users can add services to their booking.
- Users can leave reviews and ratings for services.
- User can view booking history, check booking statuses.
- Feedback forms for users to submit comments and suggestions.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admins can access centralized dashboard to monitor and manage website activities.
- Admins can add, edit, and manage user accounts.
- Admins can add, edit, and remove service listings.
- Admins can view and manage booking requests.
- Admins can accept, reject, or adjust schedules as needed.
- Admin can control website content, including blog posts and FAQs.

### Super Admin

- Super Admin can log in and log out.
- Super Admin can manage and update their profile.
- Super Admin can add new admin users to the system.

## API Endpoints

### Users

- `GET /users`
- `GET /users/:id`
- `GET /users/getAdmins`
- `GET /users/my-profile`
- `PATCH /users/:id`
- `PATCH /users/my-profile`
- `DELETE /users/:id`

### Authentication

- `POST /auth/login`
- `POST /auth/signup`
- `POST /auth/changePassword`

### Service

- `GET /service`
- `GET /service/:id`
- `GET /service/getAllUpcomingServices`
- `GET /service/getServicesByCategory/:id`
- `POST /service`
- `PATCH /service/:id`
- `DELETE /service/:id`

### Appointment

- `GET /appointment`
- `GET /appointment/:id`
- `GET /appointment/getAllAppointment`
- `POST /appointment`
- `PATCH /appointment/update-status`
- `PATCH /appointment/updateScheduleAndStatus`

### Blog

- `GET /blog`
- `GET /blog/:id`
- `POST /blog`
- `PATCH /blog/:id`
- `DELETE /blog/:id`

### Faq

- `GET /faq`
- `GET /faq/:id`
- `POST /faq`
- `PATCH /faq/:id`
- `DELETE /faq/:id`

### Review

- `GET /review/:id`
- `POST /review`

### News

- `GET /news`
- `POST /news`

### Feedback

- `GET /feedback`
- `POST /feedback`

### Category

- `GET /category`
- `POST /category`
- `PATCH /category/:id`


<p align="center">
  <img src="https://res.cloudinary.com/dn163fium/image/upload/v1697588920/psog4rriy6tlbcs1edhh.png" alt="Logo" width="50%" style="max-width: 200px;">
</p>

