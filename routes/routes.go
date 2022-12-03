package routes

import (
	"example/server/controllers"

	"github.com/gorilla/mux"
)

func UserRoute(router *mux.Router) {
	//All routes related to users
	router.HandleFunc("/users", controllers.GetAllUser()).Methods("GET", "OPTIONS")
	router.HandleFunc("/user", controllers.CreateUser()).Methods("POST", "OPTIONS")
	router.HandleFunc("/user/{userId}", controllers.GetAUser()).Methods("GET", "OPTIONS")
	router.HandleFunc("/user/{userId}", controllers.EditAUser()).Methods("PUT", "OPTIONS")
	router.HandleFunc("/user/{userId}", controllers.DeleteAUser()).Methods("DELETE", "OPTIONS")
}
