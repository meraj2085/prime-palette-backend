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

### Student

- Student can login and log out.
- Student can manage and update their profile.
- Student can update certain fields.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admin can only update certain fields.
- Admin can manage user accounts:
  - Change Password

### Faculty

- Faculty can log in and log out.
- Faculty can manage and update their profile.
- Faculty can only update certain fields.

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


Postman Documenttaion: [Click Here](https://documenter.getpostman.com/view/26682150/2s93zB72V9#acc25f08-de78-478b-809d-837ce239d2b3)
