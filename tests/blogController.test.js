const mongoose = require("mongoose");
const User = require("../models/blogModel");


  test("create Booking without required field should failed", async () => {
    const BookingWithoutRequiredField = new User({ start: "Bus ID testing"});
    let err;
    try {
      const savedBookingWithoutRequiredField =
        await BookingWithoutRequiredField.save();
      err = savedBookingWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.end).toBeDefined();
  });

