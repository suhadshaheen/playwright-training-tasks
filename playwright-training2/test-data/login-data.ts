export const loginData = [
  {
    description: "Valid credentials",
    email: process.env.TEST_EMAIL!,
    password: process.env.TEST_PASSWORD!,
    expected: "success",
  },
  {
    description: "Invalid credentials",
    email: "wrong@email.com",
    password: "WrongPass123!",
    expected: "error",
    errorMessage: "Email/Password you entered is",
  },
  {
    description: "Empty credentials",
    email: "",
    password: "",
    expected: "error",
    errorMessage: "Please Enter A Valid Email Address.",
  },
  {
    description: "Valid email with empty password",
    email: process.env.TEST_EMAIL!,
    password: "",
    expected: "error",
    errorMessage: "Please enter Current Password.",
  },
];
