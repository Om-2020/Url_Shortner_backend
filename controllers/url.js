import { Url } from "../models/url.js";
import validator from "validator";
import shortid from "shortid";


export const UrlShortcode_generator = async (req, res, next) => {
  try {
    const { longUrl } = req.body;

    // Validate the URL
    const validateresult = validator.isURL(longUrl);

    if(!validateresult) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide a valid URL." });
    }

    // Create a shortcode
    const shortCode = shortid(); 
    
    // Save the URL in the database
    const url = new Url({
      longUrl,
      shortCode,
      user: req.user,
    });
    await url.save();

    res.status(201).json({ success: true, shortCode });
  } catch (error) {
    next(error);
  }
};

export const Visit_Original_Long_Url = async (req, res, next) => {

  try {
    const shortCode = req.params.shortcode;
    const url = await Url.findOne({shortCode});

    if (url) {
      // Redirect to the original URL
      url.clickCount += 1;
      await url.save();
      res.redirect(url.longUrl);
    } else {
      res.status(404).json({ success: false, message: "URL not found" });
    }
  } catch (error) {
    next(error);
  }
};


export const getMyShortUrl = async(req,res,next)=>{
    try {

      const userid = req.user._id;

      const shorturl = await Url.find({ user: userid });

     res.status(200).json({
        success: true,
        shorturl,
      });
    } catch (error) {
      next(error);
    }

}

export const updateShortUrl = async (req, res, next) => {
  try {
    
    const {shortcode} = req.body;

    const url = await Url.findById(req.params.id);
    if (!url) return next(new ErrorHandler("Short Url not found", 404));

    url.shortCode = shortcode;

    await url.save();

    res.status(200).json({
      success: true,
      message: "Short Url is Updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteShortUrl = async (req, res, next) => {
  
    try {
      const url = await Url.findById(req.params.id);

      if (!url) return next(new ErrorHandler(" Short Url not found", 404));
      await url.deleteOne();

      res.status(200).json({
        message: "Short url Deleted",
        success: true,
      });
    } catch (error) {
      next(error);
    }
};