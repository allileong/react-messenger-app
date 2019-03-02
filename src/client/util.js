const getInitials = (firstName, lastName) => {
  const firstInitial = firstName ? firstName.toString().charAt(0) : "";
  const lastInitial = lastName ? lastName.toString().charAt(0) : "";
  return `${firstInitial}${lastInitial}`.toUpperCase();
};

export { getInitials };
