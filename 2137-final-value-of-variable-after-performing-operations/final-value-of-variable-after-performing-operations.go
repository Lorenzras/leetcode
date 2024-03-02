func finalValueAfterOperations(operations []string) int {

 value := 0
 for _, op := range operations {
     if strings.Contains(op, "+") {
         value++
     } else {
         value--
     }
 }   

    return value
}