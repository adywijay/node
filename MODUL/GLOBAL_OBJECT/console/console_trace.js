function func1() {
    func2();
}

function func2() {
    console.trace();
}

func1();

/**
 * Metode ini mencetak tumpukan panggilan (stack trace) ke konsol.
 */