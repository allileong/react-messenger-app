import { getInitials } from "../../src/client/util";

it("should get the initials from the first name and last name", () => {
  expect(getInitials("lowercase", "name")).toEqual("LN");
  expect(getInitials("Uppercase", "Name")).toEqual("UN");
  expect(getInitials(undefined, undefined)).toEqual("");
  expect(getInitials("", "")).toEqual("");
  expect(getInitials(null, null)).toEqual("");
  expect(getInitials("", "lastname")).toEqual("L");
  expect(getInitials(1234, 5678)).toEqual("15");
  expect(getInitials(":", ")")).toEqual(":)");
});
