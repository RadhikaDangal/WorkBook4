let courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    },
  ];
  
  // for (let index = 0; index < courses.length; index++) {
  //   const course = courses[index];
  //   if (course.CourseId == "PROG200") {
  //     console.log(`The ${course.CourseId} starts ${course.StartDate}`);
  //   }
  // }

  // When does the PROG200 course start?
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  if (course.CourseId == "PROG200") {
      console.log(`PROG200 starts on ${course.StartDate}`);
      break;
  }
}

// What is the title of the PROJ500 course?
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  if (course.CourseId == "PROJ500") {
      console.log(`PROJ500 has the title "${course.Title}"`);
      break;
  }
}

// What are the titles of the courses that cost $50 or less?
console.log("Titles of courses that cost $50 or less:");
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  const courseFee = parseFloat(course.Fee);
  if (courseFee <= 50) {
      console.log(` - ${course.Title}`);
  }
}

// What classes meet in "Classroom 1"?
console.log("Classes that meet in 'Classroom 1':");
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];
  if (course.Location == "Classroom 1") {
      console.log(` - ${course.CourseId}: ${course.Title}`);
  }
}



  