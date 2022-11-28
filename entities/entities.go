package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id   primitive.ObjectID `bson:"_id" json:"id,omitempty"`
	Name string             `json:"name,omitempty" validate:"required"`
	Age  int                `json:"age,omitempty" validate:"required"`
}
