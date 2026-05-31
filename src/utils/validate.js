export const checkValidData = (isSignInForm, fullname, email, password) => {
  let isFullNameValid = true;
  if (!isSignInForm) {
    isFullNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname);
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isFullNameValid) return "Full Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
