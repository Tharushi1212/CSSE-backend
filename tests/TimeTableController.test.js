const mongoose = require("mongoose");
const User = require("../models/TimeTablesSchema");


  test("create Time Tables without required field should failed", async () => {
    const TimeTableWithoutRequiredField = new User({ Bus_ID: "Bus ID testing"});
    let err;
    try {
      const savedTimeTableWithoutRequiredField =
        await TimeTableWithoutRequiredField.save();
      err = savedTimeTableWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Route).toBeDefined();
  });