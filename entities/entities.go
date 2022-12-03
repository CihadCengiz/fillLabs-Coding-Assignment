package entities

//User type on database
type User struct {
	Id   string `bson:"_id,omitempty" json:"id,omitempty"`
	Name string `json:"name,omitempty" validate:"required"`
	Age  int    `json:"age,omitempty" validate:"required"`
}
