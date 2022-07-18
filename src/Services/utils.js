import React from "react";

export const cryptoApiHeaders = {
	// 'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
	// 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
	'Content-Type': 'application/json'
};

export const newsApiHeaders = {
	"X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
	"X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST_NEWS
}