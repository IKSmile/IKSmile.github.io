# 🌐 Isaac Kuakua – Portfolio Website

This is the official personal portfolio website of **Isaac Kuakua**, a **Junior Analyst Programmer, Developer, and UI/UX Designer**.  
It showcases professional experience, technical skills, projects, and contact information — all designed with a modern, responsive layout.

---

## 🖥️ Demo

👉 **Live Preview:** [https://iksmile.github.io](#)  
---

## 📁 Project Structure


root/
│
├── assets/
│ ├── images/ # Profile, project, and gallery images
│ ├── js/
│ │ └── main.js # Custom JavaScript (interactivity, translations, animations)
│ └── styles/
│ └── main.css # Custom CSS styles
│
├── index.html # Main HTML file (Portfolio page)
└── README.md # Project documentation



---

## 🚀 Features

✅ **Responsive Design** – Fully mobile-friendly layout using **Bootstrap 5**  
✅ **Dark Mode Toggle** – Switch seamlessly between light and dark themes  
✅ **Language Selector** – Supports **English**, **French**, **Spanish**, and **Lingala**  
✅ **Animated Sections** – Smooth scroll animations using **AOS (Animate On Scroll)**  
✅ **Back to Top Button** – Easy navigation for long pages  
✅ **Modern UI/UX** – Clean, minimal, and professional interface  
✅ **Contact Form Integration** – Ready to connect with **EmailJS** for real-time messaging  
✅ **Offcanvas Menu** – Mobile-friendly navigation drawer  
✅ **Interactive Skill Bars** – Visual representation of technical skill levels  

---

## 🧠 Technologies Used

| Category | Technologies |
|-----------|--------------|
| **Frontend Framework** | [Bootstrap 5](https://getbootstrap.com/) |
| **Icons** | [Bootstrap Icons](https://icons.getbootstrap.com/) |
| **Fonts** | [Google Fonts: Poppins, Montserrat](https://fonts.google.com/) |
| **Animations** | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) |
| **Email Service** | [EmailJS](https://www.emailjs.com/) |
| **Scripting** | Vanilla JavaScript (ES6) |
| **Styling** | Custom CSS with Bootstrap utilities |

---

## 📷 Sections Overview

### 🏠 Hero Section
Introduces **Isaac Kuakua** with a professional profile image, title, and quick action buttons.  

### 👨‍💻 About Me
Showcases education, professional background, and language proficiencies with a visual photo grid.  

### ⚙️ Skills
Highlights key **programming languages**, **frameworks**, **tools**, and **specializations** with animated skill bars.  

### 🧾 Experience & Education
Displays a **timeline** of professional experience and academic achievements.  

### 💼 Projects
Features selected professional and academic projects with images, tools used, and links to live demos.  

### 📬 Contact
Includes a **functional contact form**, **email**, **phone number**, and **location details**.  

### ⚫ Footer
Links to social profiles (LinkedIn, GitHub, Twitter, Instagram).  

---

## 🛠️ Setup Instructions

To run this project locally:

1. **Clone this repository**
   ```bash
   git clone https://github.com/IKSmile/IKSmile.github.io.git
Navigate into the project folder

bash
Copy code
cd isaac-kuakua-portfolio
Open the HTML file in your browser

bash
Copy code
open index.html
or simply double-click on index.html.

✉️ Contact Integration (EmailJS)
The contact form is set up with EmailJS.
To enable it:

Create a free EmailJS account

Obtain:

SERVICE_ID

TEMPLATE_ID

PUBLIC_KEY

Configure them inside your assets/js/main.js file.

Example:

javascript
Copy code
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form);
🎨 Customization
You can easily modify:

Colors and fonts → in assets/styles/main.css

Text content → directly in index.html

Images → in assets/images/

Language translations → inside your JavaScript translation module (if implemented)

🌍 Multi-Language Support
Supported Languages:

English 🇬🇧

French 🇫🇷

Spanish 🇪🇸

Lingala 🇨🇩

Switching languages updates all text marked with data-translate attributes dynamically.

🧩 Dependencies (CDN)
All external dependencies are loaded via CDN for easy deployment:

Bootstrap 5

Bootstrap Icons

AOS Animation Library

Google Fonts

EmailJS

📄 License
This project is open-source and free to use under the MIT License.

👤 Author
Isaac Kuakua
🎓 Junior Analyst Programmer & UI/UX Designer
📧 kuakuaisa@gmail.com
📍 Kinshasa, DRC
🔗 [LinkedIn Profile](https://linkedin.com/in/isaac-kuakua-3b2252324)

“Code with purpose. Design with empathy.”
— Isaac Kuakua


