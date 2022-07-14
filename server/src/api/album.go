package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/prakharporwal/spotify-backend/klogger"
	"github.com/prakharporwal/spotify-backend/models"
)

func GetAlbum(ctx *gin.Context) {

	klogger.Info("inside GetArtist!")

	songList1 := []models.Song{
		{
			Name:     "Just Play Now",
			ImageUrl: "images/song-damn.jpg",
			Artist:   "Mr Bean",
		},
		{
			Name:     "Just Play Now",
			ImageUrl: "images/song-damn.jpg",
			Artist:   "Mr Bean",
		},
	}

	res := []models.Album{
		{
			Id:    "anjsax",
			Name:  "Recently Played",
			Songs: songList1,
		},
		{
			Id:    "radome",
			Name:  "Your mixes",
			Songs: songList1,
		},
	}
	ctx.JSON(http.StatusOK, res)
}
