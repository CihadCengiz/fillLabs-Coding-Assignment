package main

import (
	"log"
	"net/http"

	"github.com/rs/cors"

	"github.com/gorilla/mux"

	"example/server/configs"
	"example/server/routes"
)

func main() {
	//Connect to database
	configs.ConnectDB()
	// Initialize the router
	router := mux.NewRouter().StrictSlash(true)

	// Register Routes
	routes.UserRoute(router)

	//Cors setup for cross origin requests
	co := cors.New(cors.Options{
		AllowedMethods:   []string{"GET", "POST", "DELETE", "PUT"},
		AllowCredentials: true,
		// Enable Debugging for testing, consider disabling in production
		Debug: true,
	})

	handler := co.Handler(router)

	log.Fatal(http.ListenAndServe(":3001", handler))
}
