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
	"github.com/globalsign/mgo"
)

type Person struct {
	Name      string
	Age     int
}

func checkErr(err error){
	if err!=nil {
		fmt.Println("error! ", err)
		panic("ERROR THROWN")
	}
}

func main() {

	fmt.Println( "Beginning execution...\n\n")
	resp,err := http.Get("http://localhost:27017")
	checkErr(err)

	p := make([]byte, resp.ContentLength)
	resp.Body.Read(p)
	fmt.Println("Response\n", string(p))


	session, err := mgo.Dial("root:example@127.0.0.1:27017")
	c := session.DB("test").C("people")
	err = c.Insert(&Person{Name: "John", Age: 30})
	checkErr(err)


	defer session.Close()
	defer fmt.Println("deferred function called")
	checkErr(err)


	

}