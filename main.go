package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

type Weather struct {
	CurrentCondition []struct {
		TempC       string `json:"temp_C"`
		Humidity    string `json:"humidity"`
		WeatherDesc []struct {
			Value string `json:"value"`
		} `json:"weatherDesc"`
	} `json:"current_condition"`
	NearestArea []struct {
		AreaName []struct {
			Value string `json:"value"`
		} `json:"areaName"`
	} `json:"nearest_area"`
}

func getWeather(city string) {

	url := "https://wttr.in/" + city + "?format=j1"

	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("Error fetching weather data:", err)
		return
	}

	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		fmt.Println("API request failed with status:", resp.StatusCode)
		body, _ := ioutil.ReadAll(resp.Body)
		fmt.Println("Response body:", string(body))
		return
	}

	body, _ := ioutil.ReadAll(resp.Body)

	var data Weather

	err = json.Unmarshal(body, &data)
	if err != nil {
		fmt.Println("Error parsing JSON:", err)
		return
	}

	fmt.Println(" City:", data.NearestArea[0].AreaName[0].Value)
	fmt.Println(" Temperature:", data.CurrentCondition[0].TempC, "°C")
	fmt.Println(" Condition:", data.CurrentCondition[0].WeatherDesc[0].Value)
	fmt.Println(" Humidity:", data.CurrentCondition[0].Humidity, "%")
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <city>")
		return
	}

	city := os.Args[1]
	fmt.Println("Fetching weather for:", city)
	getWeather(city)
}
