const mongoose = require("mongoose");
const User = require("../models/user");


  test("create User without required field should failed", async () => {
    const UserWithoutRequiredField = new User({ Fullname: "Name testing"});
    let err;
    try {
      const savedUserWithoutRequiredField =
        await UserWithoutRequiredField.save();
      err = savedUserWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });
  