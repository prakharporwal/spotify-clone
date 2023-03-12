package services

import "github.com/prakharporwal/spotify-backend/models"

func GenerateRandomAlbum() *[]models.Album {
	return &[]models.Album{
		{Id: "kuchsd", Name: "hahs", Songs: []models.Song{}, IsPublic: true, ImageUrl: "xkcd.com"},
	}
}
