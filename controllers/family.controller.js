const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator/check');

const Post = require('../models/post');
const User = require('../models/user');
const Family = require('../models/family');

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems: totalItems
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  console.log('createFamilyPost', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    // const error = new Error('No image provided.');
    // error.statusCode = 422;
    // throw error;
  }
  const imageUrl = 'data:image/jpeg;base64,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'//req.file.path;
  const name = req.body.name;
  let creator;
  console.log(req.userId);
  const family = new Family({
    name: name,
    imageUrl: imageUrl,
    user: req.userId
  });
  family
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      console.log(user);
      creator = user;
      user.families.push(family);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'Family created successfully!',
        data: result,
       // creator: { _id: creator._id, name: creator.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }
  if (!imageUrl) {
    const error = new Error('No file picked.');
    error.statusCode = 422;
    throw error;
  }
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
      }
      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Post updated!', post: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      if (post.creator.toString() !== req.userId) {
        const error = new Error('Not authorized!');
        error.statusCode = 403;
        throw error;
      }
      // Check logged in user
      clearImage(post.imageUrl);
      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      user.posts.pull(postId);
      return user.save();
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted post.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};
