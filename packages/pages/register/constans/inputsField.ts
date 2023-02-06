const inputs = (data: any) => {
  const inputsLabel = [
    {
      placeHolder: "First Name",
      label: "First Name",
      size: "small",
      validation: [
        { type: "length", errorMessage: "First Name must be filled" },
      ],
    },
    {
      placeHolder: "Last Name",
      label: "Last Name",
      size: "small",
      validation: [
        { type: "length", errorMessage: "Last Name must be filled" },
      ],
    },
    {
      placeHolder: "Organization Name",
      label: "Organization Name",
      validation: [
        { type: "length", errorMessage: "Organization Name must be filled" },
      ],
    },
    {
      placeHolder: "Email Address",
      label: "Email Address",
      validation: [
        { type: "length", errorMessage: "Email must be filled" },
        { type: "email", errorMessage: "Invalid Email Format" },
      ],
    },
    {
      placeHolder: "Enter your Password",
      label: "Password",
      validation: [
        { type: "length", errorMessage: "password must be filled" },
        { type: "password", errorMessage: "Invalid Password" },
      ],
    },
  ];

  inputsLabel.forEach((input) => {
    return { ...input, value: data.value, setValue: data.setValue };
  });
};
export { inputs };
