const courses = [
  {
    id: 1,
    title: "Agile HR Certification",
    category: "Agile HR",
    duration: "10 Weeks",
    price: "₦30,000",
    rating: 4.9,
    reviews: 350,
    image: "assets/13.jpg",
    badge: "Popular",
    badgeColor: "blue",
    description: "Transform HR practices with Agile methodologies for modern workplaces.",
    fullDescription: "This comprehensive certification program equips HR professionals with Agile methodologies to transform traditional HR practices. Learn to implement Agile recruitment, performance management, and employee engagement strategies that adapt to today's dynamic workplace needs.",
    syllabus: [
      "Introduction to Agile HR",
      "Agile Recruitment Strategies",
      "Performance Management in Agile Environments",
      "Employee Engagement with Agile",
      "Implementing Agile in HR Operations"
    ],
    instructor: {
      name: "Dr. Adaobi Nwankwo",
      bio: "HR Transformation Specialist with 15+ years experience helping organizations adopt Agile HR practices",
      image: "assets/instructors/adaobi.jpg"
    }
  },
  {
    id: 2,
    title: "Business Analysis Fundamentals",
    category: "Business",
    duration: "8 Weeks",
    price: "₦28,500",
    rating: 4.7,
    reviews: 290,
    image: "assets/4.jpg",
    description: "Master requirements gathering, process modeling, and stakeholder management.",
    fullDescription: "Gain foundational skills in business analysis including requirements elicitation, process modeling, and stakeholder management. This course prepares you to bridge the gap between IT and business stakeholders to deliver optimal solutions.",
    syllabus: [
      "Introduction to Business Analysis",
      "Requirements Elicitation Techniques",
      "Process Modeling with BPMN",
      "Stakeholder Analysis & Management",
      "Solution Assessment & Validation"
    ],
    instructor: {
      name: "Emeka Okoro",
      bio: "Lead Business Analyst with certifications in CBAP and PMI-PBA",
      image: "assets/instructors/emeka.jpg"
    }
  },
  // Add all other courses following the same structure
  // ...
];

// Function to get course by ID
function getCourseById(id) {
  return courses.find(course => course.id === id);
}