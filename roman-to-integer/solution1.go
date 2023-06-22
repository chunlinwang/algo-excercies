func romanToInt(s string) int {
    symbols := strings.Split(s, "")

    len := cap(symbols) - 1

    var cur, last, total int = 0 , 0, 0;

    for len >= 0 {
        cur = getInt(symbols[len])

        if cur < last {
            total -= cur
        } else {
            total += cur
        }
        last = cur
        len -= 1
    }

    return total
}

func getInt(s string) int {
    switch s {
	    case "I":
            return 1
	    case "V":
            return 5
        case "X":
            return 10
	    case "L":
            return 50
        case "C":
            return 100
	    case "D":
            return 500
        case "M":
            return 1000
        default:
            return 0
	}

    return 0
}