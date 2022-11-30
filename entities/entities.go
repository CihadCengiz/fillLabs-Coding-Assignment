package entities

type User struct {
	Id   string `bson:"_id" json:"id,omitempty"`
	Name string `json:"name,omitempty" validate:"required"`
	Age  int    `json:"age,omitempty" validate:"required"`
}
