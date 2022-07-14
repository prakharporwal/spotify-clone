package models

type Album struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Songs    []Song `json:"songs"`
	ImageUrl string `json:"image_url"`
}
