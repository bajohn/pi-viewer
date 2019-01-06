// package main

// import (
//         "fmt"
//         "os"
// )

// func main() {
//         fmt.Println("Print from the Go program")
//         fmt.Println(os.Getenv("TEST_ENV"))
// }
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, you've requested via nginx: %s\n", r.URL.Path)
	})

	http.ListenAndServe(":8002", nil)
}