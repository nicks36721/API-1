# Backend API for Jarurat Care NGO  

## Objective  
As a **Backend Developer** at Jarurat Care NGO, this project involves developing a backend API using **Node.js** (Express) and **MongoDB**. The API performs CRUD operations, enforces role-based access control, and includes input validation and authentication mechanisms to ensure secure and efficient data handling.  

---

## API Routes  

### **User Registration**  
**Method**: POST  
**Endpoint**: `/api/users/register`  

**Input Fields**:  
- **Name**: (String) Required.  
- **Email**: (String) Required, must be unique.  
- **Role**: (String) Required. Can be `Admin` or `User`.  
- **Password**: (String) Required.  

---

### **User Login**  
**Method**: POST  
**Endpoint**: `/api/users/login`  

**Input Fields**:  
- **Email**: (String) Required.  
- **Password**: (String) Required.  

---

### **Create Resource**  
**Method**: POST  
**Endpoint**: `/api/resources/create`  

**Access**: Admin only.  

**Input Fields**:  
- **Title**: (String) Required.  
- **Description**: (String) Required.  

---

### **Get All Resources**  
**Method**: GET  
**Endpoint**: `/api/resources/all`  

**Access**: Admin and User.  

---

### **Get a Resource by ID**  
**Method**: GET  
**Endpoint**: `/api/resources/byId/:id`  

**Access**: Admin and User.  

---

### **Update a Resource by ID**  
**Method**: PUT  
**Endpoint**: `/api/resources/update/:id`  

**Access**: Admin only.  

---

### **Delete a Resource by ID**  
**Method**: DELETE  
**Endpoint**: `/api/resources/delete/:id`  

**Access**: Admin only.  
