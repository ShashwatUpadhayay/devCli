package main

import (
	"fmt"
	"os"
)

func startApp() {
	fmt.Println("Starting development server...")
}

func cleanApp() {
	fmt.Println("Cleaning project...")
}

func main() {

	if (len(os.Args)) < 2 {
		fmt.Println("Usage: myCli [Start | Clean]")
	}

	command := os.Args[1]

	switch command {
	case "Start", "start":
		startApp()

	case "Clean", "clean":
		cleanApp()

	default:
		fmt.Println("Unknown Command:", command)
	}
}
