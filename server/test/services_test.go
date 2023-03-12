package spotify_test

import (
	"fmt"
	"testing"

	"github.com/prakharporwal/spotify-backend/services"
)

func TestServiceAlbum(t *testing.T) {

	t.Run("Should Print", func(t *testing.T) {
		out := services.GenerateRandomAlbum()
		fmt.Println(out)
	})

}
