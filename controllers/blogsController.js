const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const TravelModal = require('../models/blogModel');

const bookTickets = async (req, res) => {
  console.log('blogs');
  const bookingdata = req.body;
  const newBlog = new TravelModal(bookingdata);
  console.log('saved data', TravelModal);
  try {
    await newBlog.save();

    res.status(200).json({ newBlog });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllBookings = async (req, res) => {
  console.log('mmmmmmmm');

  try {
    const AllBlogs = await TravelModal.find();
    console.log(AllBlogs);

    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllBookingByEmail = async (req, res) => {
  console.log('Get Booked by EMail');
  const { email } = req.body;
  console.log(email);
  try {
    const AllBlogs = await TravelModal.find({ email: email });
    console.log(AllBlogs);

    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const removeBookById = async (req, res) => {
  const { id } = req.params;
  const deleteBook = {
    _id: id,
  };
  console.log('blog delete function', id);

  let data = await TravelModal.findByIdAndRemove(id);

  res.json({ data: data, msg: 'delete success' });
};

module.exports = {
  bookTickets,
  getAllBookings,
  removeBookById,
  getAllBookingByEmail,
};
