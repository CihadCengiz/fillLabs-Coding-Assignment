package routes

import (
	"example/server/controllers"

	"github.com/gorilla/mux"
)

func UserRoute(router *mux.Router) {
	//All routes related to users
	router.HandleFunc("/user", controllers.CreateUser()).Methods("POST")
	router.HandleFunc("/users", controllers.GetAllUser()).Methods("GET")
	router.HandleFunc("/user/{userId}", controllers.GetAUser()).Methods("GET")
	router.HandleFunc("/user/{userId}", controllers.EditAUser()).Methods("PUT")
	router.HandleFunc("/user/{userId}", controllers.DeleteAUser()).Methods("DELETE")
}
