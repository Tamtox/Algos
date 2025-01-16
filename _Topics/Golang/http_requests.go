
func httpRequest() {
	// Send GET request
	resp, err := http.Get("https://jsonplaceholder.typicode.com/posts")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()
	// Read JSON response
	json, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
}