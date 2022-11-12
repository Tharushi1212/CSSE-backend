const mongoose = require("mongoose");
const User = require("../models/UserAccountSchema");


  test("create User Account without required field should failed", async () => {
    const UserAccountWithoutRequiredField = new User({ First_Name: "Name testing"});
    let err;
    try {
      const savedUserAccountWithoutRequiredField =
        await UserAccountWithoutRequiredField.save();
      err = savedUserAccountWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Last_Name).toBeDefined();
  });