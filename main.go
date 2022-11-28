package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"

	"example/server/configs"
	"example/server/routes"
)

type User struct {
	ID   string `bson:"_id,omitempty"`
	Name string `bson:"name,omitempty"`
	Age  int    `bson:"age,omitempty"`
}

func main() {
	//Connect to database
	configs.ConnectDB()
	// Initialize the router
	router := mux.NewRouter().StrictSlash(true)

	// Register Routes
	routes.UserRoute(router)

	log.Fatal(http.ListenAndServe(":6000", router))
}
