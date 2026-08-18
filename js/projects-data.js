window.PORTFOLIO_PROJECTS = [
  {
    id: "lawyersystem",
    number: "01",
    name: "Law Firm Management Platform",
    title: "Complete Digital Operations Platform for Law Offices",
    category: "Business Management System",
    status: "Live Website · Production System",
    statusTone: "live",
    website: "https://salehshetawy.com/front-landing.php",
    caseStudy: "case-studies/law-firm-management.html",
    lead: "A unified legal operations platform connecting cases, clients, hearings, documents, contracts, finance, HR, notifications, and reporting.",
    overview: [
      "The platform is designed for law offices that need to manage legal and administrative work from one controlled workspace.",
      "It brings client records, case histories, court sessions, legal documents, financial activity, staff processes, and management reporting into a connected operational system."
    ],
    challenge: "Legal work can become fragmented across paper files, spreadsheets, messaging, and disconnected calendars. That makes it harder to follow case history, upcoming hearings, documents, outstanding fees, and responsibility across the team.",
    solution: "A role-based platform that structures the full legal workflow—from registering clients and cases through hearings, contracts, documents, payments, expenses, HR, reminders, and reports—while keeping every activity connected to its business context.",
    features: [
      ["Case & Client Management", "Maintain complete client records, case parties, assigned lawyers, statuses, judgments, and case history."],
      ["Hearings & Calendar", "Schedule court sessions, assign lawyers, track outcomes, and review hearings through a shared calendar."],
      ["Contracts & Legal Documents", "Build contracts from reusable clauses and manage legal memos, defenses, requests, and uploaded files."],
      ["Payments & Expenses", "Record legal fees, client payments, case expenses, office expenses, and financial activity."],
      ["HR & Payroll", "Manage salary history, payroll runs, advances, installments, rewards, and deductions."],
      ["Roles & Permissions", "Control access to sensitive operational and financial areas using granular permissions."],
      ["Notifications & Reminders", "Surface upcoming work, important account events, and system notifications."],
      ["Management Reporting", "Review case, client, financial, operational, and HR reports from a central reporting layer."]
    ],
    modules: ["Dashboard", "Clients", "Cases", "Lawyers", "Hearings", "Calendar", "Contracts", "Documents", "Finance", "HR & Payroll", "Reports", "Settings"],
    businessValue: [
      ["Centralized operations", "Keeps legal, administrative, and financial work in one connected platform."],
      ["Structured legal workflows", "Creates a consistent path for handling cases, hearings, documents, and contracts."],
      ["Clearer financial visibility", "Connects payments and expenses to clients, cases, and office operations."],
      ["Controlled access", "Allows each role to reach the information and actions relevant to its responsibilities."]
    ],
    technologies: ["PHP", "MySQL", "Smarty", "JavaScript", "jQuery", "AJAX", "Bootstrap", "Chart.js", "FullCalendar"],
    role: ["Solo Full-Stack Development", "System Architecture", "Database Design", "Backend & Business Logic", "Responsive Frontend", "Roles & Permissions", "Reporting & Dashboards", "Deployment Support"],
    images: [
      ["../img/case-studies/lawyersystem-website.png", "Public Legal Website", "A client-facing legal website connected to the wider digital solution."],
      ["../img/case-studies/lawyersystem-dashboard.png", "Executive Dashboard", "A consolidated view of hearings, operations, finance, and case activity."],
      ["../img/case-studies/lawyersystem-case-creation.png", "Case Creation Workflow", "A guided multi-step form for registering the core case data and progressing through the legal workflow."]
    ]
  },
  {
    id: "makhbaz",
    number: "02",
    name: "Lebanese Bakery Digital Menu",
    title: "Bilingual Digital Menu and Content Management Platform",
    category: "Restaurant Website & Admin System",
    status: "Live Website",
    statusTone: "live",
    website: "https://lebanese-bakery.com/",
    caseStudy: "case-studies/lebanese-bakery.html",
    lead: "A responsive Arabic and English digital menu with product discovery, branch information, configurable pricing, and a focused administration workflow.",
    overview: [
      "The platform presents a large restaurant menu in a clear, mobile-friendly experience while giving the business direct control over its products and locations.",
      "Customers can browse categories, search the menu, inspect product details, switch language, and find branches without navigating a traditional PDF menu."
    ],
    challenge: "A growing menu needs frequent updates across products, categories, prices, options, images, and branch information. Static menu files make those changes slow and create a poor browsing experience on mobile devices.",
    solution: "A database-driven menu and lightweight administration system that separates content management from the customer experience, supports Arabic and English, and keeps product discovery fast and structured.",
    features: [
      ["Digital Menu", "Present products through organized categories with descriptions, images, prices, and detail views."],
      ["Bilingual Experience", "Serve equivalent Arabic and English navigation and content paths."],
      ["Search & Filtering", "Help customers reach specific products and categories quickly."],
      ["Product Options", "Manage product-level options and configurable pricing data."],
      ["Branch Directory", "Publish branch information and customer contact paths in one place."],
      ["Content Administration", "Manage products, main categories, subcategories, branches, and footer content."],
      ["Secure Admin Access", "Protect content tools with authenticated sessions, CSRF protection, and login-attempt controls."],
      ["Activity Tracking", "Record important administrative actions for clearer operational visibility."]
    ],
    modules: ["Public Menu", "Search", "Product Details", "Main Categories", "Subcategories", "Products", "Branches", "Site Settings", "Admin Account"],
    businessValue: [
      ["Direct content control", "Allows menu content and branch information to be updated without rebuilding the public site."],
      ["Better product discovery", "Makes a broad menu easier to browse by category, language, and search."],
      ["Mobile-first access", "Provides customers with a practical menu experience on the device they use most."],
      ["Consistent presentation", "Keeps product information, pricing, imagery, and locations in one managed system."]
    ],
    technologies: ["PHP 8.2", "MySQL", "Smarty 5", "JavaScript", "HTML5", "CSS3", "PDO", "PhpSpreadsheet"],
    role: ["Solo Full-Stack Development", "Application Architecture", "Database Design", "Bilingual Frontend", "Admin Dashboard", "Authentication & Security", "Content Workflows", "Deployment Support"],
    images: [
      ["../img/case-studies/makhbaz-menu.png", "Customer Menu Experience", "A visual, searchable menu built for fast product discovery."],
      ["../img/case-studies/makhbaz-dashboard.png", "Content Dashboard", "A focused workspace for products, categories, branches, and site content."],
      ["../img/case-studies/makhbaz-branches.png", "Branch Directory", "A dedicated customer path for branch and location information."]
    ]
  },
  {
    id: "firstcar",
    number: "03",
    name: "First Car Rent",
    title: "Car Rental Catalog and Lead Management Website",
    category: "Automotive Website & CMS",
    status: "Live Website",
    statusTone: "live",
    website: "https://car-rent.free.nf/",
    caseStudy: "case-studies/first-car-rent.html",
    lead: "A responsive rental website that presents available vehicles in detail and gives the business a structured back office for fleet content and customer enquiries.",
    overview: [
      "First Car Rent is designed for a car rental business that needs to present its fleet online and convert browsing visitors into qualified enquiries.",
      "The public experience combines a searchable vehicle catalog with individual car details, rental requirements, service content, and direct contact paths."
    ],
    challenge: "A rental business needs more than a simple gallery. Customers must compare vehicles and understand rental information, while staff need a reliable way to maintain cars, brands, categories, and incoming messages.",
    solution: "A database-backed catalog and administration system that connects customer-facing fleet discovery with controlled content management, user roles, and enquiry handling.",
    features: [
      ["Fleet Catalog", "Display available vehicles with images, specifications, descriptive content, and rental information."],
      ["Search & Filtering", "Browse the fleet using structured category and vehicle data."],
      ["Vehicle Detail Pages", "Give each car a dedicated presentation with the information needed before an enquiry."],
      ["Rental Enquiries", "Provide clear customer contact and request paths from the public website."],
      ["Fleet Administration", "Create and update cars, categories, brands, media, and supporting content."],
      ["Messages", "Collect and review customer contact messages from the administration area."],
      ["Staff Management", "Manage administrative users and profile information."],
      ["Roles & Permissions", "Control access to back-office actions through role-based permissions."]
    ],
    modules: ["Homepage", "Fleet", "Car Details", "Search", "Categories", "Brands", "Cars", "Messages", "Staff", "Permissions"],
    businessValue: [
      ["Clear fleet presentation", "Turns vehicle data into a structured customer-facing catalog."],
      ["Faster content updates", "Allows staff to maintain the fleet and supporting content from one back office."],
      ["Better enquiry context", "Helps customers review vehicle details before contacting the business."],
      ["Controlled administration", "Separates staff responsibilities through users, roles, and permissions."]
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "PDO", "CKEditor"],
    role: ["Solo Full-Stack Development", "Database Design", "Fleet CMS", "Public Website", "Search & Filtering", "Admin Dashboard", "Roles & Permissions", "Deployment Support"],
    images: [
      ["../img/case-studies/firstcar-website.png", "Rental Website", "A client-facing experience designed around vehicle discovery."],
      ["../img/case-studies/firstcar-fleet.png", "Fleet Catalog", "Searchable vehicle listings with structured rental content."],
      ["../img/case-studies/firstcar-dashboard.png", "Fleet Administration", "A controlled back office for cars, brands, categories, staff, and messages."]
    ]
  },
  {
    id: "enppi",
    number: "04",
    name: "Enppi Elevator Operations System",
    title: "Internal Platform for Elevator Projects and Service Operations",
    category: "Internal Business System",
    status: "Archived",
    statusTone: "archived",
    website: null,
    caseStudy: "case-studies/enppi-elevator-system.html",
    lead: "An operations platform combining a corporate website, customer portal, project-unit tracking, service requests, complaints, appointments, and financial records.",
    overview: [
      "The system supports an elevator company across both its public presence and internal operational workflows.",
      "It connects customers, elevator units, geographic regions, installation stages, service activity, complaints, appointments, payments, suppliers, and administrative control."
    ],
    challenge: "Elevator projects involve multiple units, installation or maintenance stages, customer communication, appointments, technical follow-up, and financial records. Managing these activities separately limits visibility and makes project history difficult to follow.",
    solution: "A centralized system that links each customer and unit to its operational history, service activity, payment records, and follow-up workflows while also supporting public content and a dedicated customer portal.",
    features: [
      ["Customer Portal", "Give customers authenticated access to their account and relevant project information."],
      ["Units & Regions", "Organize elevator units by customer, location, region, and business context."],
      ["Project Stages", "Track installation and service stages associated with operational units."],
      ["Complaints & Requests", "Register, assign, follow, and close customer complaints and service requests."],
      ["Appointments & Previews", "Coordinate visits, previews, and scheduled operational activity."],
      ["Payments & Statements", "Maintain payment records and customer-facing financial statements."],
      ["Suppliers", "Manage supplier records and supplier scheduling data."],
      ["Roles & Content", "Control staff permissions while managing corporate website content and visual settings."]
    ],
    modules: ["Public Website", "Customer Portal", "Customers", "Units", "Regions", "Stages", "Appointments", "Complaints", "Payments", "Suppliers", "Reports", "Permissions"],
    businessValue: [
      ["Connected project history", "Keeps unit, customer, service, and payment records together."],
      ["Structured follow-up", "Creates a consistent workflow for appointments, requests, complaints, and closure."],
      ["Customer visibility", "Provides a dedicated portal instead of relying only on manual communication."],
      ["Operational control", "Gives departments and roles controlled access to the workflows they manage."]
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "PDO", "CKEditor"],
    role: ["Solo Full-Stack Development", "System Architecture", "Database Design", "Customer Portal", "Operations Dashboard", "Business Workflows", "Roles & Permissions", "Responsive Website"],
    images: [
      ["../img/case-studies/enppi-website.png", "Corporate Website", "A public-facing website for company information, projects, and contact paths."],
      ["../img/case-studies/enppi-dashboard.png", "Operations Dashboard", "The authenticated administration area for business workflows."],
      ["../img/case-studies/enppi-projects.png", "Project Presentation", "A public showcase of completed and active company work."]
    ]
  },
  {
    id: "ghonem",
    number: "05",
    name: "Ghonem Salon Management System",
    title: "Salon Booking, Service, Billing, and Operations Platform",
    category: "Business Management System",
    status: "Archived",
    statusTone: "archived",
    website: null,
    caseStudy: "case-studies/ghonem-salon.html",
    lead: "A combined salon website and back-office system for appointments, clients, services, invoices, staffing, salaries, expenses, and operational reporting.",
    overview: [
      "The system was built around the daily workflow of a men's salon, from presenting services and prices to booking customers and managing the resulting operational records.",
      "Its administration area extends beyond appointments into clients, invoicing, staff, attendance-related activity, payroll, purchases, withdrawals, expenses, and reports."
    ],
    challenge: "A busy salon needs to coordinate customer arrival, service duration, staff work, billing, and day-to-day expenses. When bookings and accounts are handled separately, it becomes harder to maintain an accurate operational picture.",
    solution: "A connected appointment and management platform that links customer bookings to services and supports the back-office processes required to operate the salon from one administration environment.",
    features: [
      ["Appointment Booking", "Capture customer bookings through a structured public workflow."],
      ["Services & Pricing", "Present and manage service categories, prices, descriptions, and duration."],
      ["Client Management", "Maintain customer records and service-related history."],
      ["Invoices", "Create and review invoices associated with delivered salon services."],
      ["Staff Operations", "Manage staff accounts, attendance-related records, and administrative access."],
      ["Salaries & Deductions", "Support salary records, deductions, and related reporting."],
      ["Expenses & Purchases", "Record expenses, purchases, withdrawals, and configurable expense types."],
      ["Reports & Permissions", "Review operational and financial reports with role-based access control."]
    ],
    modules: ["Public Website", "Appointments", "Clients", "Services", "Categories", "Invoices", "Staff", "Salaries", "Purchases", "Expenses", "Reports", "Permissions"],
    businessValue: [
      ["Organized booking flow", "Creates a clear path from customer appointment to service delivery."],
      ["Connected billing", "Relates delivered services to invoices and customer records."],
      ["Operational visibility", "Brings bookings, staff, services, and day-to-day accounts into one system."],
      ["Structured administration", "Reduces dependence on disconnected manual records for core salon workflows."]
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "Bootstrap", "PDO", "CKEditor"],
    role: ["Solo Full-Stack Development", "Database Design", "Booking Workflow", "Public Website", "Admin Dashboard", "Billing & Finance Modules", "Roles & Permissions", "Responsive UI"],
    images: [
      ["../img/case-studies/ghonem-website.png", "Salon Website", "A customer-facing website for services, pricing, and booking."],
      ["../img/case-studies/ghonem-services.png", "Services & Pricing", "A structured presentation of salon services and pricing."],
      ["../img/case-studies/ghonem-dashboard.png", "Operations Dashboard", "A management view covering appointments, services, invoices, and daily operations."]
    ]
  }
];
